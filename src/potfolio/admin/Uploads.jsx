import React, { useState } from "react";
import axios from "axios";

function UploadImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImages = (e) => {
    setImages(Array.from(e.target.files));
  };

  // function باش نقسم array
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const handleUpload = async () => {
    if (images.length === 0) return alert("Select images");

    setLoading(true);

    try {
      const batches = chunkArray(images, 5); // كل batch فيه 5

      for (let i = 0; i < batches.length; i++) {
        const formData = new FormData();

        batches[i].forEach((img) => {
          formData.append("images[]", img);
        });

        formData.append("isphotography", 1);

        await axios.post(
          "http://127.0.0.1:8000/api/upload-images",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        console.log(`Batch ${i + 1} uploaded ✅`);
      }

      alert("All images uploaded successfully 🚀");
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <input type="file" multiple onChange={handleImages} />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default UploadImages;