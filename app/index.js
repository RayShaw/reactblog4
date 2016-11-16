import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MyBlog from './containers/MyBlog';
import BlogDetail from './containers/BlogDetail'
import rootReducer from './reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const initialState = {
	formDisplayed: false,
	blogs: [
		// {
		// 	"id": 1479178959961,
		// 	"title": "test1",
		// 	"content": "testtest teg testtest teg testtest teg testtest teg testtest teg  ",
		// 	"timeLong": 1479178959961
		// },
		// {
		// 	"id": 1479178959962,
		// 	"title": "test2",
		// 	"content": "testtest 11122 3343est 11122 334 est 11122 334",
		// 	"timeLong": 1479178959961
		// }
	],
	blog:{}
};

if (!!localStorage.getItem('data')) {
	initialState.blogs = JSON.parse(localStorage.getItem('data'));
}

const store = createStore(rootReducer, initialState);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' >
				<IndexRoute component={MyBlog} />
				<Route path="/detail/:blogId" component={BlogDetail} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

