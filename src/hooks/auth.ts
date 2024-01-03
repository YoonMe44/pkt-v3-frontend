import { SidebarContext } from "@/components/Layouts/MainLayout"
import axios, { getAccessToken } from "@/lib/axios"
import { useRouter } from "next/router"
import { useCallback, useContext, useEffect, useState } from "react"
import useSWR from "swr"

declare type AuthMiddleware = 'auth' | 'guest'

interface IUseAuth {
    middleware?: AuthMiddleware
    redirectIfAuthenticated?: string
    redirectIfNoAuth?: string
}

interface IApiRequest {
    setErrors: React.Dispatch<React.SetStateAction<never[]>>
    setStatus: React.Dispatch<React.SetStateAction<any | null>>
    setComplete?: React.Dispatch<React.SetStateAction<boolean>>
    [key: string]: any
}

export const useAuth = ({ redirectIfAuthenticated, redirectIfNoAuth, middleware }: IUseAuth) => {
    const router = useRouter();
    let { resetInitialState } = useContext(SidebarContext);
    const {
        data: user,
        error,
        mutate,
    } = useSWR<any>(
        '/api/user',
        async () => {
            const accessToken = getAccessToken();
            return await axios
                .get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then(res => res.data)
                .catch(error => {
                    console.log("error", error);
                    resetInitialState();
                    if (error.response.status !== 409) throw error
                });
        }

    )

    const login = (args: IApiRequest) => {
        const { setErrors, setStatus, ...props } = args
        setErrors([])

        axios
            .post('/api/login', props)
            .then((res) => {
                const { token, message } = res.data;
                localStorage.setItem('token', token);
                setStatus(false);
                mutate()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
                setStatus(false);
            })
    }

    const register = (args: IApiRequest) => {
        const { setErrors, setStatus, ...props } = args

        setErrors([])

        axios
            .post('/api/register', props)
            .then((res) => {
                console.log(res.data);
                const { token, message } = res.data;
                localStorage.setItem('token', token);
                mutate()
                setStatus(false);

            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
                setStatus(false);

            })
    }

    const resentMail = (args: IApiRequest) => {
        const { setErrors, setStatus, setComplete, ...props } = args

        setErrors([])
        axios
            .post(`/api/resend-verification-email/${props.id}/frontend`)
            .then((res) => {
                const { token, message } = res.data;
                localStorage.setItem('token', token);
                setStatus(false);
                setComplete && setComplete(true);
                mutate()
            }).catch(error => {
                setErrors(error.response.data.errors)
                setStatus(false);
            })
    }

    const logout = useCallback(async () => {
        localStorage.removeItem('token');
        resetInitialState();
        if (!error) {
            await axios.post('/api/logout').then(() => mutate())
        }

        window.location.pathname = '/register'
    }, [error, mutate])

    useEffect(() => {
        if (redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)

        if (
            router.pathname === '/email-verify' &&
            user?.email_verified_at
        )
            router.push('/')

        if (
            window.location.pathname === '/email-verify' &&
            !user
        )
            router.push('/')

    }, [router, logout, redirectIfNoAuth, redirectIfAuthenticated, user])

    return {
        user,
        register,
        login,
        logout,
        resentMail,
        mutate,
    }
}