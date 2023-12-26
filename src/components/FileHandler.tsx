import React, { useEffect, useState } from 'react'
import FilePreview from './FilePreview'
interface FileHandlerProps {
  preview: any
  file?: any // for multiple files
  setFile: React.Dispatch<React.SetStateAction<any>>
  type?: string // for video upload
  name: string // input ID, variable name to set the file
}

function FileHandler({ file, type, setFile, name,preview }: FileHandlerProps) {
  const [previewImage, setPreviewImage] = useState({
    file: preview ? preview : "",
    type: type ? type : ""
  });

  const handleFile = (e: any) => {
    let selectedFile = e.target.files[0];

    if (!selectedFile) {
      return false;
    }

    if (type !== 'video') {
      const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
      if (selectedFile && selectedFile.size > maxFileSize) {
        alert('File size exceeds the maximum allowed (5 MB). Please choose a smaller file.');
        return false;
      } e.target.files[0]
     
    } else {
      const maxFileSize = 150 * 1024 * 1024; // 150 MB in bytes
      if (selectedFile && selectedFile.size > maxFileSize) {
        alert('File size exceeds the maximum allowed (150 MB). Please choose a smaller file.');
        return false;
      }
    }

    if(file){
      setFile({ ...file, [name]: selectedFile });
    }else {
      setFile(selectedFile);
    }

    setPreviewImage({
      file: selectedFile,
      type: type ? type : ""
    });
  }
  return (
    <div>
      {!previewImage.file ?
        <label htmlFor={`${name}-upload`} className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 overflow-hidden">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-6 h-6 mb-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-xs text-gray-500 text-center"><span className="font-semibold">Click to upload<br /> CV Form <br /></span>
            </p>
            <p className="text-[10px] text-center text-gray-500">PNG, JPG or JPEG <br /> (MAX. 800x400px)</p>
          </div>
        </label>
        :
        <div className='w-32 h-32 overflow-hidden relative'>
          <FilePreview type={previewImage.type} file={previewImage.file} />
          <label htmlFor={`${name}-upload`} className='absolute top-0 right-0 hover:cursor-pointer'
            onClick={() => setPreviewImage({ file: "", type: "" })}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24" fill='red' >
              <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path>
            </svg>
          </label>
        </div>}
      <input id={`${name}-upload`} type="file" className="hidden" onChange={(e) => handleFile(e)} />
    </div>
  )
}

export default FileHandler
