import { createContext, useState, useEffect } from 'react';
import toast from './helpers';

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [allPhotos, setAllPhotos] = useState([]);
	let [cartItems, setCartItems] = useState([]);

	useEffect(_ => {
		const getPhotos = async _ => {
			const data = await (
				await fetch(
					'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
				)
			).json();
			setAllPhotos(data);
		};
		getPhotos();
	}, []);

	const toggleFavorite = id =>
		setAllPhotos(
			allPhotos.map(photo =>
				photo.id === id
					? { ...photo, isFavorite: !photo.isFavorite }
					: photo
			)
		);

	if (localStorage.getItem('cart'))
		cartItems = JSON.parse(localStorage.getItem('cart'));

	function storageUpdate(cart) {
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	const addToCart = newItem => {
		cartItems.push(newItem);
		setCartItems([...cartItems]);
		storageUpdate([...cartItems]);
		toast('success', 'Added to cart!');
	};

	const removeFromCart = item => {
		setCartItems(cartItems.filter(cart => cart.id !== item.id));
		storageUpdate(cartItems.filter(cart => cart.id !== item.id));
		toast('error', 'Removed from cart!');
	};

	const emptyCart = _ => {
		setCartItems([]);
		storageUpdate([]);
		if (cartItems.length) toast('success', 'Thanks for purchase!');
	};

	return (
		<Context.Provider
			value={{
				allPhotos,
				toggleFavorite,
				addToCart,
				removeFromCart,
				cartItems,
				emptyCart,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { Context, ContextProvider };
