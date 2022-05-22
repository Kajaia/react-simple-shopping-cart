import React, { useState, useContext } from 'react';

import { Context } from '../../Context';
import { CartItem } from '../../components/CartItem';

import './Cart.scss';
import toast from '../../helpers';

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
		if (!cartItems.length) {
			toast('warning', 'No items in your cart!');
		} else {
			setButtonText('Ordering...');
			setTimeout(_ => setButtonText('Place Order'), 2000);
			emptyCart();
		}
	};

	const itemWord = cartItems.length > 1 ? 'items' : 'item';

	return (
		<main className="main-cart">
			<h1 className="main-cart__title">
				Check out: {cartItems.length} {itemWord}
			</h1>
			{cartItemElements}
			<p className="main-cart__total">Total: {totalCostDisplay}</p>
			<button className="main-cart__button" onClick={placeOrder}>
				{buttonText}
			</button>
		</main>
	);
};
