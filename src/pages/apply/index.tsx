import { SidebarContext } from '@/Layouts/MainLayout';
import PageTitle from '@/components/PageTitle';
import RedButton from '@/components/RedButton';
import { language } from '@/lang/lang'
import axios from '@/lib/axios';
import { faLess, faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { FORMERR } from 'dns';
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

type previewImageType = {
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
    const [previewImage, setPreviewImage] = useState<previewImageType>({
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
        setPreviewImage({
            ...previewImage,
            jft: null,
            edu: null,
            n4: null,
            n3: null,
            n2: null,
            n1: null,
        });
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

    const resetAllUpload = () => {
        setPreviewImage({
            ...previewImage,
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
        setFromData({
            ...formData,
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
    }

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

        setPreviewImage({
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
        setUploadProgress(0);
        setCurrentStep(1);

    };

    const pageTitle = {
        title: language[lang].pkt_education_center,
        content_1: language[lang].job_app,
        content_2: ""
    };

    const handleFile = (e: any, type: string) => {
        const selectedFile = e.target.files[0];
        const fileExtension = selectedFile ? selectedFile.name.split('.').pop().toLowerCase() : null;
        const fielPreview = e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null;
        if (!fileExtension) {
            resetAllUpload();
            console.log('no file');
            return false;
        }
        const maxFileSize = 5 * 1024 * 1024; // 150 MB in bytes
        if (fileExtension && fileExtension.size > maxFileSize) {
            alert('File size exceeds the maximum allowed (5 MB). Please choose a smaller file.');
            return false;
        }

        if (type === 'cv') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, cv: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, cv: 'pdf' });
                } else {
                    setFromData({ ...formData, cv: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, cv: fielPreview });
                }
            } catch (e) {
                console.log(e);
            }
        } else if (type === 'n4') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, n4: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n4: 'pdf' });
                } else {
                    setFromData({ ...formData, n4: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n4: fielPreview });
                }
            } catch (e) {
                console.log(e);
            }
        } else if (type === 'n3') {
            try {
                if (fileExtension === 'pdf') {
                    setPreviewImage({ ...previewImage, n3: 'pdf' });
                    setFromData({ ...formData, n3: e.target.files ? e.target.files[0] : null });
                } else {
                    setFromData({ ...formData, n3: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n3: fielPreview });
                }


            } catch (e) {
                console.log(e);
            }
        } else if (type === 'jft') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, jft: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, jft: 'pdf' });
                } else {
                    setFromData({ ...formData, jft: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, jft: fielPreview });
                }
            } catch (e) {
                console.log(e);
            }
        } else if (type === 'edu') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, edu: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, edu: 'pdf' });
                } else {
                    setFromData({ ...formData, edu: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, edu: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        } else if (type === 'n2') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, n2: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n2: 'pdf' });
                } else {
                    setFromData({ ...formData, n2: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n2: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        } else if (type === 'n1') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, n1: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n1: 'pdf' });
                } else {
                    setFromData({ ...formData, n1: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, n1: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        } else if (type === 'nrc_front') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, nrc_front: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, nrc_front: 'pdf' });
                } else {
                    setFromData({ ...formData, nrc_front: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, nrc_front: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        } else if (type === 'nrc_back') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, nrc_back: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, nrc_back: 'pdf' });
                } else {
                    setFromData({ ...formData, nrc_back: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, nrc_back: fielPreview });
                }
            } catch (e) {
                console.log(e);
            }
        } else if (type === 'census_front') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, census_front: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, census_front: 'pdf' });
                } else {
                    setFromData({ ...formData, census_front: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, census_front: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        } else if (type === 'census_back') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, census_back: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, census_back: 'pdf' });
                } else {
                    setFromData({ ...formData, census_back: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, census_back: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        }
        else if (type === 'passport') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, passport: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, passport: 'pdf' });
                } else {
                    setFromData({ ...formData, passport: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, passport: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        }
        else if (type === 'photo') {
            try {
                if (fileExtension === 'pdf') {
                    setFromData({ ...formData, photo: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, photo: 'pdf' });
                } else {
                    setFromData({ ...formData, photo: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, photo: fielPreview });
                }

            } catch (e) {
                console.log(e);
            }
        }
    }

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

    const handleVedioChange = (e: any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const maxFileSize = 150 * 1024 * 1024; // 150 MB in bytes
            if (selectedFile.size > maxFileSize) {
                alert('File size exceeds the maximum allowed (150 MB). Please choose a smaller file.');
                e.target.value = '';
                setFromData({ ...formData, intro_vd: null });
                setPreviewImage({ ...previewImage, intro_vd: null });
            } else {
                if (previewImage.intro_vd) {
                    setFromData({ ...formData, intro_vd: null });
                    setPreviewImage({ ...previewImage, intro_vd: null });
                } else {
                    setFromData({ ...formData, intro_vd: e.target.files ? e.target.files[0] : null });
                    setPreviewImage({ ...previewImage, intro_vd: URL.createObjectURL(selectedFile) });
                }
            }
        }
    };

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
            axios.post(`${baseUrl}/api/video/upload/complete`, { uploadId }).then(async (response) => {
                const { media } = response.data;
                console.log(media);
                data.append("intro_vd", media);
                const res = await axios.post(`${baseUrl}/api/job-apply`, data);
                const { message, status } = res.data;
                console.log(res.data);

                if (status === 201) {
                    setReported(true);
                }
                //  resetFormData();
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
            // resetFormData();
            setLoading(false);
        }
        // Finalize the upload

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
                                            <label htmlFor="cv-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                {previewImage.cv === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.cv} alt="Preview" />
                                                }
                                                {!previewImage.cv && <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br /> CV Form <br /></span>
                                                    </p>
                                                    <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                </div>}
                                            </label>
                                            <input id="cv-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'cv')} />
                                        </div>
                                    </div>
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="edu-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].edu_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="edu-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">

                                                    {previewImage.edu === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.edu} alt="Preview" />
                                                    }
                                                    {!previewImage.edu &&
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p className="mb-2 text-xs text-center text-gray-500 "><span className="font-semibold">Click to upload<br /> Edu Certificate<br /></span> </p>
                                                            <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                        </div>}


                                                </label>
                                                <input id="edu-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'edu')} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="jft-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].JFT}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="jft-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">


                                                    {previewImage.jft === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.jft} alt="Preview" />
                                                    }
                                                    {!previewImage.jft &&
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p className="mb-2 text-xs text-center text-gray-500 "><span className="font-semibold">Click to upload<br /> JFT Certificate<br /></span> </p>
                                                            <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                        </div>}
                                                </label>
                                                <input id="jft-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'jft')} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="n4-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n4_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="n4-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">

                                                    {previewImage.n4 === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.n4} alt="Preview" />
                                                    }
                                                    {!previewImage.n4 &&
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p className="mb-2 text-xs text-center text-gray-500 "><span className="font-semibold">Click to upload<br /> N4 Certificate<br /></span> </p>
                                                            <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                        </div>}

                                                </label>
                                                <input id="n4-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'n4')} />
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label htmlFor="n3-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n3_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="n3-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                    {previewImage.n3 === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.n3} alt="Preview" />
                                                    }
                                                    {!previewImage.n3 &&
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p className="mb-2 text-xs text-center text-gray-500 "><span className="font-semibold">Click to upload<br /> N3 Certificate<br /></span> </p>
                                                            <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                        </div>}
                                                </label>
                                                <input id="n3-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'n3')} />
                                            </div>
                                        </div>
                                    }
                                    <div className='my-2'>
                                        <label htmlFor="n2-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n2_certificate}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="n2-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                {previewImage.n2 === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.n2} alt="Preview" />
                                                }
                                                {!previewImage.n2 &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-center text-xs text-gray-500 "><span className="font-semibold">Click to upload<br /> N2 Certificate<br /></span></p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}
                                            </label>
                                            <input id="n2-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'n2')} />
                                        </div>
                                    </div>
                                    {formData.visa !== 'tokutei' &&
                                        <div className='my-2'>
                                            <label htmlFor="n1-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n1_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="n1-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                    {previewImage.n1 === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.n1} alt="Preview" />
                                                    }
                                                    {!previewImage.n1 &&
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br /> N1 Certifcate<br /></span></p>
                                                            <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                        </div>}
                                                </label>
                                                <input id="n1-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'n1')} />
                                            </div>
                                        </div>
                                    }

                                    <div className='my-2'>
                                        <label htmlFor="nrc-front-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_front}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="nrc-front-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                {previewImage.nrc_front === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.nrc_front} alt="Preview" />
                                                }
                                                {!previewImage.nrc_front &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-center text-xs text-gray-500 "><span className="font-semibold">Click to upload <br />NRC Front Photo<br /></span> </p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}
                                            </label>
                                            <input id="nrc-front-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'nrc_front')} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="nrc-back-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_back}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="nrc-back-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                {previewImage.nrc_back === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.nrc_back} alt="Preview" />
                                                }
                                                {!previewImage.nrc_back &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br /> NRC Back Font<br /></span></p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}
                                            </label>
                                            <input id="nrc-back-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'nrc_back')} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="census-front-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_front}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="census-front-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                {previewImage.census_front === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.census_front} alt="Preview" />
                                                }
                                                {!previewImage.census_front &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br />Census Front<br /></span> </p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}


                                            </label>
                                            <input id="census-front-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'census_front')} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="census-back-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_back}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="census-back-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">

                                                {previewImage.census_back === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.census_back} alt="Preview" />
                                                }
                                                {!previewImage.census_back &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br /> Census Back Photo<br /></span></p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}


                                            </label>
                                            <input id="census-back-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'census_back')} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="passport-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].passport}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="passport-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden">
                                                {previewImage.passport === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.passport} alt="Preview" />
                                                }
                                                {!previewImage.passport &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-center text-xs text-gray-500 "><span className="font-semibold">Click to upload <br />Passport Photo<br /></span></p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}
                                            </label>
                                            <input id="passport-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'passport')} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="user-photo-upload" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].your_photo}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="user-photo-upload" className="overflow-hidden flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                {previewImage.photo === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.photo} alt="Preview" />
                                                }
                                                {!previewImage.photo &&
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br />User Photo<br /></span> </p>
                                                        <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
                                                    </div>}
                                            </label>
                                            <input id="user-photo-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'photo')} />
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].intro_vd}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="intro-vd-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative z">
                                                {(previewImage.intro_vd && formData.intro_vd) &&
                                                    <button onClick={() => {
                                                        setFromData({ ...formData, intro_vd: null });
                                                        setPreviewImage({ ...previewImage, intro_vd: null });
                                                    }} className='absolute z-10 -top-2 -right-2'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24" fill='red'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path>
                                                        </svg>
                                                    </button>
                                                }

                                                {(previewImage.intro_vd && formData.intro_vd) ?
                                                    <div className='w-[125px] h-[250px] overflow-hidden rounded-lg'>

                                                        <video width="250" controls>
                                                            <source src={previewImage.intro_vd} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div> :
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br />Intro Video<br /></span> </p>
                                                        <p className="text-[10px] text-center text-gray-500">MP4 (MAX SIZE. 150MB)</p>
                                                    </div>
                                                }
                                            </label>
                                            <input id="intro-vd-upload" type="file" className="hidden" onChange={handleVedioChange} max="50000" />
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

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  overflow-hidden">
                                                {previewImage.cv === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.cv} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    {formData.visa !== 'work' && <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900 ">
                                            {language[lang].edu_certificate}
                                        </label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  overflow-hidden">
                                                {previewImage.edu === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.edu} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label className="text-center mb-2 block text-md font-medium text-gray-900 ">
                                                {language[lang].JFT}
                                            </label>

                                            <div className="flex items-center justify-center w-full">
                                                <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  overflow-hidden">
                                                    {previewImage.jft === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.jft} alt="Preview" />
                                                    }
                                                </label>
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' &&
                                        <div className='my-2'>
                                            <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n4_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden">
                                                    {previewImage.n4 === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.n4} alt="Preview" />
                                                    }
                                                </label>
                                            </div>
                                        </div>
                                    }
                                    {formData.visa !== 'work' && <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n3_certificate}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden">
                                                {previewImage.n3 === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.n3} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>}
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n2_certificate}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden">
                                                {previewImage.n2 === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.n2} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    {formData.visa !== 'tokutei' &&
                                        <div className='my-2'>
                                            <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].n1_certificate}</label>

                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="n1-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 overflow-hidden ">
                                                    {previewImage.n1 === 'pdf' ?
                                                        <div className="flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                            </svg>
                                                            <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                        </div> :
                                                        <img src={previewImage.n1} alt="Preview" />
                                                    }
                                                </label>
                                            </div>
                                        </div>
                                    }

                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_front}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="nrc-front-upload" className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 overflow-hidden">
                                                {previewImage.nrc_front === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.nrc_front} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="name" className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].nrc_back}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex overflow-hidden flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                                                {previewImage.nrc_back === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.nrc_back} alt="Preview" />
                                                }
                                            </label>

                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_front}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32  overflow-hidden border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                                                {previewImage.census_front === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.census_front} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].census_back}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 overflow-hidden border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                                                {previewImage.census_back === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.census_back} alt="Preview" />
                                                }
                                            </label>
                                            <input id="census-back-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'census_back')} />
                                        </div>
                                    </div>

                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].passport}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 overflow-hidden border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                {previewImage.passport === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.passport} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].your_photo}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 overflow-hidden border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                {previewImage.photo === 'pdf' ?
                                                    <div className="flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill='green'>
                                                            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"></path>
                                                        </svg>
                                                        <p className="text-md ml-1 text-green-600 ">Uploaded</p>
                                                    </div> :
                                                    <img src={previewImage.photo} alt="Preview" />
                                                }
                                            </label>
                                        </div>
                                    </div>
                                    <div className='my-2 '>
                                        <label className="text-center mb-2 block text-md font-medium text-gray-900">{language[lang].intro_vd}</label>

                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">

                                                {previewImage.intro_vd &&
                                                    <div className='w-[125px] h-[250px] overflow-hidden rounded-lg'>
                                                        <video width="400" controls>
                                                            <source src={previewImage.intro_vd} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                }
                                            </label>
                                            <input id="intro-vd-upload" type="file" className="hidden" onChange={(e) => handleFile(e, 'intro_vd')} />
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
