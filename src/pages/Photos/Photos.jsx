import React, { useContext } from 'react';

import { Context } from '../../Context';
import { Image } from '../../components/Image';

import './Photos.scss';

export const Photos = _ => {
	const { allPhotos } = useContext(Context);

	const imageElements = allPhotos.map(photo => (
		<Image key={photo.id} photo={photo} />
	));

	return <main className="main-photos">{imageElements}</main>;
};
