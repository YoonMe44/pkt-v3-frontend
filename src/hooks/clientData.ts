import { useAuth } from "./auth"

export const useClientData = () => {
    const { user } = useAuth({});
    const getRequestedInterviews = () => {
        console.log(user);
        return user;

    }
    return {
        getRequestedInterviews
    }
}