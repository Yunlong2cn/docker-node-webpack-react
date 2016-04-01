import React, { Component } from 'react'
import classNames from 'classname'

export default class Switch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: props.active
		}
	}

	render() {
		const {mini, className, children, ...others} = this.props
		const {active} = this.state
		const classes = classNames({
			'mui-switch': true,
			'mui-active': active,
			'mui-switch-mini': mini,
			[className]: className
		})
		return <div className={classes} {...others} onClick={e=>this.handleClick()}>
			<div className="mui-switch-handle"></div>
		</div>
	}

	handleClick() {
		this.setState({
			active: !this.state.active
		})
	}
}