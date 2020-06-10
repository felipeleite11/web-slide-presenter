import React, { useState, useMemo } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { toast } from 'react-toastify'

import TastWithIcon from '../../components/ToastWithIcon'

import video from '../../assets/videos/1.mp4'
import lyrics from '../../lyrics'

import { Video, Slide } from './styles'

export default function Lyric({ location, history }) {
	const [loading, setLoading] = useState(true)
	const [transition, setTransition] = useState(false)
	const [audioEnable, setAudioEnable] = useState(false)
	const [lyric, setLyric] = useState({
		title: 'Aguarde...',
		artist: '',
		audio: '',
		slides: []
	})
	const [currentSlide, setCurrentSlide] = useState(-1)

	useMemo(() => {
		const params = new URLSearchParams(location.search)
		const id = params.get('id')
		const audioEnable = params.get('audio') === 'true'

		const response = lyrics.find(lyric => lyric.id === parseInt(id))

		setLyric(response)
		setLoading(false)
		setAudioEnable(audioEnable)

		if(audioEnable) {
			if(response.audio) {
				toast.info(<TastWithIcon text="Tocando a música..." />)
			}
			else {
				toast.warn(<TastWithIcon text="Esta música não tem áudio." />)
			}
		}
	}, [location.search])

	function handleChangeSlide(key) {
		const lastSlide = lyric.slides.length - 1

		switch(key) {
			case 'right': 
				if(currentSlide < lastSlide) {
					setTransition(true)
					setTimeout(() => {
						setCurrentSlide(currentSlide + 1)
					}, 600)
				}
				break
			case 'left': 
				if(currentSlide > 0) {
					setTransition(true)
					setTimeout(() => {
						setCurrentSlide(currentSlide - 1)
					}, 600)
				}
				break
			default: break
		}

		setTimeout(() => setTransition(false), 600)
	}

	function handleKeyPress(key) {
		switch(key) {
			case 'right': 
			case 'left':
				handleChangeSlide(key)
				break
			case 'space':
				handleChangeSlide('right')
				break
			case 'esc':
				history.goBack()
				break
			default: break
		}
	}

	return (
		<>
			<KeyboardEventHandler handleKeys={['right', 'left', 'esc', 'space']} onKeyEvent={key => handleKeyPress(key)} />

			<Video autoPlay muted loop className="animated fadeIn slower delay-1s">
				<source src={video} type="video/mp4" />
			</Video>

			{audioEnable && lyric.audio && (
				<iframe title={lyric.title} src={`${lyric.audio}?autoplay=1`} allow="autoplay" style={{ display: 'none' }}></iframe>
			)}

			<Slide onKeyPress={handleChangeSlide}>
				{loading ? (
					<h1 className="animated fadeIn slow" align="center">Aguarde...</h1>
				) : (
					<div style={{ display: loading ? 'none' : 'block' }}>
						{currentSlide === -1 ? (
							<div className="animated fadeIn delay-2s">
								<h1 className="animated fadeIn slow" align="center">{lyric.title}</h1>
								<h2 className="animated fadeIn slow" align="center">{lyric.artist}</h2>
							</div>
						) : (
							<>
								<p align="center" className={`prev-container animated ${transition ? 'fadeOutUp' : 'fadeInUp'} fast`}>
									{currentSlide > 0 && lyric.slides[currentSlide - 1].rows[0]}
								</p>

								<span 
									className={`animated ${transition ? 'fadeOutUp fast' : 'fadeInUp'}`} 
									align="center">
										{lyric.slides[currentSlide].rows.map((row, i) => (
											row.search('>') >= 0 ?
												<span key={i} style={{ fontSize: 20 }}>{row.replace('>', '')}</span> :
												<span key={i}>{row}</span>
										))}
								</span>
								
								<p align="center" className={`next-container animated ${transition ? 'fadeOutUp' : 'fadeInUp'} fast`}>
									{currentSlide < lyric.slides.length - 1 && lyric.slides[currentSlide + 1].rows[0]}
								</p>
							</>
						)}
					</div>
				)}
			</Slide>
		</>
	)
}