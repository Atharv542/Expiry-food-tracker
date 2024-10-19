import React, { useState } from 'react';
import './MyItems.css';


const MyItems = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  
  const handleAddItem = () => {
    if (itemName && expiryDate) {
      const newItem = { name: itemName, expiry: new Date(expiryDate) };
      setItems([...items, newItem]);
      setItemName('');
      setExpiryDate('');

    
      if (isAboutToExpire(newItem.expiry)) {
        alert(`The item "${newItem.name}" is about to expire soon!`);
      }
    }
  };

  
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  
  const isAboutToExpire = (expiry) => {
    const today = new Date();
    const differenceInDays = (expiry - today) / (1000 * 60 * 60 * 24);
    return differenceInDays <= 3; 
  };

  // Function to generate recipe for expiring items
  const generateRecipe = () => {
    const expiringItems = items.filter(item => isAboutToExpire(item.expiry));
    if (expiringItems.length > 0) {
      alert(`Generating recipe for: ${expiringItems.map(item => item.name).join(', ')}`);
    } else {
      alert('No items about to expire.');
    }
  };

  return (
    <div className="expiry-tracker-container">
      <h2 className="heading">Expiry Date Tracker</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="input"
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="input"
        />
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>

      <div className="item-list">
        {items.map((item, index) => (
          <div key={index} className={`item ${isAboutToExpire(item.expiry) ? 'about-to-expire' : ''}`}>
            <span>{item.name} - Expiry: {item.expiry.toLocaleDateString()}</span>
            <div className="item-actions">
              <button onClick={() => handleRemoveItem(index)} className="remove-button">Remove</button>
              {isAboutToExpire(item.expiry) && (
                <button onClick={generateRecipe} className="generate-recipe-button">Generate Recipe</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;



