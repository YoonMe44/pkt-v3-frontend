import { SidebarContext } from '@/Layouts/MainLayout';
import FileHandler from '@/components/FileHandler';
import FilePreview from '@/components/FilePreview';
import PageTitle from '@/components/PageTitle';
import RedButton from '@/components/RedButton';
import { language } from '@/lang/lang'
import axios from '@/lib/axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

// css
import "react-datepicker/dist/react-datepicker.css";

type formDataType = {
    name: string,
    birthday: any,
    gender: string,
    address: string,
    phone: string,
    email: string,
    visa: string,
    job: string,
    cv: any,
    jft: any,
    edu: any,
    n4: any,
    n3: any,
    n2: any,
    n1: any,
    nrc_front: any,
    nrc_back: any,
    census_front: any,
    census_back: any,
    passport: any,
    photo: any,
    intro_vd: any
}
function index() {
    let { lang } = useContext(SidebarContext);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [reported, setReported] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    
    const [formData, setFromData] = useState<formDataType>({
        name: "",
        birthday: null,
        gender: "male",
        address: "",
        phone: "",
        email: "",
        visa: "work",
        job: "it",
        cv: null,
        jft: null,
        edu: null,
        n4: null,
        n3: null,
        n2: null,
        n1: null,
        nrc_front: null,
        nrc_back: null,
        census_front: null,
        census_back: null,
        passport: null,
        photo: null,
        intro_vd: null
    });

    const resetUpload = () => {
        setFromData({
            ...formData,
            jft: null,
            edu: null,
            n4: null,
            n3: null,
            n2: null,
            n1: null,
        });
    }

    const pageTitle = {
        title: language[lang].pkt_education_center,
        content_1: language[lang].job_app,
        content_2: ""
    };

    const resetFormData = () => {
        setFromData({
            name: "",
            birthday: null,
            gender: "male",
            address: "",
            phone: "",
            email: "",
            visa: "work",
            job: "it",
            cv: null,
            jft: null,
            edu: null,
            n4: null,
            n3: null,
            n2: null,
            n1: null,
            nrc_front: null,
            nrc_back: null,
            census_front: null,
            census_back: null,
            passport: null,
            photo: null,
            intro_vd: null,
        });
        setUploadProgress(0);
        setCurrentStep(1);
    };

    const handleNext = () => {
        if (formData.name === "" || formData.birthday === null || formData.gender === "" || formData.address === "" || formData.phone === "" || formData.email === "" || formData.visa === "" || formData.job === "") {
            return false;
        }
        if (currentStep === 2 && formData.visa === "work" && (formData.n2 === null || formData.cv === null || formData.nrc_back === null || formData.nrc_front === null || formData.census_back === null || formData.census_front === null || formData.passport === null || formData.photo === null || formData.intro_vd === null)) {
            return false;
        }
        if (currentStep === 2 && formData.visa === "tokutei" && (formData.jft === null || formData.n4 === null || formData.cv === null || formData.nrc_back === null || formData.nrc_front === null || formData.census_back === null || formData.census_front === null || formData.passport === null || formData.photo === null || formData.intro_vd === null)) {
            return false;
        }
        console.log(formData);
        setCurrentStep(currentStep + 1);
    };
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    const getLineColor = (step: number) => {
        return step <= currentStep ? "bg-red-700" : "bg-gray-300";
    };

    const [uploadProgress, setUploadProgress] = useState(0);

    const job_types = {
        work: [
            {
                name: language[lang].it,
                value: 'it'
            },
            {
                name: language[lang].be,
                value: 'be'
            },
            {
                name: language[lang].hotel,
                value: 'hotel'
            },
            {
                name: language[lang].translator,
                value: 'translator'
            }
        ],
        tokutei: [
            {
                name: language[lang].restaurant,
                value: 'restaurant'
            },
            {
                name: language[lang].food,
                value: 'food'
            },
            {
                name: language[lang].hotel,
                value: 'hotel'
            },
            {
                name: language[lang].agriculture,
                value: 'agriculture'
            },
            {
                name: language[lang].elderly_care,
                value: 'elderly_care'
            },
            {
                name: language[lang].construction,
                value: 'construction'
            },
            {
                name: language[lang].building_cleaning,
                value: 'building_cleaning'
            }
        ],
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const file = formData.intro_vd;

        if (loading) {
            return false;
        }
        console.log('submitted');

        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        const data = new FormData();

        data.append("name", formData.name);
        data.append("birthday", formData.birthday);
        data.append("gender", formData.gender);
        data.append("address", formData.address);
        data.append("phone", formData.phone);
        data.append("email", formData.email);
        data.append("visa", formData.visa);
        data.append("job", formData.job);
        data.append("cv", formData.cv);
        data.append("edu", formData.edu);
        data.append("jft", formData.jft);
        data.append("n4", formData.n4);
        data.append("n3", formData.n3);
        data.append("n2", formData.n2);
        data.append("n1", formData.n1);
        data.append("nrc_front", formData.nrc_front);
        data.append("nrc_back", formData.nrc_back);
        data.append("census_front", formData.census_front);
        data.append("census_back", formData.census_back);
        data.append("passport", formData.passport);
        data.append("photo", formData.photo);

        if (file) {
            const CHUNK_SIZE = 1024 * 1024; // 1 MB chunks
            const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

            // Initialize the upload
            const res = await axios.post(`${baseUrl}/api/video/upload/init`, {
                filename: file.name,
                totalChunks,
            });

            const { uploadId } = res.data;

            // Upload each chunk
            for (let currentChunk = 0; currentChunk < totalChunks; currentChunk++) {
                const start = currentChunk * CHUNK_SIZE;
                const end = Math.min((currentChunk + 1) * CHUNK_SIZE, file.size);
                const chunk = file.slice(start, end);

                const formData = new FormData();
                formData.append('chunk', chunk);
                formData.append('uploadId', uploadId);
                formData.append('currentChunk', currentChunk.toString());

                await axios.post(`${baseUrl}/api/video/upload`, formData, {
                    onUploadProgress: (progressEvent: any) => {
                        const progress = Math.round(
                            ((currentChunk * CHUNK_SIZE + progressEvent.loaded) / file.size) * 100
                        );
                        setUploadProgress(progress);
                    },
                });

            }

            // Finalize the upload
            axios.post(`${baseUrl}/api/video/upload/complete`, { uploadId }).then(async (response) => {
                const { media } = response.data;
                data.append("intro_vd", media);
                const res = await axios.post(`${baseUrl}/api/job-apply`, data);
                const { message, status } = res.data;
                console.log(res.data);

                if (status === 201) {
                    setReported(true);
                }
                resetFormData();
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            });

        } else {
            data.append("intro_vd", "");
            const res = await axios.post(`${baseUrl}/api/job-apply`, data);
            const { message, status } = res.data;
            console.log(res.data);

            if (status === 201) {
                setReported(true);
            }
            resetFormData();
            setLoading(false);
        }
    }
    return (
        <div className="max-w-6xl mx-auto">
            <div className='mb-12'>
                <PageTitle pageTitle={pageTitle} />
            </div>
            <div className={`w-full mx-auto bg-custom-white-17 backdrop-blur-9  shadow-custom rounded-[30px] md:p-8 p-4 py-12 ${currentStep === 1 ? "xl:w-3/4" : "xl:w-3/5"}`}>
                {!reported ?
                    <div>
                        <div className="flex items-center justify-between mb-4 z-10 relative w-[90%] md:w-[64%] mx-auto">
                            {/* Step Indicators */}
                            {[1, 2, 3].map((step) => (
                                <div
                                    key={step}
                                    className={`h-4 w-4 border-[3px] rounded-full grow-0 flex items-center justify-center ${step <= currentStep
                                        ? "bg-red-600 border-red-300 text-red-main"
                                        : "bg-gray-300 text-gray-500"
                                        }`}
                                >
                                    <div className="mt-12 flex relative">
                                        {step === 1 && (
                                            <div className="w-[3rem] md:w-[8rem] mt-4 text-[12px] md:text-lg text-center ">
                                                {language[lang].personal_info}
                                            </div>
                                        )}
                                        {step === 2 && (
                                            <div className=" text-[12px] md:text-lg text-center whitespace-nowrap">
                                                {language[lang].upload}
                                            </div>
                                        )}
                                        {step === 3 && (
                                            <div className=" text-[12px] md:text-lg text-center whitespace-nowrap">
                                                {language[lang].confirmation}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative l w-[89%] md:w-[63%]  mx-auto">
                            <div
                                className={` absolute top-[10px] lg:mt-[-37px] md:mt-[-37px] sm:mt-[-37px] mt-[-38px] ${getLineColor(
                                    2
                                )} w-[50%] h-[6px] left-1/6 `}
                            ></div>
                            <div
                                className={` absolute top-[10px] lg:mt-[-37px] md:mt-[-37px] sm:mt-[-37px] mt-[-38px] ${getLineColor(
                                    3
                                )} w-[50%] h-[6px] left-1/2 `}
                            ></div>
                        </div>

                        <form className="w-full mt-14">
                            {currentStep === 1 && <div className={`transition duration-900 ${currentStep === 1 ? "opacity-100" : "opacity-0"}`}>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  lg:gap-6 gap-3  my-4">
                                    <div className="">
                                        <label htmlFor="name" className="block text-md font-medium text-gray-900">{language[lang].name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                            placeholder={language[lang].enter_your_name}
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFromData({ ...formData, name: e.target.value })
                                            }}
                                            required
                                        />

                                    </div>
                                    <div className="">
                                        <label htmlFor="birthday" className="block text-md font-medium text-gray-900">{language[lang].birthday}</label>
                                        <DatePicker selected={formData.birthday} id="birthday" onChange={(date) => setFromData({ ...formData, birthday: date })} className='bg-transparent border-b-2 border-0 border-gray-300 ring-0 focus:ring-0 w-full peer focus:border-gray-900' placeholderText={language[lang].select_birthday} />

                                    </div>


                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:gap-6 gap-3 my-4">
                                    <div className="">
                                        <label htmlFor="gender" className="block text-md font-medium text-gray-900 mb-3">{language[lang].gender}</label>
                                        <input id="gender-1" type="radio" value="male" name="gender" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-2 dark:bg-gray-700" onChange={(e) => setFromData({ ...formData, gender: e.target.value })} checked={formData.gender === 'male'} />
                                        <label htmlFor="gender-1" className="ms-2 mr-4 text-md font-medium text-gray-900 dark:text-gray-300">{language[lang].male}</label>

                                        <input id="gender-2" type="radio" value="female" name="gender" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-2 dark:bg-gray-700 " onChange={(e) => setFromData({ ...formData, gender: e.target.value })} checked={formData.gender === 'female'} />
                                        <label htmlFor="gender-2" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">{language[lang].female}</label>

                                    </div>
                                    <div className="">
                                        <label htmlFor="address" className="block text-md font-medium text-gray-900">{language[lang].address}</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={formData.address}
                                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                            placeholder={language[lang].enter_your_address}
                                            onChange={(e) => {
                                                setFromData({ ...formData, address: e.target.value })
                                            }}
                                            required
                                        />
                                    </div>


                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  lg:gap-6 gap-3 my-4">

                                    <div className="">
                                        <label htmlFor="phone" className="block text-md font-medium text-gray-900">{language[lang].phone_number}</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                            placeholder="+959251801804"
                                            required
                                            onChange={(e) => {
                                                setFromData({ ...formData, phone: e.target.value })
                                            }}
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="eamil" className="block text-md font-medium text-gray-900">{language[lang].email}</label>
                                        <input
                                            type="text"
                                            name="eamil"
                                            id="eamil"
                                            value={formData.email}
                                            className="block py-2.5 ps-2 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black"
                                            placeholder={language[lang].enter_your_email}
                                            required
                                            onChange={(e) => {
                                                setFromData({ ...formData, email: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1  lg:gap-6 gap-3 my-4">
                                    <div className="">
                                        <label htmlFor="visa" className="block text-md font-medium text-gray-900 mb-3">{language[lang].visa_type} {formData.visa === 'work' && <span className='text-red-main'>( {language[lang].must_be_n2_n1} )</span>}</label>

                                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                                            <div>
                                                <input id="visa-1" type="radio" value="tokutei" name="visa" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-2 dark:bg-gray-700" checked={formData.visa === 'tokutei'} onChange={(e) => {
                                                    resetUpload();
                                                    setFromData({ ...formData, visa: e.target.value })
                                                }} />
                                                <label htmlFor="visa-1" className="ms-2 mr-4 text-md font-medium text-gray-900 dark:text-gray-300">{language[lang].tokutei_visa}</label>
                                            </div>


                                            <div>
                                                <input id="visa-2" type="radio" value="work" name="visa" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 focus:ring-2 dark:bg-gray-700 " checked={formData.visa === 'work'} onChange={(e) => {
                                                    resetUpload();
                                                    setFromData({ ...formData, visa: e.target.value })
                                                }} />
                                                <label htmlFor="visa-2" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">{language[lang].work_visa}</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="relative z-0 w-full group">
                                        <label htmlFor="name" className="block mb-1 text-md font-medium text-gray-900 ">{language[lang].available_jobs}</label>
                                        <select
                                            id="job"
                                            name="job"
                                            className="block pl-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[2px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700"
                                            required
                                            onChange={(e) => {
                                                setFromData({ ...formData, job: e.target.value })
                                            }}
                                        >
                                            {formData.visa === 'tokutei' ?
                                                job_types.tokutei.map((item, index) => <option key={index} value={item.value} selected={formData.job === item.value}>{item.name}</option>) : job_types.work.map((item, index) => <option key={index} value={item.value} selected={formData.job === item.value}>{item.name}</option>)
                                            }
                                        </select>
                                    </div>


                                </div>
                            </div>
                            }
                            {currentStep === 2 && <div className={`transition duration-900 ${currentStep === 2 ? "opacity-100" : "opacity-0"}`}>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 grid-cols-1 md:gap-0 sm:gap-0 lg:gap-6 gap-0">
                                    <div className='my-2'>
                                        <label htmlFor="cv-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].cv_form}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.cv} file={formData} name="cv" setFile={setFromData}/>
                                        </div>
                                    </div>
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="edu-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].edu_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <FileHandler preview={formData.edu} file={formData} name="edu" setFile={setFromData}/>
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="jft-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].JFT}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <FileHandler preview={formData.jft} file={formData} name="jft" setFile={setFromData} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="n4-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n4_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <FileHandler preview={formData.n4} file={formData} name="n4" setFile={setFromData} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="n3-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n3_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <FileHandler preview={formData.n3} file={formData} name="n3" setFile={setFromData} />
                                            </div>
                                        </div>
                                    }
                                    <div className='my-2'>
                                        <label htmlFor="n2-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n2_certificate}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.n2} file={formData} name="n2" setFile={setFromData} />
                                        </div>
                                    </div>
                                    {formData.visa !== 'tokutei' &&
                                        <div className='my-2'>
                                            <label htmlFor="n1-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n1_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <FileHandler preview={formData.n1} file={formData} name="n1" setFile={setFromData} />
                                            </div>
                                        </div>
                                    }

                                    <div className='my-2'>
                                        <label htmlFor="nrc-front-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_front}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.nrc_front} file={formData} name="nrc_front" setFile={setFromData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="nrc-back-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_back}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.nrc_back} file={formData} name="nrc_back" setFile={setFromData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="census-front-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_front}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.census_front} file={formData} name="census_front" setFile={setFromData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="census-back-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_back}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.census_back} file={formData} name="census_back" setFile={setFromData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="passport-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].passport}</label>

                                        <div className="flex items-center justify-center w-full">
                                          
                                            <FileHandler preview={formData.passport} file={formData} name="passport" setFile={setFromData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="user-photo-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].your_photo}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.photo} file={formData} name="photo" setFile={setFromData} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].intro_vd}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <FileHandler preview={formData.intro_vd} file={formData} name="intro_vd" setFile={setFromData} type='video'/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            }

                            {currentStep === 3 && <div className={`transition duration-900 ${currentStep === 3 ? "opacity-100" : "opacity-0"}`}>
                                <div className="grid md:grid-cols-2  grid-cols-1 md:gap-0 sm:gap-0 ml-2 sm:ml-10 md:ml-0  gap-2 justify-items-start text-[12px] md:text-[16px]">

                                    <table className='text-[12px] md:text-[16px] whitespace-normal break-all'>
                                        <tbody>
                                            <tr>
                                                <td className='w-1/4'>Name</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.name}</td>
                                            </tr>
                                            <tr>
                                                <td className='w-1/4 whitespace-nowrap'>Birthday</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.birthday && formData.birthday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                                            </tr>
                                            <tr>
                                                <td className='w-1/4'>Gender</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.gender === 'male' ? "Male" : "Female"}</td>
                                            </tr>
                                            <tr className='break-all'>
                                                <td className='w-1/4 whitespace-nowrap'>Address</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.address}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className='text-[12px] md:text-[16px] break-all'>
                                        <tbody>
                                            <tr>
                                                <td className='w-1/4'>Phone</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.phone}</td>
                                            </tr>
                                            <tr>
                                                <td className='w-1/4'>Email</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.email}</td>
                                            </tr>
                                            <tr>
                                                <td className='w-1/4'>Visa</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.visa === 'work' ? "Work" : "Tokutei"}</td>
                                            </tr>
                                            <tr>

                                                <td className='w-1/4'>Job</td>
                                                <td className='w-3/4'><span className='mx-2'>-</span>{formData.job === 'it' && 'IT'}
                                                    {formData.job === 'be' && 'Be'}
                                                    {formData.job === 'translator' && 'Translator'}
                                                    {formData.job === 'hotel' && 'Hotel'}
                                                    {formData.job === 'restaurant' && 'Restaurant'}
                                                    {formData.job === 'food' && 'Food'}
                                                    {formData.job === 'agriculture' && 'Agriculture'}
                                                    {formData.job === 'elderly_care' && 'Elderly Care'}
                                                    {formData.job === 'construction' && 'Construction'}
                                                    {formData.job === 'building_cleaning' && 'Building Cleaning'}

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-4  grid-cols-1 md:gap-gap-0 lg:gap-6 gap-0">
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900 ">
                                            {language[lang].cv_form}
                                        </label>

                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.cv}/>
                                        </div>
                                    </div>
                                    {formData.visa !== 'work' && <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900 ">
                                            {language[lang].edu_certificate}
                                        </label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.edu} />
                                        </div>
                                    </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label className="text-center mb-2 block text-md font-medium text-gray-900 ">
                                                {language[lang].JFT}
                                            </label>

                                            <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                                <FilePreview file={formData.jft} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n4_certificate}</label>

                                            <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                                <FilePreview file={formData.n4} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' && <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n3_certificate}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.n3} />
                                        </div>
                                    </div>}
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n2_certificate}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.n2} />
                                        </div>
                                    </div>
                                    {formData.visa !== 'tokutei' &&
                                        <div className='my-2'>
                                            <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n1_certificate}</label>
                                            <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                                <FilePreview file={formData.n1} />
                                            </div>
                                        </div>
                                    }

                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_front}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.nrc_front} />
                                        </div>

                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="name" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_back}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.nrc_back} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_front}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.census_front} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_back}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.census_back} />
                                        </div>
                                    </div>

                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].passport}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.passport} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].your_photo}</label>
                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.photo} />
                                        </div>

                                    </div>
                                    <div className='my-2 '>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].intro_vd}</label>

                                        <div className="flex items-center justify-center w-32 h-32 overflow-hidden">
                                            <FilePreview file={formData.intro_vd} type='video'/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            }

                            <div className="flex justify-center sm:justify-end mt-12">
                                {/* Navigation Buttons */}
                                <div className="">
                                    {currentStep === 1 && (
                                        <div className="w-full flex-col-reverse xs:flex-row mx-auto flex gap-3  justify-center sm:justify-end">
                                            <button className="WhiteBtn">
                                                <span className="shadow1"></span>
                                                <span className="edge1"></span>
                                                <Link href="#" className="front1">
                                                    {language[lang].back}
                                                </Link>
                                            </button>
                                            <RedButton title={language[lang].continue} onClick={handleNext} />
                                        </div>
                                    )}
                                    {currentStep === 2 && (
                                        <div className="w-full mx-auto  flex-col-reverse xs:flex-row flex gap-3 justify-center sm:justify-end">
                                            <button className="WhiteBtn" onClick={handlePrev}>
                                                <span className="shadow1"></span>
                                                <span className="edge1"></span>
                                                <Link href="#" className="front1">
                                                    {language[lang].back}
                                                </Link>
                                            </button>
                                            <RedButton title={language[lang].continue} onClick={handleNext} />
                                        </div>
                                    )}
                                    {currentStep === 3 && (
                                        <div className="w-full mx-auto  flex-col-reverse xs:flex-row flex gap-3 justify-center sm:justify-end">
                                            <button className="WhiteBtn" onClick={handlePrev}>
                                                <span className="shadow1"></span>
                                                <span className="edge1"></span>
                                                <Link href="#" className="front1">
                                                    {language[lang].back}
                                                </Link>
                                            </button>
                                            <RedButton title={language[lang].submit_btn} onClick={(e) => handleSubmit(e)} disabled={loading} uploadProgress={uploadProgress} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div> :
                    <div>
                        <p className="text-red-500 text-[20px] text-center font-bold">{language[lang].job_app_thanks_u_title}</p>
                        <p className="text-gray-600 text-[16px] text-center my-4">{language[lang].job_app_thanks_u_content_1}</p>
                        <p className="text-gray-600 text-[16px] text-center my-4">{language[lang].job_app_thanks_u_content_2}</p>
                        <p className="text-red-600 text-[16px] text-left my-4">{language[lang].job_app_thanks_u_content_3}</p>
                        <div className=" justify-center flex">
                            <RedButton title={language[lang].home} link='/' />
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default index
