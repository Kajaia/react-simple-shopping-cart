import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';

import './Header.scss';

export const Header = _ => {
	const { cartItems } = useContext(Context);

	const CartClassName = cartItems.length
		? 'ri-shopping-cart-fill'
		: 'ri-shopping-cart-line';

	return (
		<header className="header">
			<Link className="header__logo" to="/">
				<h1 className="header__title">Pic Some</h1>
			</Link>
			<Link className="header__cart" to="/cart" title="Cart">
				<i className={`header__icon ${CartClassName} ri-fw ri-2x`}></i>
			</Link>
		</header>
	);
};
