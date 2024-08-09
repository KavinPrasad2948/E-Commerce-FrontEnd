import React from "react";
import "../../assets/style/newsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>

      <div className="input-container">
        <input required="" placeholder="Email Address" type="email" />
        <button className="invite-btn" type="button">
          Invite
        </button>
      </div>
    </div>
  );
};
