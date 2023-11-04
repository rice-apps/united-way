import { useState } from "react";
import { Amplify, Storage } from "aws-amplify";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);
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

  const handleUpload = async (file: File | null) => {
    console.log(file);
    try {
      await Storage.put("item", file, {
        contentType: "xlsx",
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
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
