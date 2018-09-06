import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
import Tooltip from '@material-ui/core/Tooltip'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui icons

import MySQL from 'assets/img/logo/MySQL.png'
import redux from 'assets/img/logo/redux.png'
import mongoDB from 'assets/img/logo/mongoDB.png'
import styles from 'assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx'
import Masonry from 'react-responsive-masonry'
import './LogoSkills.css'

const SQL = [ { src: MySQL, alt: 'MySQL', title: 'MySQL' } ]
const Redux = [ { src: redux, alt: 'redux', title: 'redux' } ]
const MongoDB = [ { src: mongoDB, alt: 'mongoDB', title: 'mongoDB' } ]
const SectionSkills = (props) => {
	const { classes } = props
	return (
		<div>
			<div className={classNames(classes.socialLine, classes.textCenter, classes.white, classes.bigIcons)}>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={2} md={2} className={classes.border}>
							<Button color="facebook" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
								<Masonry>
									{SQL.map((item, i) => (
										<div className="skills_logo" key={i}>
											<img src={item.src} title={item.title} alt={item.alt} />
										</div>
									))}
								</Masonry>
							</Button>
						</GridItem>
						<GridItem xs={12} sm={2} md={2} className={classes.border}>
							<Button color="google" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
								<Masonry>
									{Redux.map((item, i) => (
										<div className="skills_logo" key={i}>
											<img src={item.src} title={item.title} alt={item.alt} />
										</div>
									))}
								</Masonry>
							</Button>
						</GridItem>
						<GridItem xs={12} sm={2} md={2} className={classes.border}>
							<Button color="dribbble" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
								<Masonry>
									{MongoDB.map((item, i) => (
										<div className="skills_logo" key={i}>
											<img src={item.src} title={item.title} alt={item.alt} />
										</div>
									))}
								</Masonry>
							</Button>
						</GridItem>
					</GridContainer>
				</div>
			</div>

			<div className={classNames(classes.socialLine, classes.textCenter, classes.dark, classes.bigIcons)}>
				<div className={classes.container}>
					<GridContainer justify="center">
						<Tooltip id="tooltip-top" title="REACT" placement="top" classes={{ tooltip: classes.tooltip }}>
							<GridItem xs={12} sm={2} md={2} className={classes.border}>
								<Button color="white" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="fab fa-react" />
								</Button>
							</GridItem>
						</Tooltip>
						<Tooltip
							id="tooltip-top"
							title="JAVASCRIPT "
							placement="top"
							classes={{ tooltip: classes.tooltip }}
							style={{ maxWidth: 900 }}
						>
							<GridItem xs={12} sm={2} md={2} className={classes.border}>
								<Button color="white" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="fab fa-js" />
								</Button>
							</GridItem>
						</Tooltip>
						<Tooltip
							id="tooltip-top"
							title="NODE JS"
							placement="top"
							classes={{ tooltip: classes.tooltip }}
						>
							<GridItem xs={12} sm={2} md={2} className={classes.border}>
								<Button color="white" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="fab fa-node" />
								</Button>
							</GridItem>
						</Tooltip>
						<Tooltip
							id="tooltip-top"
							title="HTML5 & CSS3"
							placement="top"
							classes={{ tooltip: classes.tooltip }}
						>
							<GridItem xs={12} sm={2} md={2} className={classes.border}>
								<Button color="white" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="fab fa- fab fa-html5" />
								</Button>
							</GridItem>
						</Tooltip>
						<Tooltip
							id="tooltip-top"
							title="MATERIAL UI"
							placement="top"
							classes={{ tooltip: classes.tooltip }}
						>
							<GridItem xs={12} sm={2} md={2} className={classes.border}>
								<Button color="white" justIcon simple href="#pablo" onClick={(e) => e.preventDefault()}>
									<img
										src="https://image.noelshack.com/fichiers/2018/35/4/1535581846-webp-net-resizeimage-8.png"
										alt="materialui"
									/>
								</Button>
							</GridItem>
						</Tooltip>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}
export default withStyles(styles)(SectionSkills)
