import React, { useState } from 'react'
import RedButton from './RedButton';
import Image from 'next/image';

interface FilePreviewProps {
    type?: string,
    file: any,
    title?:string
}
function FilePreview({ type, file, title }: FilePreviewProps) {
    let preview;
    let fileExtension;
    const [show, setShow] = useState(false);

    if (typeof file === 'string') {
        let regex = /\.pdf$/i;
        let isPdf = regex.test(file);
        preview = file;
        fileExtension = type ? type : isPdf ? 'pdf' : 'image';
    } else {
        preview = file ? URL.createObjectURL(file) : "";
        fileExtension = type ? type : file?.name.split('.').pop().toLowerCase();
    }


    return (
        <div>
            <div onClick={() => setShow(true)}>
                {
                    fileExtension === 'pdf' ? (
                        <Image src='/statics/images/pdf-page.png' alt="preview.png" width={150} height={100} />
                    ) : fileExtension === 'video' ? (

                        <video width="250">
                            <source src={preview} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    ) :
                        (
                            <Image src={preview} alt="preview.png" width={150} height={100} />
                        )
                }
            </div>

            <div className={`${show ? 'flex' : 'hidden'}  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden`}>
                <div className='bg-white w-1/2 rounded-lg p-6 shadow-xl'>
                    <p className='text-center text-xl text-red-500 font-bold'>{title} </p>
                    <hr className='my-4' />

                    <div className='flex justify-center w-full '>
                        {
                            fileExtension === 'pdf' ? (
                                <object data={preview} type="application/pdf" width="100%" height="400px">
                                    <p>It appears your browser does not support embedded PDFs. You can <a href={preview} target="_blank">download the PDF</a> instead.</p>
                                </object>
                            ) : fileExtension === 'video' ? (

                                <video width="200" controls>
                                    <source src={preview} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) :
                                (
                                    <img src={preview} alt="preview.png" />
                                )
                        }
                    </div>
                    <hr className='my-4' />
                    <div className='flex justify-center w-full '>
                        <button className='bg-red-600 p-2 px-4 text-white font-semibold rounded-md shadow-gray-600 hover:bg-red-500  flex items-center shadow-md' onClick={() => setShow(false)} >Close</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FilePreview
