import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '../../Context';
import { useHover } from '../../hooks/useHover';

import './CartItem.scss';

export const CartItem = ({ item }) => {
	const { removeFromCart } = useContext(Context);
	const [hovered, ref] = useHover();

	const iconsClassName = hovered
		? 'ri-delete-bin-fill'
		: 'ri-delete-bin-line';

	return (
		<div className="main-cart__item">
			<i
				className={`main-cart__icon ${iconsClassName}`}
				onClick={_ => removeFromCart(item.id)}
				ref={ref}
			></i>
			<img className="main-cart__img" src={item.url} alt="" />
			<small className="main-cart__price">$5.99</small>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}),
};
