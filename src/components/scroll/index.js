import React, {Component} from 'react'
import classNames from 'classname'

export default class Scroll extends Component {
	render() {
		const {children, ...others} = this.props
		const classes = classNames({
			'mui-scroll-wrapper': true,
			[className]: className
		})
		return <div className={classes} {...others}>
			<div className="mui-scroll">
				{children}
			</div>
		</div>
	}
}