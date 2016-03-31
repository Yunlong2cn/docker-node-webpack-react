import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/button'

import { increase, decrease } from '../../actions/count'

class Todo extends Component {
	render() {
		const { increase, decrease, result } = this.props

		return <div>
			<h2>the number is: {result}</h2>
			<Button onClick={e=>increase(1)}>increase</Button>
			<Button styleName="primary" onClick={e=>decrease(1)}>decrease</Button>
		</div>
	}
}

export default connect(state=>({
	result: state.count.number
}), {increase, decrease})(Todo)