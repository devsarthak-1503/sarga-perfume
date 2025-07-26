import React, { useState } from 'react';
import './products.css';
import { motion } from 'framer-motion';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';

const offers = [
  '🔥 Festive Sale: Up to 50% OFF',
  '💫 Buy 1 Get 1 Free on Selected Items',
  '🎁 Free Gift on Orders Above ₹999',
  '🚚 Free Shipping Across India'
];

const products = [
  { id: 1, name: 'Royal Oud', price: '₹999', image: img1, description: 'An elegant blend of agarwood, spices, and musk. Perfect for royalty.' },
  { id: 2, name: 'Amber Luxe', price: '₹789', image: img2, description: 'Warm amber notes with a luxurious, lasting impression.' },
  { id: 3, name: 'Velvet Rose', price: '₹491', image: img3, description: 'A floral masterpiece with rose and creamy undertones.' },
  { id: 4, name: 'Mystic Musk', price: '₹449', image: img4, description: 'Soft, sensual, and hypnotic. The essence of mystery.' },
  { id: 5, name: 'Sapphire Bloom', price: '₹299', image: img5, description: 'Sparkling floral top notes with a woody base. Ultra-feminine.' },
  { id: 6, name: 'Noir Leather', price: '₹389', image: img6, description: 'Bold leather and tobacco fusion for a powerful impression.' },
  { id: 7, name: 'Golden Spice', price: '₹625', image: img7, description: 'A rich blend of saffron, cinnamon, and exotic spices.' },
  { id: 8, name: 'Ocean Mist', price: '₹249', image: img8, description: 'Refreshing marine fragrance with aquatic freshness.' },
  { id: 9, name: 'Serene Musk', price: '₹599', image: img9, description: 'A dreamy floral scent that captures twilight’s serenity.' },
  { id: 10, name: 'Citrus Dream', price: '₹849', image: img10, description: 'Smoky incense, dry spices and warm resins — an exotic trail.' },
  { id: 11, name: 'Rain Petals', price: '₹949', image: img11, description: 'A soft, glowing fragrance with powdery musk and fresh florals.' }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showAddedMsg, setShowAddedMsg] = useState(false);

  const addToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
      setShowAddedMsg(true);
      setTimeout(() => setShowAddedMsg(false), 2000);
    } else {
      alert('This item is already in your cart!');
    }
  };

  return (
    <section className="products-section">
      <div className="offers-carousel">
        <motion.div
          className="offers-slider"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {offers.map((offer, index) => (
            <span key={index} className="offer-item">{offer}</span>
          ))}
        </motion.div>
      </div>

      <h2>Our Luxury Collection</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProduct && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <button className="close-button" onClick={() => setSelectedProduct(null)}>&times;</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="modal-details">
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <p className="modal-price">{selectedProduct.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(selectedProduct)}>
                Add to Cart
              </button>
              {showAddedMsg && (
                <motion.div
                  className="added-msg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  ✅ Added to Cart!
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Products;
