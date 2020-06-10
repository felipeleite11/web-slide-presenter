import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Lyric from './pages/Lyric'
import Control from './pages/Control'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/lyric" component={Lyric} />
				<Route path="/control" component={Control} />
			</Switch>
		</BrowserRouter>
	)
}