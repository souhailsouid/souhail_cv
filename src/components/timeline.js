import React from 'react'
import { Link } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import TrendingUp from '@material-ui/icons/TrendingUp'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Info from 'components/Typography/Info.jsx'
import Danger from 'components/Typography/Danger.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'
import cardBlog4 from 'assets/img/examples/card-blog4.jpg'
import cardproject4 from 'assets/img/examples/card-project4.jpg'

function SectionBlogs({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			{/* Blogs 1 START */}
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h2 className={classes.title}>Timeline </h2>
							<br />
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img
													src={
														'https://wildcodeschool.fr/wp-content/uploads/2017/10/code.jpg'
													}
													alt="..."
												/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${'https://wildcodeschool.fr/wp-content/uploads/2017/10/code.jpg'})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>
												INTENSIVE COURSE AT THE WILD CODE SCHOOL{' '}
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Developper web - React (Javascript)
											</a>
										</h3>
										<p className={classes.description1}>
											<b>Wild Code School</b> is a school specialized in fast learning coding. The
											programmation during five intensives months. We had the opportunity to work
											with customers in realisating their projects. I have already participate in
											the development of an university's website with a team... The skills studied
											are mentioned above.
											<Link to="/https://wildcodeschool.fr/nos-campus/">
												<p>Visit the Wild Code School </p>
											</Link>
										</p>
										<p className={classes.author}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Février 2018 - Juillet 2018</b>
											</a>{' '}
											, 5 months
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<Danger>
											<h6 className={classes.cardCategory}>
												<TrendingUp />SALES
											</h6>
										</Danger>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Sales assistant in Champs-Elysées, Paris
											</a>
										</h3>
										<p className={classes.description1}>
											M&S is a retailer operating Food, Clothing & Home and other retail
											businesses. I have had the experience to work in the women department which
											I develop several skills in relationship, sales and patience.
											<Link to="/https://corporate.marksandspencer.com/">
												<p>Visit their website</p>
											</Link>
										</p>
										<p className={classes.author}>
											<b>October 2016 - December 2017</b>, 1 years, 1 month
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img
													src={
														'https://www.bmmagazine.co.uk/wp/wp-content/uploads/2017/07/shutterstock_574226317-e1499762556355.jpg'
													}
													alt="..."
												/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${'https://www.bmmagazine.co.uk/wp/wp-content/uploads/2017/07/shutterstock_574226317-e1499762556355.jpg'})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
								</GridContainer>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h3 className={classes.title}>EDUCATION </h3>

							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img src={cardproject4} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardproject4})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>

									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>E-Learning </h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												BTS COMMERCE INTERNATIONAL, CNED
											</a>
										</h3>
										<p className={classes.description1}>
											I studied my BTS Degree in E-learning because I use to train hard in
											Basket-ball in order to become a professionnal player. I learned a lot about
											myself namely in organisation, to work in deadline, to have goals, and of
											course self-discipline... The complete course information is in this
											following links. I finally had the diploma.
											<Link to="/http://www.cned.fr/inscription/22962DIX/">
												<p>Visit their website</p>
											</Link>
										</p>
										<p className={classes.author}>
											<p>January 2011 - June 2015</p>
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<br />
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img src={cardBlog4} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardBlog4})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>INTERNSHIP </h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Assistant buyer in Airbus Group, Munich
											</a>
										</h3>
										<p className={classes.description1}>
											I use to do an intership in department of buyer. This intership operated in
											my study in International Trade. It was a wonderful experience - both from a
											humane and a professional point of view.
											<Link to="/https://www.airbus.com/">
												<p>Visit their website</p>
											</Link>
										</p>
										<p className={classes.author}>
											<p>
												<b>August 2014 - December 2014</b>, 5 months
											</p>
										</p>
									</GridItem>
								</GridContainer>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}

export default withStyles(blogsStyle)(SectionBlogs)
