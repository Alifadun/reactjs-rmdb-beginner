import React from 'react';
import './App.css';

function Reviews() {
    // mempersiapkan data dummy JSON
    const users = [
      {
        "id": 1,
        "name": "Brego",
        "review": "Harganya murah tapi kualitas setara standar internasional",
        "photo": "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?"
      },
      {
        "id": 2,
        "name": "Wanabud",
        "review": "Harganya murah tapi kualitas setara standar internasional",
        "photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?"
      },
      {
        "id": 3,
        "name": "Kimo",
        "review": "Harganya murah tapi kualitas setara standar internasional",
        "photo": "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ];
    const listReview = users.map((ItemReview) =>
    <div key={ItemReview.id} className="Item">
    <img src={ItemReview.photo} />
    <div className="User">
      <h3>{ItemReview.name}</h3>
      <p>{ItemReview.review}</p>
    </div>
  </div>
    );
    return (
  <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

  export default Reviews;
