import React from 'react'

interface FilePreviewProps {
    type?:string,
    file: any
}
function FilePreview({type,file}:FilePreviewProps) {
  const preview = file ?  URL.createObjectURL(file) : "";
  let fileExtension = type ? type : file?.name.split('.').pop().toLowerCase();

  return (
      <div>
          {
             fileExtension === 'pdf' ? (
                  <object data={preview} type="application/pdf" width="100%">
                      <p>It appears your browser does not support embedded PDFs. You can <a href={preview} target="_blank">download the PDF</a> instead.</p>
                  </object>
              ) :fileExtension === 'video' ? (

                  <video width="250" controls>
                      <source src={preview} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              ) :
                  (
                      <img src={preview} alt="Preview" />
                  )
          }
         
      </div>
  )
}

export default FilePreview
