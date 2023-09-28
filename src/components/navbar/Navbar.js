import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className='navbar'>
      <div className='container'>      
        <Link to="/" className='logo'>
          <img src='https://alqurannextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkaaba.adeb346b.png&w=96&q=75' alt='logo'/>
          <h2>Al Quran</h2>
        </Link>
        <div className='lang_btn'>
        <select value={selectedValue} onChange={handleChange}>
          <option value="UZ">UZ</option>
          <option value="ENG">ENG</option>
        </select>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar