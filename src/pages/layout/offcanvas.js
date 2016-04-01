import React, { Component } from 'react'
import OffCanvas from '../../components/offcanvas'
import List from '../../components/list'
import Button from '../../components/button'
import Container from '../../components/container'
export default class OffCanvasLayout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: props.active,
			fixed: false,
			title: 'Focus Websocket'
		}
	}

	render() {
		const {children} = this.props
		const {active, fixed, title} = this.state
		return <OffCanvas active={active} fixed={fixed}>
			<OffCanvas.Aside>
				<Container padded>
					<Button block styleName="primary" onClick={e => this.handleClick() }>关闭</Button>
					<Button block styleName="primary" onClick={e => this.handleFixed() }>固定主界面</Button>
				</Container>
				<List inverted chevron>
					<List.Item badge={{
						style: 'primary',
						text: '23'
					}}>Home</List.Item>
					<List.Item to="todo">Todo</List.Item>
					<List.Item to="tools">Tools</List.Item>
				</List>
			</OffCanvas.Aside>
			<OffCanvas.Inner title={title} onClick={e => this.handleClick() }>{children}</OffCanvas.Inner>
		</OffCanvas>
	}

	handleTitle(title) {
		this.setState({
			title: title
		})
	}

	handleClick() {
		this.setState({
			active: !this.state.active
		})
	}

	handleFixed() {
		this.setState({
			fixed: !this.state.fixed
		})
	}
}