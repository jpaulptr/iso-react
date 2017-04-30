const React = require('react');
const PropTypes = require('prop-types');

const Item = (props) =>
    (
        <div className='item'>
            <h2 >{props.description}</h2>
            <div>{props.caption}</div>
            <div>{props.price}</div>
        </div>
    );

Item.propTypes = {
    caption: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

module.exports = Item;