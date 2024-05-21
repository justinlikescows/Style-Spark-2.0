import React, { useState, useEffect, useCallback } from 'react';
import './InstagramScroll.css'
import LikeIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import Header from './Header';
import Navbar from './Navbar';

const images = [
    './images/IMG_2202.jpg',
    './images/IMG_2203.jpg',
    './images/IMG_2204.jpg',
    './images/IMG_2205.jpg',
    './images/IMG_2206.jpg',
    './images/IMG_2207.jpg',
    './images/IMG_2208.jpg',
    './images/IMG_2209.jpg',
    './images/IMG_2210.jpg',
    './images/IMG_2211.jpg',
    './images/IMG_2212.jpg',
    './images/IMG_2214.jpg',
    './images/IMG_2216.jpg',
    './images/IMG_2217.jpg',
    './images/IMG_2218_2.jpg',

];

const generateMoreImages = () => {
  return images.concat(images); // Duplicates the image list for simplicity
};

function Instagram() {
  const [imageList, setImageList] = useState(images);
  const [likes, setLikes] = useState(Array(images.length).fill(false));

  const handleLikeClick = useCallback((index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);

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
        <img src={image} alt={`Image ${index + 1}`} className="image-size" />
        <IconButton onClick={() => handleLikeClick(index)} className={likes[index] ? 'liked' : ''}>
            <LikeIcon />
        </IconButton>
    </div>
))}
      </div>
      <Navbar />
    </div>
  );
}

export default Instagram;
