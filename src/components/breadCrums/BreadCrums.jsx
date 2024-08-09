import React from 'react'
import '../../assets/style/breadCrums.css'
import PropTypes from 'prop-types';

export const BreadCrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrums'>
        HOME <i className="fa fa-angle-double-right " aria-hidden="true"/> SHOP <i className="fa fa-angle-double-right " aria-hidden="true"/> {product.category} <i className="fa fa-angle-double-right " aria-hidden="true"/> {product.name}

    </div>
  )
}
BreadCrums.propTypes = {
    product: PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };