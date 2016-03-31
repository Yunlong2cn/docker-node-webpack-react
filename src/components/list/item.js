import React, { Component } from 'react'
import classNames from 'classname'
import Badge from '../badge'

export default class Item extends Component {
	static defaultProps = {
		navigate: true
	}
	render() {
		const {to, navigate, badge, className, children, ...others} = this.props
		const classes = classNames({
			'mui-table-view-cell': true,
			[className]: className
		})
		const aClasses = classNames({
			'mui-navigate-right': navigate
		})
		return  <li className={classes} {...others}>
			<a href={to} className={aClasses}>
				{children}
				{(
					badge => {
						if(badge) {
							return typeof badge === "string" ? <Badge>{badge}</Badge>:<Badge styleName={badge.style}>{badge.text}</Badge>
						}
					}
				)(badge)}
			</a>
		</li>
	}
}