import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: "sgp",
});

const S3 = new AWS.S3({
  endpoint: "https://j3n2.sg.idrivee2-32.com",
});

export const fileUpload = (file, folder) => {
  const params = {
    Bucket: "digicommercenew",
    Key: `${folder}/${file.name}`,
    Body: file,
  };
  return new Promise((resolve, reject) => {
    S3.upload(params, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
