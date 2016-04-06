import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
	Container,
	Navbar,
	Input,
	List,
	Switch,
	Button
} from '../../components'

export default class Login extends Component {
	render() {
		return <Container className="login">
			<Navbar left right="注册">登录</Navbar>
			<Input.Group style={{marginTop: 60}}>
				<Input.Row label="账号" placeholder="手机号"/>
				<Input.Row placeholder="输入密码" type="password">密码</Input.Row>
			</Input.Group>
			<Input.Group style={{ marginTop: 15 }}>
				<List>
					<List.Text chevron>
					自动登录
					<Switch active/>
					</List.Text>
				</List>
			</Input.Group>
			<Container padded>
				<Button styleName="primary" block>登录</Button>
			</Container>
		</Container>
	}
}