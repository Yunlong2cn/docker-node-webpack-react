import React, { Component } from 'react'
import classNames from 'classname'

export default class Item extends Component {
	render() {
		const {to, icon, xs, sm, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,
			'mui-media': true,
			['mui-col-xs-' + xs ]: xs,
			['mui-col-sm-' + sm ]: sm,
			[className]: className
		})
		const iconClasses = classNames({
			'mui-icon': true,
			['mui-icon-' + icon]: icon
		})
		return  <li className={classes} {...others}>
			<a href={to}>
				<span className={iconClasses}></span>
				<div className="mui-media-body">{children}</div>
			</a>
		</li>
	}
}