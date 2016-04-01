import React, { Component } from 'react'
import classNames from 'classname'
import Icon from '../icon'

export default class Navbar extends Component {
	render() {
		const {left, right, chevron, className, children, ...others} = this.props
		const classes = classNames({
			'mui-bar': true,
			'mui-bar-nav': true,
			[className]: className
		})
		return <div className={classes} {...others}>
			<h1 className="mui-center mui-title">{children}</h1>
			{(right=>{
				if(right) {
					return <a className="mui-icon mui-icon-bars mui-pull-right"></a>
				}
			})(right)}
			{(left => {
				if (left) {
					return <button className="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
						<Icon name="left-nav"/>
						{left.title}
					</button>
				}
			})(left) }
		</div>
	}
}