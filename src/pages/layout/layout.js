import React, { Component } from 'react'

import {Container} from '../../components'

export default class Layout extends Component {
	render() {
		const {children} = this.props
		return <Container>{children}</Container>
	}
}