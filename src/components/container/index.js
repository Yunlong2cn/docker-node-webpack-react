import React, { Component } from 'react'
import classNames from 'classname'

export default class Container extends Component {
	render() {
		const {padded, className, children, ...others} = this.props
		const classes = classNames({
			'mui-content': !padded,
			'mui-content-padded': padded,
			[className]: className
		})
		return <div className={classes}>{children}</div>
	}
}