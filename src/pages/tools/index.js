import React, { Component } from 'react'

import Grid from '../../components/grid'
export default class Tools extends Component {
	render() {
		return <Grid number="9">
			<Grid.Item icon="home" to="home" sm="3" xs="4">Home</Grid.Item>
			<Grid.Item icon="email" to="todo" sm="3" xs="4">Email</Grid.Item>
			<Grid.Item icon="chat" sm="3" xs="4">Chat</Grid.Item>
			<Grid.Item icon="location" sm="3" xs="4">Location</Grid.Item>
			<Grid.Item icon="search" sm="3" xs="4">Search</Grid.Item>
			<Grid.Item icon="phone" sm="3" xs="4">Phone</Grid.Item>
			<Grid.Item icon="setting" sm="3" xs="4">Setting</Grid.Item>
			<Grid.Item icon="about" sm="3" xs="4">About</Grid.Item>
			<Grid.Item icon="more" sm="3" xs="4">More</Grid.Item>
		</Grid>
	}
}