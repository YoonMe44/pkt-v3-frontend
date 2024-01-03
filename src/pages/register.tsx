import { SidebarContext } from '@/components/Layouts/MainLayout';
import PageTitle from '@/components/PageTitle'
import { language } from '@/lang/lang';
import DatePicker from "react-datepicker";
import React, { useContext, useState } from 'react'
// css
import "react-datepicker/dist/react-datepicker.css";
import RedButton from '@/components/RedButton';
import { useAuth } from '@/hooks/auth';
import Button from '@/components/Button';
interface formDataType {
    name: string
    email: string
    password: string
    password_confirmation: string
    birthday: Date | null
    phone: string
    address: string
    business: string
}
function register() {
    let { lang } = useContext(SidebarContext);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const { register, login, user } = useAuth({
        redirectIfAuthenticated: '/',
    });
    const [showPwd, setShowPwd] = useState({
        pwd: false,
        conf_pwd: false
    });
    const [status, setStatus] = useState<boolean>(false);
    const [errors, setErrors] = useState<any>([]);
    const [data, setData] = useState<formDataType>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        birthday: null,
        phone: "",
        address: "",
        business: "",
    });

    const clearForm = () => {
        setData({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            birthday: null,
            phone: "",
            address: "",
            business: "",
        });
        setErrors([]);
        setShowPwd({
            pwd: false,
            conf_pwd: false
        });
    }
    const pageTitle = {
        title: language[lang].pkt_education_center,
        content_1: "For further information",
        content_2: "",
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setStatus(true);
        if (status) {
            return false;
        }
        console.log("submited");
        if (isLogin) {
            login({
                ...data,
                setErrors,
                setStatus
            })
        } else {
            register({
                ...data,
                setErrors,
                setStatus,

            });
        }

    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className='mb-12'>
                <PageTitle pageTitle={pageTitle} />
            </div>
            <div className={`w-full mx-auto bg-custom-white-17 backdrop-blur-9  shadow-custom rounded-[30px] md:p-8 p-4 py-12  ${isLogin ? " xl:w-1/2" : "xl:w-3/4"} `}>
                <p className='text-center font-semibold text-red-600 text-[30px]'>
                    {isLogin ? "Sign In" : "Sign Up"}
                </p>
                <div className={`grid ${isLogin ? " lg:grid-cols-1" : "lg:grid-cols-2"} grid-cols-1 gap-4 my-4 mb-6`}>
                    {!isLogin && <div className="">
                        <label htmlFor="name" className="block text-md font-medium text-gray-900">{language[lang].name}</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                            placeholder={language[lang].enter_your_name}
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            required
                        />
                        <p className='text-red-600 text-xs mt-1'>{errors?.name}</p>
                    </div>}
                    <div className="">
                        <label htmlFor="email" className="block text-md font-medium text-gray-900">{language[lang].email}</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder={language[lang].enter_your_email}
                            required
                        />
                        <p className='text-red-600 text-xs mt-1'>{errors?.email}</p>
                    </div>
                    {!isLogin &&
                        <>
                            <div className="mt-1">
                                <label htmlFor="birthday" className="block text-md font-medium text-gray-900">{language[lang].birthday}</label>
                                <DatePicker selected={data.birthday} id="birthday" onChange={(date) => setData({ ...data, birthday: date })} className='bg-transparent border-b-2 border-0 border-gray-300 ring-0 focus:ring-0 w-full peer focus:border-gray-900' placeholderText={language[lang].select_birthday} />
                                <p className='text-red-600 text-xs mt-1'>{errors?.birthday}</p>
                            </div>
                            <div className="">
                                <label htmlFor="phone" className="block text-md font-medium text-gray-900">{language[lang].phone_number}</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                    placeholder="Enter your phone number"
                                    value={data.phone}
                                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                                    required
                                />
                                <p className='text-red-600 text-xs mt-1'>{errors?.phone}</p>
                            </div>

                            <div className="">
                                <label htmlFor="address" className="block text-md font-medium text-gray-900">{language[lang].address}</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                    placeholder={language[lang].enter_your_address}
                                    value={data.address}
                                    onChange={(e) => setData({ ...data, address: e.target.value })}
                                    required
                                />
                                <p className='text-red-600 text-xs mt-1'>{errors?.address}</p>
                            </div>
                            <div className="">
                                <label htmlFor="business" className="block text-md font-medium text-gray-900">Business</label>
                                <input
                                    type="text"
                                    name="business"
                                    id="business"
                                    className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                    placeholder="Enter your business"
                                    value={data.business}
                                    onChange={(e) => setData({ ...data, business: e.target.value })}
                                    required
                                />
                                <p className='text-red-600 text-xs mt-1'>{errors?.business}</p>
                            </div>
                        </>
                    }
                    <div className="relative">
                        <label htmlFor="password" className="block text-md font-medium text-gray-900">Password</label>
                        <input
                            type={showPwd.pwd ? "text" : "password"}
                            name="password"
                            id="password"
                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            required
                        />
                        {
                            showPwd.pwd ? <img src="/statics/images/eye-show-svgrepo-com.svg" alt='eye.png' className='absolute hover:cursor-pointer top-10 right-4' onClick={() => setShowPwd({
                                ...showPwd,
                                pwd: false
                            })} />
                                : <img src="/statics/images/eye-hide-svgrepo-com.svg" alt='eye.png' className='absolute  hover:cursor-pointer  top-10 right-4' onClick={() => setShowPwd({
                                    ...showPwd,
                                    pwd: true
                                })} />
                        }


                        <p className='text-red-600 text-xs mt-1'>{errors?.password}</p>
                    </div>
                    {!isLogin &&
                        <div className="relative">
                            <label htmlFor="password_confirmation" className="block text-md font-medium text-gray-900">Confirm Password</label>
                            <input
                                type={showPwd.conf_pwd ? "text" : "password"}
                                name="password_confirmation"
                                id="password_confirmation"
                                className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                placeholder="Enter your password again"
                                value={data.password_confirmation}
                                onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
                                required
                            />
                            {
                                showPwd.conf_pwd ? <img src="/statics/images/eye-show-svgrepo-com.svg" alt='eye.png' className='absolute hover:cursor-pointer top-10 right-4' onClick={() => setShowPwd({
                                    ...showPwd,
                                    conf_pwd: false
                                })} />
                                    : <img src="/statics/images/eye-hide-svgrepo-com.svg" alt='eye.png' className='absolute  hover:cursor-pointer  top-10 right-4' onClick={() => setShowPwd({
                                        ...showPwd,
                                        conf_pwd: true
                                    })} />
                            }
                            <p className='text-red-600 text-xs mt-1'>{errors?.password_confirmation}</p>
                        </div>
                    }
                </div>

                <div className='flex flex-col items-center'>
                    <Button title={status ? "Processing..." : isLogin ? "Login" : "Register"} onSubmit={handleSubmit} />
                    <p className='mt-2' onClick={() => { setIsLogin(!isLogin); clearForm() }}> {isLogin ? "Don't have an account? " : "Already have an account? "}<span className='cursor-pointer underline text-red-600 font-semibold ml-1'>{isLogin ? "Register" : "Login"}</span></p>
                </div>
            </div>
        </div>
    )
}

export default register
