import React from 'react'

import { StyledCard, StyledCardContent } from './styles'

export function Card(props) {
	const { children, animation, s, m, l, offsetS, offsetM, offsetL } = props

	return (
		<StyledCard className={`
			card 
			col 
			s${s || 12}
			m${m || 12} 
			l${l || 12}
			${offsetS ? `offset-s${offsetS}` : ''}
			${offsetM ? `offset-m${offsetM}` : ''}
			${offsetL ? `offset-l${offsetL}` : ''}
			${animation && `animated ${animation}`}
		`}>
			{children}
		</StyledCard>
	)
}

export function CardContent(props) {
	const { children, title } = props
	
	return (
		<StyledCardContent className="card-content">
			<span className="card-title">{title}</span>

			{children}
		</StyledCardContent>
	)
}