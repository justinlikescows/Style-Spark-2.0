import React, { useState, useEffect, useCallback } from 'react';
import './Generate.css'
import LikeIcon from '@material-ui/icons/Favorite';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { IconButton, Modal } from '@material-ui/core';
import Header from './Header';
import Navbar from './Navbar';

const images = [
    { src: './images/shopping.webp', type: 'shirt' },
    { src: './images/GUEST_51fa1e56-3476-4f30-83fe-09c23343ae72.jpg', type: 'shirt' },
    { src: './images/symoid-Mens-Cargo-Pants-Solid-Casual-Multiple-Pockets-Outdoor-Straight-Type-Fitness-Pants-Cargo-Pants-Trousers-Gray-XL_6ad97d86-786c-4334-8517-9bbf62c011f9.bd08859036025ca34732c58af0abef97.webp', type: 'pants' },
    { src: './images/0156d75b-0bdd-4b2b-bcb5-03145fc78422.d19e292ea7ab406e0ce5edda90308ffc.webp', type: 'pants' },
    { src: './images/7067273.webp', type: 'jacket' },
    { src: './images/Brown-Blank2_4_600x.webp', type: 'jacket' },
    { src: './images/Nike.webp', type: 'shoes' },
    { src: './images/docs.jpg', type: 'shoes' },
    { src: './images/1.jpeg', type: 'shirt' },
    { src: './images/2.jpeg', type: 'shirt' },
    { src: './images/3.jpeg', type: 'shoes' },
    { src: './images/4.jpeg', type: 'shoes' },
    { src: './images/5.jpeg', type: 'pants' },

    { src: './images/6.jpeg', type: 'pants' },






];

const generateMoreImages = () => {
  return images.concat(images); // Duplicates the image list for simplicity
};

function Generate() {
  const [imageList, setImageList] = useState(images);
  const [likes, setLikes] = useState(Array(images.length).fill(false));
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleLikeClick = useCallback((index) => {
// Select the current image and 3 random images of different types
const selected = [imageList[index]];
const selectedTypes = new Set([imageList[index].type]);
while (selected.length < 4) {
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    if (!selectedTypes.has(randomImage.type)) {
        selected.push(randomImage);
        selectedTypes.add(randomImage.type);
    }
}
setSelectedImages(selected);
setOpen(true);
}, [imageList]);

  const handleImageClick = useCallback((index) => {
    // Select the current image and 3 random images of different types
    const selected = [imageList[index]];
    const selectedTypes = new Set([imageList[index].type]);
    while (selected.length < 4) {
        const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
        if (!selectedTypes.has(randomImage.type)) {
            selected.push(randomImage);
            selectedTypes.add(randomImage.type);
        }
    }
    setSelectedImages(selected);
    setOpen(true);
}, [imageList]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setImageList((prevImageList) => [...prevImageList, ...generateMoreImages()]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="App">
        <Header />
      <div className="image-container">
      {imageList.map((image, index) => (
    <div key={index} className="image-card">
        <img src={image.src} alt={`Image ${index + 1}`} className="image-size" onClick={() => handleImageClick(index)} />
        <IconButton onClick={() => handleLikeClick(index)} className={likes[index] ? 'liked' : ''}>
            <AddCircleOutlineOutlinedIcon />
        </IconButton>
    </div>
))}
</div>
<Navbar />

<Modal
    open={open}
    onClose={handleClose}
>
    <div className="modal-container">
        <h2>Generated Outfit:</h2>
        <div className="image-grid">
            {selectedImages.map((image, index) => (
                <img key={index} src={image.src} alt={`Selected Image ${index + 1}`} className="modal-image" />
            ))}
        </div>
    </div>
</Modal>
</div>
  );
}

export default Generate;