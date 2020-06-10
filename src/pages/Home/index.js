import React, { useState, useEffect, useMemo } from 'react'
import { format } from 'date-fns'

import { Card, CardContent } from '../../components/Card'
import { List, ListItem } from '../../components/List'
import { SearchBar } from '../../components/SearchBar'

import lyrics from '../../lyrics'

export default function Home() {
	const [lyricList, setLyricList] = useState([])
	const [foundLyricList, setFoundLyricList] = useState([])
	const [recentList, setRecentList] = useState([])
	const [searching, setSearching] = useState(false)
	const [searchTerm, setSearchTerm] = useState(false)

	useMemo(() => {
		setLyricList(lyrics)
		
		setRecentList(lyrics)
	}, [])

	useEffect(() => {
		if(searchTerm) {
			setSearching(true)
			const foundLyrics = lyricList.filter(lyric => 
				lyric.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				lyric.artist.toLowerCase().includes(searchTerm.toLowerCase())
			)
			setFoundLyricList(foundLyrics)
			setSearching(false)
		}
		else {
			setFoundLyricList(lyricList)
			setSearching(false)
		}
	}, [lyricList, searchTerm])

	function handleSearchChange(e) {
		setSearching(true)
		setSearchTerm(e.target.value.toLowerCase())
	}

	return (
		<div className="row">

			<Card s={12} m={6} l={4} animation="slideInLeft">
				<CardContent title="Mais recentes">
					<List>
						{recentList.length && recentList.map(item => (
							<ListItem
								key={item.id} 
								title={item.title}
								artist={item.artist}
								img={item.avatar}
								href={`/lyric?id=${item.id}`}
								extra={format(new Date(item.lastAccess), `dd/MM HH:mm'h'`)}
							/>
						))}
					</List>
				</CardContent>
			</Card>


			<div className="col s12 m6 l8 " style={{ marginTop: 8 }}>
				<SearchBar 
					onChange={handleSearchChange}
					searching={searching}
				/>

				<List>
					{foundLyricList.length && foundLyricList.map(item => (
						<ListItem
							key={item.id} 
							title={item.title}
							artist={item.artist}
							img={item.avatar}
							href={`/lyric?id=${item.id}`}
						/>
					))}
				</List>
			</div>

		</div>
	)
}