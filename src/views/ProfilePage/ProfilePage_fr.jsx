/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// core components
import Button from '../.././components/CustomButtons/Button.jsx'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks_fr from 'components/Header/HeaderLinks_fr.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Badge from 'components/Badge/Badge.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
// import Button from 'components/CustomButtons/Button.jsx'
import SectionSkills from '../.././components/skill'
import souhail from 'assets/img/faces/souhail.jpg'
import dg6 from 'assets/img/dg6.jpg'
import bg7 from 'assets/img/bg7.jpg'
import bg12 from 'assets/img/bg12.jpg'
import Timeline from '../.././components/timeline_fr'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import SectionContacts from '../.././components/contact_fr'

class ProfilePage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes, ...rest } = this.props
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)

		return (
			<div>
				<Header
					color="transparent"
					brand="Souhail Souid"
					links={<HeaderLinks_fr dropdownHoverColor="info" />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: 'dark'
					}}
					{...rest}
				/>
				<Parallax image={require('assets/img/examples/city.jpg')} filter="dark" className={classes.parallax} />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.profile} id="Headers">
									<div>
										<img src={souhail} alt="..." className={imageClasses} />
									</div>
									<div className={classes.name}>
										<h3 className={classes.title}>Souhail Souid</h3>
										<h6>DEVELOPPEUR FRONT-END</h6>
										<a href="https://github.com/souhailsouid">
											<Tooltip
												id="tooltip-top"
												title="Watch my Github !"
												placement="top"
												classes={{ tooltip: classes.tooltip }}
											>
												<Button justIcon simple color="github" className={classes.margin5}>
													<i className={classes.socials + ' fab fa-github'} />
												</Button>
											</Tooltip>
										</a>
										<a href="https://www.linkedin.com/in/souhail-souid-81181915b/">
											<Tooltip
												id="tooltip-top"
												title="...and my Linkedin ?"
												placement="top"
												classes={{ tooltip: classes.tooltip }}
											>
												<Button justIcon simple color="linkedin" className={classes.margin5}>
													<i className={classes.socials + ' fab fa-linkedin'} />
												</Button>
											</Tooltip>
										</a>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classNames(classes.description, classes.textCenter)}>
							<h5 className={classes.description}>
								Persévérant, rigoureux et discipliné, trois qualités que je pourrai vous citer. Je suis
								un developpeur spécialisé en REACT et NodeJS. Coder me procure une energie à concrétiser, cherchez
								de solutions dans le cadre d'un projet. Je suis en
								effet, passionné à rever grand dans la réalisation d'un projet. {' '}
							</h5>
						</div>
						<div className={classes.profileTabs} id="About">
							<GridContainer>
								<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
									<h4 className={classes.title}>Projets</h4>
									<GridContainer className={classes.collections}>
										<GridItem xs={12} sm={12} md={6}>
											<Card
												background
												style={{
													backgroundImage: 'url(' + dg6 + ')'
												}}
											>
												<a href="#pablo" />
												<CardBody background className={classes.cardBody}>
													<Badge color="warning" className={classes.badge}>
														Début-septembre 2018
													</Badge>
													<a href="#pablo">
														<h2 className={classes.cardTitleWhite}>En cours</h2>
													</a>
												</CardBody>
											</Card>
										</GridItem>
										<GridItem xs={12} sm={12} md={6}>
											<Card
												background
												style={{
													backgroundImage: 'url(' + bg12 + ')'
												}}
											>
												<a href="#pablo" />
												<CardBody background className={classes.cardBody}>
													<Badge color="info" className={classes.badge}>
														Septembre 2018
													</Badge>
													<a href="#pablo">
														<h2 className={classes.cardTitleWhite}>En cours</h2>
													</a>
												</CardBody>
											</Card>
										</GridItem>
										<GridItem xs={12} sm={12} md={6}>
											<Card
												background
												style={{
													backgroundImage: 'url(' + bg7 + ')'
												}}
											>
												<a href="#pablo" />
												<CardBody background className={classes.cardBody}>
													<Badge color="danger" className={classes.badge}>
														Octobre 2018
													</Badge>
													<a href="#pablo">
														<h2 className={classes.cardTitleWhite}>En cours</h2>
													</a>
												</CardBody>
											</Card>
										</GridItem>
									</GridContainer>
								</GridItem>
								<GridItem xs={12} sm={12} md={2} className={classes.gridItem}>
									<h4 className={classes.title}>À propos</h4>
									<ul className={classes.listUnstyled}>
										<li>
											<b>28</b> ans
										</li>
										<li>
											<b>2</b> Langues
										</li>
										<li>
											<b>Permis B</b>
										</li>
										<li>
											<b>Autodidacte</b>
										</li>
										<li>
											Localisation:<b> Paris </b>
										</li>
									</ul>
									<hr />
									<h4 className={classes.title}>About this work</h4>
									<p className={classes.description}>
										Ce site-web a pour ambition de présenter ce que je suis capable de faire en
										coding. Créer ce CV web s'inscrit dans la présentation de mes projets à venir.
									</p>
									<hr />
									<h4 className={classes.title}>Centre d'intérêts</h4>
									<Badge color="info">Sport</Badge>
									<ul className={classes.listUnstyled}>
										<li>Basket-ball</li>
									</ul>
									<Badge color="warning"> Voyages</Badge>
									<ul className={classes.listUnstyled}>
										<li>Berlin, London, Madrid, Munich, Poland</li>
									</ul>
								</GridItem>
							</GridContainer>
							<br />
							<br />
							<div id="Skills">
								<h3 className={classes.title}>Mes compétences informatiques</h3>
								<SectionSkills />
							</div>
							<div>
								<Timeline id="Timeline" />
							</div>
						</div>

						<Clearfix />
					</div>
				</div>
				<div>
					<SectionContacts id="Contacts" />
				</div>
				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="https://github.com/souhailsouid/" className={classes.block}>
											{/* <Link to="/https://github.com/souhailsouid"> */}
											<i className={classes.socials + ' fab fa-github'} /> Github
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a
											href="https://www.linkedin.com/in/souhail-souid-81181915b/"
											className={classes.block}
										>
											<i className={classes.socials + ' fab fa-linkedin'} /> Linkedin
										</a>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {1900 + new Date().getYear()} , made by Souhail Souid.
							</div>
						</div>
					}
				/>
			</div>
		)
	}
}

export default withStyles(profilePageStyle)(ProfilePage)
