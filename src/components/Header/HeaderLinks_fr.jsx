/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Home from '@material-ui/icons/Home'
// @material-ui/icons
import Apps from '@material-ui/icons/Apps'
import Dns from '@material-ui/icons/Dns'
import Build from '@material-ui/icons/Build'
import ListIcon from '@material-ui/icons/List'
import Assignment from '@material-ui/icons/Assignment'
import Call from '@material-ui/icons/Call'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'

import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'

function HeaderLinks_fr({ ...props }) {
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2
		if (t < 1) return c / 2 * t * t + b
		t--
		return -c / 2 * (t * (t - 2) - 1) + b
	}

	const smoothScroll = (e, target) => {
		if (window.location.pathname === '/home_fr') {
			var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
			if (isMobile) {
				// if we are on mobile device the scroll into view will be managed by the browser
			} else {
				e.preventDefault()
				var targetScroll = document.getElementById(target)
				scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
			}
		}
	}
	const scrollGo = (element, to, duration) => {
		var start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 20

		var animateScroll = function() {
			currentTime += increment
			var val = easeInOutQuad(currentTime, start, change, duration)
			element.scrollTop = val
			if (currentTime < duration) {
				setTimeout(animateScroll, increment)
			}
		}
		animateScroll()
	}
	var onClickSections = {}

	const { classes, dropdownHoverColor } = props
	return (
		<List className={classes.list + ' ' + classes.mlAuto}>
			<Link to="/home_fr" className={classes.dropdownLink}>
				<Home /> Home
			</Link>

			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					hoverColor={dropdownHoverColor}
					buttonText="Sections"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link
							to="/home_fr#Headers"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'Headers')}
						>
							<Dns className={classes.dropdownIcons} /> Headers
						</Link>,

						<Link
							to="/home_fr#About"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'About')}
						>
							<ListIcon className={classes.dropdownIcons} /> À propos
						</Link>,

						<Link
							to="/home_fr#Skills"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'Skills')}
						>
							<Build className={classes.dropdownIcons} /> Compétences
						</Link>,
						<Link
							to="/home_fr#Timeline"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'Timeline')}
						>
							<Assignment className={classes.dropdownIcons} /> Timeline
						</Link>,

						<Link
							to="/home_fr#Contacts"
							className={classes.dropdownLink}
							onClick={(e) => smoothScroll(e, 'Contacts')}
						>
							<Call className={classes.dropdownIcons} /> Contact
						</Link>
					]}
				/>
			</ListItem>
		</List>
	)
}

HeaderLinks_fr.defaultProps = {
	hoverColor: 'primary'
}

HeaderLinks_fr.propTypes = {
	dropdownHoverColor: PropTypes.oneOf([ 'dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose' ])
}

export default withStyles(headerLinksStyle)(HeaderLinks_fr)
