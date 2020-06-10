import React from 'react'

import { GiMusicalNotes } from 'react-icons/gi'

import { Container } from './styles'

export default function ToastWithIcon({ text }) {
	return (
		<Container>
			<GiMusicalNotes size={20} />
			<span>{text}</span>
		</Container>
	)
}