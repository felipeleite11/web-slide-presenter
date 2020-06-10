import React from 'react'

import { SearchField } from './styles'

export function SearchBar(props) {
	const { onChange, searching } = props

	return (
		<nav>
			<div className="nav-wrapper">
				<form autoComplete="off">
					<SearchField className="input-field">

						<input id="search" type="search" onChange={onChange} />

						<label className="label-icon" htmlFor="search">
							<i className="material-icons grey-text text-darken-3">search</i>
						</label>
						
						{searching && (
							<i 
								className="material-icons fa fa-spinner fa-2x fa-spin right grey-text text-darken-3"
							/>
						)}
					</SearchField>
				</form>
			</div>
		</nav>
	)
}