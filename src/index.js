// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import App from './App'


const NotFound = () => <h1>404 Error</h1>

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/episods/:episod" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);


render(<Router />, document.querySelector('#root'))