import { useState, useEffect, useRef } from 'react';

export const useHover = _ => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef(null);

	const enter = _ => setHovered(true);
	const leave = _ => setHovered(false);

	useEffect(_ => {
		ref.current.addEventListener('mouseenter', enter);
		ref.current.addEventListener('mouseleave', leave);

		return _ => {
			ref.current?.removeEventListener('mouseenter', enter);
			ref.current?.removeEventListener('mouseleave', leave);
		};
	}, []);

	return [hovered, ref];
};
