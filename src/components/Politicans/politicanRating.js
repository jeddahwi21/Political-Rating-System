import React from 'react';

const RatingForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'lightblue', color: 'white' }}>
      <div style={{ width: '300px', margin: '0 auto' }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ width: '300px', margin: '0 auto' }}>
        <label htmlFor="politician">Politician:</label>
        <select
          id="politician"
          required
          style={{ width: '100%' }}
        >
          <option value="">Select Politician</option>
          <option value="1">Imran Khan Niazi</option>
          <option value="2">Zulfiqar Ali Bhutto</option>
          <option value="3">Mian Muhammad Nawaz Shareef</option>
          <option value="3">Khadim Hussain Rizvi</option>
          <option value="3">Vladmir Putin</option>
          <option value="3">Altaf Hussain Bhai</option>

        </select>
      </div>

      <div style={{ width: '300px', margin: '0 auto' }}>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          required
          style={{ width: '100%' }}
        >
          <option value="">Select rating</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>

      <button type="submit" width="200px">Submit</button>
    </form>
  );
};

export default RatingForm;
