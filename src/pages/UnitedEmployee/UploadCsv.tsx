import { useState } from "react";
import ReactS3Client from "react-aws-s3-typescript";
import config from "./s3Config";
import { UploadResponse } from "react-aws-s3-typescript/dist/types";

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
    /* Import s3 config object and call the constructor */
    const s3 = new ReactS3Client(config);

    // const filename = "filename-to-be-uploaded"; /* Optional */
    if (file) {
      try {
        const data = (await s3.uploadFile(
          file,
          JSON.stringify(config),
        )) as UploadResponse;
        console.log(data);
      } catch (exception) {
        console.log(exception);
        /* handle the exception */
      }
    }
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
