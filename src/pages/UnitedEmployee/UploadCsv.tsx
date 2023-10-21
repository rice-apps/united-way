import { useState } from "react";
import { uploadFile } from "react-s3";

const S3_BUCKET = "pandastest123456";
const REGION = "us-east-1";
const ACCESS_KEY = "";
const SECRET_ACCESS_KEY = "";

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

const UploadCsv = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file: File | null) => {
    if (file) {
      try {
        const data = (await uploadFile(file, config)) as ResponseType;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col w-1/4">
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      {selectedFile && (
        <button className="btn " onClick={() => handleUpload(selectedFile)}>
          {" "}
          Upload to S3
        </button>
      )}
    </div>
  );
};

export default UploadCsv;
