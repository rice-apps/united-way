import { useState } from "react";
// import ReactS3Client from "react-aws-s3-typescript";
// import { s3 } from "./s3Config";
// import { UploadResponse } from "react-aws-s3-typescript/dist/types";

const UploadCsv = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  // const handleUpload = async (file: File | null) => {
  //   if (file) {
  //     try {
  //       const data = (await uploadFile(file, config)) as ResponseType;
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  const handleUpload = async (file: File | null) => {
    console.log(file);
    // const params = {
    //   Bucket: import.meta.env.VITE_bucketName,
    //   Key: '/filename.xlsx', // Set the desired path and filename in S3
    //   Body: file, // The Excel file itself
    // };
    // if (file) {
    //   try {
    //     const data = (await s3.upload(params));
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // new Promise<void>((resolve, reject) => {
    //   s3.upload(params, (err, data) => {
    //     if (err) {
    //       console.error('Error uploading file to S3:', err);
    //       reject(err);
    //     } else {
    //       console.log('File uploaded to S3 successfully:', data.Location);
    //       resolve();
    //     }
    //   });
    // });
  };

  return (
    <div className="flex flex-col w-1/4 mx-auto">
      <div>Please upload your new data here</div>
      <input type="file" onChange={handleFileInput} />
      {selectedFile && (
        <button
          className="btn btn-primary  "
          onClick={() => handleUpload(selectedFile)}
        >
          {" "}
          Upload to S3
        </button>
      )}
    </div>
  );
};

export default UploadCsv;
