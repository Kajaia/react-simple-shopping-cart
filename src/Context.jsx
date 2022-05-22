import { createContext, useState, useEffect } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [allPhotos, setAllPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

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

	const addToCart = newItem =>
		setCartItems(prevItems => [...prevItems, newItem]);

	const removeFromCart = id =>
		setCartItems(prevItems => prevItems.filter(item => item.id !== id));

	const emptyCart = _ => setCartItems([]);

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
