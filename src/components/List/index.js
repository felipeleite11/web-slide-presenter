import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

import { Collection, CollectionItem, EmptyCollectionLabel } from './styles'

export function List(props) {
	const { children, className } = props

	return (
		<Collection className={`collection ${className || ''}`}>
			{children ? 
				children : (
				<EmptyCollectionLabel>Nenhuma música encontrada</EmptyCollectionLabel>
			)}
		</Collection>
	)
}

export function ListItem(props) {
	const { title, artist, img, href } = props

	const [audioIcon, setAudioIcon] = useState(false)

	return (
		<CollectionItem className="collection-item">
			<Link to={`${href}${audioIcon ? '&audio=true' : ''}`}>
				<div className="image circle" style={{ backgroundImage: `url(${img})` }} />

				<div className="text">
					<span className="title">{title}</span>
					<span className="subtitle">{artist}</span>
				</div>
				
				<div className="audio-icon" onMouseOver={() => setAudioIcon(true)} onMouseLeave={() => setAudioIcon(false)}>
					{audioIcon ? (
						<FaVolumeUp color="#2c2c2c" size={20} className="animated fadeIn" />
						) : (
						<FaVolumeMute color="#2c2c2c" size={20} className="animated fadeIn" />
					)}
				</div>
			</Link>
		</CollectionItem>
	)
}