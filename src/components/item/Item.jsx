import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/item.css";
import PropTypes from "prop-types";

export const Item = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={handleScrollToTop}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
      </div>
      <div className="item-price-old">${props.old_price}</div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  old_price: PropTypes.number.isRequired,
  new_price: PropTypes.number.isRequired,
};
