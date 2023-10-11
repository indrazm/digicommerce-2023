"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fileUpload } from "@/lib/aws/fileUpload";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export const CreateProduct = ({ categories }) => {
  const [productData, setProductData] = useState({
    id: uuidv4(),
    name: "",
    shortDescription: "",
    longDescription: "",
    price: 0,
    category: "",
  });
  const router = useRouter();
  const fileInput = useRef(null);
  const productImagesInput = useRef(null);

  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [productImagesPreview, setProductImagesPreview] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({ ...prevState, [name]: value }));
  };

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

  const handleChangeProductImages = (e) => {
    const { files } = e.target;
    setProductImages(files);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBlob = new Blob([files[i]], { type: files[i].type });
        setProductImagesPreview((prevState) => [...prevState, URL.createObjectURL(imageBlob)]);
      };
      reader.readAsArrayBuffer(files[i]);
    }
  };

  const handlePublishProduct = async () => {
    // Upload featured image
    const featuredImageUpload = await fileUpload(featuredImage, productData.id);

    // Convert productImages from File List to array
    const productImagesArray = Array.from(productImages);

    // Upload product images
    const productImagesUpload = await Promise.all(productImagesArray.map((image) => fileUpload(image, productData.id)));

    // Create Product Images Name array
    const featuredImageName = featuredImage.name;
    const productImagesNameArray = productImagesArray.map((image) => image.name);

    const { id, name, shortDescription, longDescription, price, category } = productData;

    const res = await fetch("/api/v1/products", {
      method: "POST",
      body: JSON.stringify({
        id,
        name,
        shortDescription,
        longDescription,
        price,
        category,
        featuredImageName,
        productImagesNameArray,
      }),
    });
    const { data, errorMessage } = await res.json();

    if (errorMessage) {
      console.log(errorMessage);
      return;
    }

    console.log(data);
    router.push("/dashboard/products");
  };

  useEffect(() => {
    setProductData({ ...productData, category: categories[0].id });
  }, [categories]);

  return (
    <main className="space-y-4">
      <section className="flex justify-between items-end">
        <div>
          <h3>Create Product</h3>
          <p>Fill in your product details</p>
        </div>
        <button onClick={handlePublishProduct}>Publish Product</button>
      </section>
      <input name="name" type="text" placeholder="Name" onChange={handleChange} />
      <input name="shortDescription" type="text" placeholder="Short Description" onChange={handleChange} />
      <textarea name="longDescription" placeholder="Long Description" rows={7} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} />
      <input ref={fileInput} type="file" placeholder="Image" hidden onChange={handleChangeFeaturedImage} />
      <div className="space-y-2">
        <label htmlFor="category">Select category</label>
        <select name="category" onChange={handleChange}>
          {categories.map(({ id, name }) => {
            return (
              <option value={id} key={id}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <button onClick={() => fileInput.current.click()} className="btnOutline block">
        Choose featured image
      </button>
      {featuredImagePreview !== null ? <Image src={featuredImagePreview} width={200} height={200} className="rounded-xl" /> : null}
      <input ref={productImagesInput} type="file" placeholder="Image" hidden multiple onChange={handleChangeProductImages} />
      <button onClick={() => productImagesInput.current.click()} className="btnOutline">
        Choose product images
      </button>
      <div className="grid grid-cols-3 gap-4">
        {productImagesPreview.map((image, index) => (
          <div key={index} className="w-[200px] h-[200px] relative">
            <Image alt="Product Image" src={image} fill className="object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </main>
  );
};
