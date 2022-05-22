import React, { useState, useContext } from 'react';

import { Context } from '../../Context';
import { CartItem } from '../../components/CartItem';

import './Cart.scss';

export const Cart = _ => {
	const { cartItems, emptyCart } = useContext(Context);
	const [buttonText, setButtonText] = useState('Place Order');

	const totalCost = 5.99 * cartItems.length;
	const totalCostDisplay = totalCost.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	const cartItemElements = cartItems.map(item => (
		<CartItem key={item.id} item={item} />
	));

	const placeOrder = _ => {
		cartItems.length
			? setButtonText('Ordering...')
			: setButtonText('You have no item in your cart.');
		setTimeout(_ => setButtonText('Place Order'), 2000);
		emptyCart();
	};

	return (
		<main className="main-cart">
			<h1 className="main-cart__title">Check out</h1>
			{cartItemElements}
			<p className="main-cart__total">Total: {totalCostDisplay}</p>
			<button className="main-cart__button" onClick={placeOrder}>
				{buttonText}
			</button>
		</main>
	);
};
