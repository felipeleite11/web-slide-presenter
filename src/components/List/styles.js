import styled from 'styled-components'

export const Collection = styled.ul`
	
`

export const CollectionItem = styled.li`
	padding: 0 !important;
	min-height: 62px !important;
	transition: background 200ms linear;

	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		width: 100%;
		height: 100%;
		color: #212121;
		transition: color 300ms linear;

		> .image {
			height: 58px;
			width: 54px;
			background-size: cover;
			background-position: 50% 50%;
		}

		> .text {
			display: flex;
			flex-direction: column;
			width: calc(100% - 115px);

			> .title {
				font-weight: 600;
				font-size: 19px;
			}

			> .subtitle {
				font-size: 12px;
			}
		}

		> .audio-icon {
			width: 20px;

			svg {
				color: #2c2c2c;
			}
		}
	}

	&:hover {
		background: #eee;

		a {
			color: #1565c0;
		}
	}
`

export const EmptyCollectionLabel = styled.p`
	font-style: italic;
	text-align: center;
	font-size: 12px;
`
