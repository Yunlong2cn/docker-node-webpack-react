import 'mui/dist/css/mui.css'

import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers , applyMiddeware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import * as reducers from './reducers'
import * as pages from './pages'

const store = createStore(combineReducers({
	...reducers,
	routing: routerReducer
}))

const history = syncHistoryWithStore(browserHistory, store)


render(<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={pages.OffCanvasLayout}>
			<IndexRoute component={pages.Home}/>
			<Route path="/home" component={pages.Home}/>
			<Route path="/todo" component={pages.Todo}/>
			<Route path="/tools" component={pages.Tools}/>
		</Route>
		<Route path="/" component={pages.Layout}>
			<Route path="/login" component={pages.Login}/>
		</Route>
	</Router>
</Provider>, document.getElementById('IAPPlication'))