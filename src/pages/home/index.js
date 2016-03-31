import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from '../../components/button'
import List from '../../components/list'
import Card from '../../components/card'
import Badge from '../../components/badge'
export default class Home extends Component {
	render() {
		return <div>
			Hello , this is home page
			<hr/>
			<Button>button</Button>
			<hr/>
			<Link to="/todo">todo</Link>
			<hr/>
			<Link to="/tools">tools</Link>
			<hr/>
			<List>
				<List.Text badge="59">text1</List.Text>
				<List.Text>text2</List.Text>
			</List>
			<List>
				<List.Item>Item1</List.Item>
				<List.Item>Item2</List.Item>
			</List>
			<Card style={{marginTop: 10}}>
				<List>
					<List.Item badge="122">
					Item1
					</List.Item>
					<List.Item badge={{
						text: '233',
						style: 'primary'
					}}>Item2</List.Item>
				</List>
			</Card>
		</div>
	}
}