import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Context } from '../../Context';
import { useHover } from '../../hooks/useHover';

import './Image.scss';

export const Image = ({ photo }) => {
	const { toggleFavorite, addToCart, removeFromCart, cartItems } =
		useContext(Context);
	const [hovered, ref] = useHover();

	const heartIcon = (
		<i
			className="main-photos__icon main-photos__icon--favorite ri-heart-line favorite"
			onClick={_ => toggleFavorite(photo.id)}
		></i>
	);

	const heartIconFill = (
		<i
			className="main-photos__icon main-photos__icon--favorite-fill ri-heart-fill favorite"
			onClick={_ => toggleFavorite(photo.id)}
		></i>
	);

	const addIcon = (
		<i
			className="main-photos__icon main-photos__icon--add ri-add-circle-line cart"
			onClick={_ => addToCart(photo)}
		></i>
	);

	const cartIconFill = (
		<i
			className="main-photos__icon main-photos__icon--cart ri-shopping-cart-fill cart"
			onClick={_ => removeFromCart(photo)}
		></i>
	);

	const heartIconToggler = _ =>
		photo.isFavorite ? heartIconFill : hovered && heartIcon;

	const cartIconToggler = _ => {
		const isInCart = cartItems.some(item => item.id === photo.id);
		return isInCart ? cartIconFill : hovered && addIcon;
	};

	return (
		<figure className="main-photos__figure" ref={ref}>
			<img className="main-photos__photo" src={photo.url} alt="" />
			{heartIconToggler()}
			{cartIconToggler()}
		</figure>
	);
};

Image.propTypes = {
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};
