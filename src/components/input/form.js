import React, { Component } from 'react'
import classNames from 'classname'

export default class Form extends Component {
	render() {
		const {className, children, ...others} = this.props
		const classes = classNames({
			[className]: className
		})
		return <form className={classes} {...others}>{children}</form>
	}
}