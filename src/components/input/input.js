import React, { Component } from 'react'
import classNames from 'classname'

export default class Input extends Component {
	static defaultProps = {
		type: 'text'
	}
	render() {
		const {type, className, ...others} = this.props
		const classes = classNames({
			'mui-input-clear': true,
			'mui-input': true,
			[className]: className
		})
		return <input type={type} className={classes} {...others}/>
	}
}