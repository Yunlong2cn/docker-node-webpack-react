import React, { Component } from 'react'
import classNames from 'classname'

export default class Grid extends Component {
	render() {
		const {number, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view': true,
			'mui-grid-view': true,
			['mui-grid-' + number]: number,
			[className]: className
		})
		return  <ul className={classes} {...others}>{children}</ul>
	}
}