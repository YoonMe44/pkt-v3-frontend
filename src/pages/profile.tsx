import { SidebarContext } from '@/components/Layouts/MainLayout';
import { language } from '@/lang/lang';
import Image from 'next/image'
import DatePicker from "react-datepicker";
import React, { useContext, useEffect, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from '@/hooks/auth';
import moment from 'moment';
import RequestedInterviews from '@/components/RequestedInterviews';
import { toast } from 'react-toastify';

interface formDataType {
    id: string
    name: string
    email: string
    password: string
    password_confirmation: string
    birthday: any
    phone: string
    address: string
    business: string,
    profile_photo_path: any
}

function profile() {
    const [tab, setTab] = useState('tab_1');
    const [showEdit, setShowEdit] = useState(false);
    let { lang } = useContext(SidebarContext);
    const [status, setStatus] = useState<boolean>(false);
    const [errors, setErrors] = useState<any>([]);
    const [profilePreview,setProfilePreview] = useState<any>(null);
    const [data, setData] = useState<formDataType>({
        id: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        birthday: null,
        phone: "",
        address: "",
        business: "",
        profile_photo_path: ""

    });
    const [showPwd, setShowPwd] = useState({
        pwd: false,
        conf_pwd: false
    });
    const { user, updateProfile , logout} = useAuth({
        redirectIfNoAuth: '/'
    });

    const handleUpload = (e:any) => {
        e.preventDefault();
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        setData({
            ...data,
            profile_photo_path: file
        });
        setProfilePreview(URL.createObjectURL(file));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setStatus(true);
        if (status) {
            return false;
        }
        updateProfile({
            ...data,
            setErrors,
            setStatus
        });
        toast.success("Profile updated successfully", {
            theme: 'light',
            autoClose: 4000,
        });
    }

    const clearForm = () => {
        if (user) {
            setData({
                id: user?.id,
                name: user?.name,
                email: user?.email,
                password: "",
                password_confirmation: "",
                birthday: new Date(user?.birthday),
                phone: user?.phone,
                address: user?.address,
                business: user?.business,
                profile_photo_path: user?.profile_photo_path?.public_path
            })
        }
        setShowEdit(false);
        setProfilePreview(null);
        setErrors([]);
    }

    const handleLogout = () => {
        logout();
        toast.info("Logged out", {
            theme: 'light',
            autoClose: 4000,
        });
    }

    useEffect(() => {
        if (user) {
            setData({
                id: user?.id,
                name: user?.name,
                email: user?.email,
                password: "",
                password_confirmation: "",
                birthday: new Date(user?.birthday),
                phone: user?.phone,
                address: user?.address,
                business: user?.business,
                profile_photo_path: user?.profile_photo_path?.public_path
            })
        }
    }, [user]);

    return (
        <div className="max-w-6xl mx-auto">

            <div className={`w-full mx-auto bg-custom-white-17 backdrop-blur-9  shadow-custom rounded-[30px] md:p-8 p-4 py-12  xl:w-3/4`}>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-start'>
                    <div>
                        <div className='overflow-hidden relative w-44 h-44 mb-2'>
                            <Image
                                fill
                                className=""
                                src={profilePreview ? profilePreview : data.profile_photo_path ? data.profile_photo_path : "/statics/images/default.jpg"}
                                alt="profile.png"
                            />
                         {showEdit &&   <label htmlFor='profile-upload' className='absolute right-0 bottom-0 bg-gray-400 opacity-80 w-full font-semibold text-white text-center cursor-pointer py-1 '>
                                Upload
                            </label>}
                            <input type='file' hidden id='profile-upload' onChange={(e) => handleUpload(e)}/>
                        </div>
                        <p className='text-black font-semibold'>
                            {user?.name}
                        </p>
                        <p className='text-red-600 font-semibold'>
                            {user?.business}
                        </p>
                    </div>
                    <div className='col-span-2 w-full'>
                        {/* <p className='text-md font-semibold text-red-600'>Description</p>
                        <p className='text-sm text-black'>
                            {user?.description}
                        </p> */}


                        {showEdit ?
                            <div className='my-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800'>
                                <div className="mb-2">
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
                                </div>
                                <div className="my-2">
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

                                <div className="my-2">
                                    <label htmlFor="birthday" className="block text-md font-medium text-gray-900">{language[lang].birthday}</label>
                                    <DatePicker selected={data.birthday} id="birthday" onChange={(date) => {
                                        console.log(date);

                                        setData({ ...data, birthday: date })
                                    }} className='bg-transparent border-b-2 border-0 border-gray-300 ring-0 focus:ring-0 w-full peer focus:border-gray-900' placeholderText={language[lang].select_birthday} />
                                    <p className='text-red-600 text-xs mt-1'>{errors?.birthday}</p>
                                </div>
                                <div className="my-2">
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

                                <div className="my-2">
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
                                <div className="my-2">
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


                                <div className="relative my-2">
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
                                <div className="relative my-2">
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

                                <div>
                                    <button className='bg-red-600 text-white font-semibold p-2 shadow-lg rounded-lg mt-2 hover:bg-red-500' onClick={handleSubmit}>
                                        {status ? "Processing..." : "Update"}
                                    </button>
                                    <button className='bg-gray-500 text-gray-50 ml-2 font-semibold p-2 shadow-lg rounded-lg mt-2 hover:bg-gray-400' onClick={() => clearForm()}>
                                        Cancel
                                    </button>
                                </div>

                            </div>
                            :
                            <div>
                                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                        <li className="me-2">
                                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tab === 'tab_1' ? 'text-red-600 hover:text-red-500 border-red-600' : 'text-gray-600 border-gray-300 hover:text-gray-500'}`} id="profile-tab" type="button" onClick={() => setTab('tab_1')}>Information</button>
                                        </li>
                                        <li className="me-2">
                                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tab === 'tab_2' ? 'text-red-600 hover:text-red-500 border-red-600' : 'text-gray-600 border-gray-300 hover:text-gray-500'} `} type="button" onClick={() => setTab('tab_2')}>Interviews</button>
                                        </li>
                                        <li className="me-2">
                                            <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tab === 'tab_3' ? 'text-red-600 hover:text-red-500 border-red-600' : 'text-gray-600 border-gray-300 hover:text-gray-500'} `} type="button" onClick={() => setTab('tab_3')}>Settings</button>
                                        </li>

                                    </ul>
                                </div>
                                <div id="default-tab-content">
                                    <div className={`${tab === 'tab_1' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <table className='text-sm text-gray-500 dark:text-gray-400'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Name
                                                    </td>
                                                    <td>
                                                        <span className='mx-2'>-</span> {user?.name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Email
                                                    </td>
                                                    <td>
                                                        <span className='mx-2'>-</span> {user?.email}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Phone
                                                    </td>
                                                    <td>
                                                        <span className='mx-2'>-</span>{user?.phone}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Birthday
                                                    </td>
                                                    <td>
                                                        <span className='mx-2'>-</span> {
                                                    
                                                            moment(user?.birthday).format("ll")
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Business
                                                    </td>
                                                    <td>
                                                        <span className='mx-2'>-</span> {user?.business}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Address
                                                    </td>
                                                    <td>
                                                        <span className='mx-2'>-</span> {user?.address}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={`${tab === 'tab_2' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800 h-[28rem] overflow-y-auto`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                        <RequestedInterviews />
                                    </div>
                                    <div className={`${tab === 'tab_3' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">

                                        <div className='text-yellow-500 underline py-1 border-b-[1px] border-b-gray-300 w-full ps-2 bg-gray-100 text-sm'>
                                            <div onClick={() => setShowEdit(true)} className=' flex align-middle items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='mr-2 hover:cursor-pointer' x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50" fill='#D29D4A'>
                                                    <path d="M 43.050781 1.9746094 C 41.800781 1.9746094 40.549609 2.4503906 39.599609 3.4003906 L 38.800781 4.1992188 L 45.699219 11.099609 L 46.5 10.300781 C 48.4 8.4007812 48.4 5.3003906 46.5 3.4003906 C 45.55 2.4503906 44.300781 1.9746094 43.050781 1.9746094 z M 37.482422 6.0898438 A 1.0001 1.0001 0 0 0 36.794922 6.3925781 L 4.2949219 38.791016 A 1.0001 1.0001 0 0 0 4.0332031 39.242188 L 2.0332031 46.742188 A 1.0001 1.0001 0 0 0 3.2578125 47.966797 L 10.757812 45.966797 A 1.0001 1.0001 0 0 0 11.208984 45.705078 L 43.607422 13.205078 A 1.0001 1.0001 0 1 0 42.191406 11.794922 L 9.9921875 44.09375 L 5.90625 40.007812 L 38.205078 7.8085938 A 1.0001 1.0001 0 0 0 37.482422 6.0898438 z"></path>
                                                </svg>
                                                <span className='hover:cursor-pointer'>
                                                    Edit Profile
                                                </span>
                                            </div>

                                        </div>
                                        <div className='text-red-600 underline py-1 border-b-[1px] border-b-gray-300 w-full ps-2 bg-gray-100 text-sm'>
                                            <div onClick={handleLogout} className=' flex align-middle items-center '>
                                                <img src='/statics/images/logout-svgrepo-com.svg' alt='logout.png' />
                                                <span className='hover:cursor-pointer ml-2'>
                                                    Logout
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                  

                                </div>
                            </div>
                        }
                     
                    </div>
                </div>

            </div>
        </div>
    )
}

export default profile
