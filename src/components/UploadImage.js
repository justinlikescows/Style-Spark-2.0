import React, { useState } from 'react';
import './UploadImage.css';
import Header from './Header';
import Navbar from './Navbar';

function UploadImage() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="App">
      <h1>Upload and Caption Image</h1>
      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          placeholder="Enter caption"
          value={caption}
          onChange={handleCaptionChange}
        />
      </div>
      {image && (
        <div className="image-preview">
          <img src={image} alt="Uploaded" />
          <p>{caption}</p>
        </div>
      )}
      <button>Upload</button>
    </div>
      <Navbar />
    </div>
    
  );
}

export default UploadImage;
