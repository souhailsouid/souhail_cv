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

function Timeline({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			{/* Blogs 1 START */}
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h2 className={classes.title}>Timeline... </h2>
							<h3 className={classes.title}>Work Experience</h3>
							<Card plain blog className={classes.card}>
								<GridContainer>
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
											businesses. I have had the experience to work in the women's department
											which I developed several skills in relationship, sales and patience.
											<Link to="/https://corporate.marksandspencer.com/">
												<p>Visit their website</p>
											</Link>
										</p>
										<p className={classes.author}>
											<b>October 2016 - December 2017</b>, 1 years, 1 month
										</p>
									</GridItem>
								</GridContainer>
							</Card>

							<Card plain blog className={classes.card}>
								<GridContainer>
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
											I used to be a trainee in buyer's department. This internship operated in my
											study in International Trade. It was a wonderful experience - both from a
											human and a professional point of view.
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
								</GridContainer>
							</Card>

							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img
													src={'https://www.insidermedia.com/uploads/news/poundland3.jpg'}
													alt="..."
												/>
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${'https://www.insidermedia.com/uploads/news/poundland3.jpg'})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>STUDENT JOB </h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Sales assistant in Poundland, London, Ilford
											</a>
										</h3>
										<p className={classes.description1}>
											In the way to progress in english and am looking for a relevant challenge, I
											went to United Kingdom in October 2012 for 10 months. It was a great
											experience. I improved my english, and now, I have the experience to work in
											multicultural environment. My working place was <b>Poundland</b> , a British
											variety store chain, selling most items at the single price of £1.
											<Link to="/http://www.poundland.co.uk//">
												<p>Visit their website</p>
											</Link>
										</p>
										<p className={classes.author}>
											<p>
												<b>February 2013 - July 2013</b>, 10 months
											</p>
										</p>
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
											<b>Wild Code School</b> is a school specialized in fast learning coding for
											five intensives months. I have had the opportunity to work with a customer
											in realisating project. I have, in fact, already participated in the
											development of university's website with a group of seven developpers,
											including me. The skills studied are mentioned above. I am currently
											preparing myself for a certified level 3 WEB DEVELOPPER diploma in the RNCP
											(National Repertory of Professional Certification).
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
											myself namely in organisation, to working towards deadline, to have goals,
											and of course self-discipline... I am now gratuated. The complete courses
											informations is in this following link.
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
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}

export default withStyles(blogsStyle)(Timeline)
