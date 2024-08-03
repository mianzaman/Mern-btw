import React, { useState , useContext } from 'react';
import emailjs from 'emailjs-com';
import './Checkout.css';  // Assuming you have specific styles for this page
import { ShopContext } from "../Context/ShopContext";

const Checkout = () => {
  const { totalCartItems , getTotalAmount } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    items: '',
    total: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    console.log(formData);  // Log form data to the console

    try {
      const result = await emailjs.send(
        'service_iuad6ra',
        'template_ukfx8vb',
        formData,
        'jUPGNzvhmnhBhecnd'
      );
      setSuccess('Order placed successfully!');
      setFormData({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        items: '',
        total: ''
      });
    } catch (error) {
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h1>Checkout</h1>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" required />
        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
        <textarea name="items" value={totalCartItems()} onChange={handleChange} placeholder= {totalCartItems()} required></textarea>
        <input type="text" name="total" value={getTotalAmount()} onChange={handleChange} placeholder={getTotalAmount()} required />
        <button type="submit" disabled={loading}>
        {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};
// formData.total
export default Checkout;
