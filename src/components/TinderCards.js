import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import database from '../firebase';
import './TinderCard.css'
import {products} from './products';
import Modal from 'react-modal';

function redirectToPaymentAndAddressInfo() {
    window.location.href = '/payment';
}

function TinderCards() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [tab, setTab] = useState('description');
    const [step, setStep] = useState('ordering');
    
    function handleSwipe(direction, product) {
        if (direction === 'up') {
            setCurrentProduct(product);
            setModalIsOpen(true);
        }
    }

    return (
        <div>
            <div className='card__container'>
                {products.map(product => (
                    <TinderCard className='swipe' key={product.name} onSwipe={(dir) => handleSwipe(dir, product)} preventSwipe={['down']}>
                        <div style={{ backgroundImage: `url(${product.url})` }} className='card'>
                            <div className='card__info'>
                                <h3>{product.name}</h3>
                                <h4>{product.description}</h4>
                                
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <Modal
                className="product-modal"
                overlayClassName="overlay"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Product Details"
            >
                <div className="modal-content">
                <button onClick={() => setModalIsOpen(false)}>Close</button>
                {currentProduct && (
                    <>
                        <h2>{currentProduct.name}</h2>
                        <img className="product-image" src={currentProduct.url} alt={currentProduct.name} />                        <div className="tabs">
                            <button className="tab" onClick={() => setTab('description')}>Description</button>
                            <button className="tab" onClick={() => setTab('reviews')}>Reviews</button>
                            <button className="tab" onClick={() => setTab('ordering')}>Ordering</button>
                        </div>
                        <div className="tab-content">
                            {tab === 'description' && <p>{currentProduct.description}</p>}
                            {tab === 'reviews' && <p>Reviews go here</p>}
                            {tab === 'ordering' && (
                                <div>
                                    <h3>Sizing</h3>
                                    <p>Size info goes here</p>
                                    <button onClick={() => redirectToPaymentAndAddressInfo()}>Continue</button>
                                </div>
                            )}
                        </div>
                    </>
                )}
                </div>
            </Modal>
        </div>
    )
}

export default TinderCards;