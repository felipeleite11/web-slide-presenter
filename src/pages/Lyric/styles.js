import styled from 'styled-components'

export const Video = styled.video`
	position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
`

export const Slide = styled.div`
	overflow: hidden;
    width: calc(100% - 4rem);
    height: 100vh;
    font-size: 6rem;
	font-family: Roboto, Helvetica, Arial, sans-serif;
    color: #313131;
    display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: center;
	
	h2 {
		font-size: 2.4rem;
	}

	span {
		font-size: 3rem;
		display: block;
	}

	p.prev-container {
		background: -webkit-linear-gradient(transparent, transparent, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6), rgba(0, 0, 0, .6));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 2.4rem;
		text-align: center;
	}

	p.next-container {
		background: -webkit-linear-gradient(rgba(0, 0, 0, .7), transparent);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 2.4rem;
		text-align: center;
	}
`