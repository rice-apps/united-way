const s3Config = {
  bucketName: import.meta.env.VITE_bucketName,
  region: import.meta.env.VITE_region,
  accessKeyId: import.meta.env.VITE_accessKeyId,
  secretAccessKey: import.meta.env.VITE_secretAccessKey,
};

export default s3Config;
