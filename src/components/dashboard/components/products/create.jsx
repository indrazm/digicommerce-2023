"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { fileUpload } from "@/lib/aws/fileUpload";

export const CreateProduct = () => {
  const fileInput = useRef(null);
  const productImagesInput = useRef(null);

  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);

  const handleChangeFeaturedImage = (e) => {
    const { files } = e.target; // Array of files
    const file = files[0];
    setFeaturedImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      // create Blob from array buffer
      const imageBlob = new Blob([file], { type: file.type });
      // Set preview
      setFeaturedImagePreview(URL.createObjectURL(imageBlob));
    };
    reader.readAsArrayBuffer(file);
  };

  const handlePublishProduct = async () => {
    const uploadFile = await fileUpload(featuredImage, "test");
    console.log(uploadFile);
  };

  return (
    <main className="space-y-4">
      <section className="flex justify-between items-end">
        <div>
          <h3>Create Product</h3>
          <p>Fill in your product details</p>
        </div>
        <button onClick={handlePublishProduct}>Publish Product</button>
      </section>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Short Description" />
      <textarea placeholder="Long Description" rows={7} />
      <input type="number" placeholder="Price" />
      <input ref={fileInput} type="file" placeholder="Image" hidden onChange={handleChangeFeaturedImage} />
      <button onClick={() => fileInput.current.click()} className="btnOutline block">
        Choose featured image
      </button>
      {featuredImagePreview !== null ? <Image src={featuredImagePreview} width={200} height={200} className="rounded-xl" /> : null}
      <input ref={productImagesInput} type="file" placeholder="Image" hidden multiple />
      <button onClick={() => productImagesInput.current.click()} className="btnOutline">
        Choose product images
      </button>
    </main>
  );
};
