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
							<h3 className={classes.title}>Experiences professionnelles</h3>
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
												<TrendingUp />VENTES
											</h6>
										</Danger>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Vendeur confirmé au Champs-Elysées, Paris
											</a>
										</h3>
										<p className={classes.description1}>
											M&S est une chaîne de magasins britannique spécialisé dans la vente de
											nourriture, vêtements, et équipement intérieur. J'ai eu l'occasion de
											travailler dans le département de vêtements pour femmes. J'ai développé en
											outre plusieurs aptitudes notamment relationnelle et commerciale.
											<Link to="/https://corporate.marksandspencer.com/">
												<p>Visitez M&S</p>
											</Link>
										</p>
										<p className={classes.author}>
											<b>Octobre 2016 - Decembre 2017</b>, 1 ans, 1 mois
										</p>
									</GridItem>
								</GridContainer>
							</Card>

							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>STAGE</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Assistant acheteur chez Airbus Group, Munich
											</a>
										</h3>
										<p className={classes.description1}>
											J'ai eu l'opportunité d'être stagiaire dans le département Achat. Ce stage
											s'inscrivait dans le cadre de ma formation en BTS Commerce international. Ce
											fut une expérience mémorable, tant sur le plan personnel et professionnel.
											<Link to="/https://www.airbus.com/">
												<p>Visitez le site d'Airbus</p>
											</Link>
										</p>
										<p className={classes.author}>
											<p>
												<b>Août 2014 - Decembre 2014</b>, 5 mois
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
											<h6 className={classes.cardCategory}> JOBS ÉTUDIANTS </h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Vendeur polyvalent à Poundland, Londres, Ilford
											</a>
										</h3>
										<p className={classes.description1}>
											Dans le but de progresser en anglais et à la recherche d'un challenge
											attirant, j'ai séjourné neuf mois à Londres d'octobre 2012 à juillet 2013.
											Ce fut une bel expérience . J'ai pu améliorer mon anglais, et avoir une
											expérience de travail dans un environnement multiculturel. J'ai travaillé à
											Poundland, une chaine de magasin britannique, qui vend la plupart de ses
											produits au prix d'un livre sterling.
											<Link to="/http://www.poundland.co.uk//">
												<p>Visitez leur site</p>
											</Link>
										</p>
										<p className={classes.author}>
											<p>
												<b>Février 2013 - Juillet 2013</b>, 5 mois
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
												FORMATION INTENSIF À LA WILD CODE SCHOOL{' '}
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Developpeur web - React (Javascript)
											</a>
										</h3>
										<p className={classes.description1}>
											<b>Wild Code School</b> est une école spécialisée dans l'apprentissage
											intensive du code en cinq mois. Dans ce cursus, j'ai eu l'opportunité de
											collaborer avec une école d'ingénieur dans la réalisation d'un site web à
											destination de ses étudiants. Je prépare également, un diplôme de
											développeur logiciel de niveau III dans le cadre du RNCP.
											<Link to="/https://wildcodeschool.fr/nos-campus/">
												<p>Visitez la Wild Code School </p>
											</Link>
										</p>
										<p className={classes.author}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Février 2018 - Juillet 2018</b>
											</a>{' '}
											, 5 mois
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
											<h6 className={classes.cardCategory}>À DISTANCE </h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												BTS COMMERCE INTERNATIONAL, CNED
											</a>
										</h3>
										<p className={classes.description1}>
											J'ai étudié le cursus de BTS Commerce international à distance via le CNED.
											Ce choix résulte de mon investissement personnel dans ma discipline
											sportive, le basket-ball. J'ai beaucoup appris durant cette formation à
											distance du point de vue personnel. Je suis maintenant diplomé. Pour plus
											d'information sur la formation suivie, cliquez sur le lien ci-dessous.
											<Link to="/http://www.cned.fr/inscription/22962DIX/">
												<p>Visitez le CNED</p>
											</Link>
										</p>
										<p className={classes.author}>
											<p>Janvier 2011 - Juin 2015</p>
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
