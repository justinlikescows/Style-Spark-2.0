import React, { useState } from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ReplayIcon from '@material-ui/icons/Replay';
import { IconButton, Modal } from '@material-ui/core';
import './SwipeButtons.css'

const SwipeButtons = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const handleOpen = () => {
        // Fetch the associated product and 3 random products
        // This is just a placeholder, replace it with your actual fetch
        const fetchedProducts = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
        setProducts(fetchedProducts);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='swipe__Button'>
            <IconButton className='swipeButton__repeat'>
                <ReplayIcon fontSize='small' />
            </IconButton>
            <IconButton className='swipeButton__left' onClick={handleOpen}>
                <img
                    src="add.png"
                    alt="logo"
                    style={{ width: "20px", height: "20px" }}
                />
            </IconButton>

            <IconButton className='swipeButton__right'>
                <FavoriteIcon fontSize='small' />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <div>
                    {products.map(product => (
                        <p>{product}</p>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default SwipeButtons;