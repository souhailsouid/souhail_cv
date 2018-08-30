import React from 'react'
// react components used to create a google map
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// @material-ui/icons
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Check from '@material-ui/icons/Check'
import Email from '@material-ui/icons/Email'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx'

import city from 'assets/img/examples/city.jpg'

const RegularMap = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap
			defaultZoom={14}
			defaultCenter={{ lat: 44.43353, lng: 26.093928 - 0.025 }}
			defaultOptions={{
				scrollwheel: false,
				zoomControl: true,
				styles: [
					{
						featureType: 'water',
						stylers: [ { saturation: 43 }, { lightness: -11 }, { hue: '#0088ff' } ]
					},
					{
						featureType: 'road',
						elementType: 'geometry.fill',
						stylers: [ { hue: '#ff0000' }, { saturation: -100 }, { lightness: 99 } ]
					},
					{
						featureType: 'road',
						elementType: 'geometry.stroke',
						stylers: [ { color: '#808080' }, { lightness: 54 } ]
					},
					{
						featureType: 'landscape.man_made',
						elementType: 'geometry.fill',
						stylers: [ { color: '#ece2d9' } ]
					},
					{
						featureType: 'poi.park',
						elementType: 'geometry.fill',
						stylers: [ { color: '#ccdca1' } ]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [ { color: '#767676' } ]
					},
					{
						featureType: 'road',
						elementType: 'labels.text.stroke',
						stylers: [ { color: '#ffffff' } ]
					},
					{ featureType: 'poi', stylers: [ { visibility: 'off' } ] },
					{
						featureType: 'landscape.natural',
						elementType: 'geometry.fill',
						stylers: [ { visibility: 'on' }, { color: '#b8cb93' } ]
					},
					{ featureType: 'poi.park', stylers: [ { visibility: 'on' } ] },
					{
						featureType: 'poi.sports_complex',
						stylers: [ { visibility: 'on' } ]
					},
					{ featureType: 'poi.medical', stylers: [ { visibility: 'on' } ] },
					{
						featureType: 'poi.business',
						stylers: [ { visibility: 'simplified' } ]
					}
				]
			}}
		>
			<Marker position={{ lat: 44.43353, lng: 26.093928 }} />
		</GoogleMap>
	))
)

class SectionContacts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: []
		}
	}
	handleToggle(value) {
		const { checked } = this.state
		const currentIndex = checked.indexOf(value)
		const newChecked = [ ...checked ]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			checked: newChecked
		})
	}
	render() {
		const { classes, ...rest } = this.props
		return (
			<div className="cd-section" {...rest}>
				{/* Contact us 1 START */}
				<div className={`${classes.contacts} ${classes.section}`} style={{ backgroundImage: `url(${city})` }}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={5} md={5}>
								<h2 className={classes.title}>Get in Touch</h2>
								<h5 className={classes.description}>
									You need more information? Don't hesitate to contact me ! I will be very happy to
									share a discussion with you.
								</h5>
								<InfoArea
									className={classes.infoArea}
									title="My adress"
									description={
										<span>
											10 allée Louis Aragon
											<br /> 93160 Noisy le Grand,
											<br /> France
										</span>
									}
									icon={PinDrop}
								/>
								<InfoArea
									className={classes.infoArea}
									title="Give me a ring"
									description={
										<span>
											Souhail SOUID
											<br /> +33 750 99 47 58
											<br />
										</span>
									}
									icon={Phone}
								/>
								<InfoArea
									className={classes.infoArea}
									title="By Email "
									description={
										<span>
											mr.souid@live.fr
											<br /> souhailsouid4@gmail.com
										</span>
									}
									icon={Email}
								/>
							</GridItem>
							<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
								<Card className={classes.card1}>
									<form>
										<CardHeader contact color="primary" className={classes.textCenter}>
											<h4 className={classes.cardTitle}>Contact me</h4>
										</CardHeader>
										<CardBody>
											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<CustomInput
														labelText="First Name"
														id="first"
														formControlProps={{
															fullWidth: true
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={6} md={6}>
													<CustomInput
														labelText="Last Name"
														id="last"
														formControlProps={{
															fullWidth: true
														}}
													/>
												</GridItem>
											</GridContainer>
											<CustomInput
												labelText="Email Address"
												id="email-address"
												formControlProps={{
													fullWidth: true
												}}
											/>
											<CustomInput
												labelText="Your Message"
												id="message"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													multiline: true,
													rows: 5
												}}
											/>
										</CardBody>
										<CardFooter className={classes.justifyContentBetween}>
											<FormControlLabel
												control={
													<Checkbox
														tabIndex={-1}
														onClick={() => this.handleToggle(1)}
														checkedIcon={<Check className={classes.checkedIcon} />}
														icon={<Check className={classes.uncheckedIcon} />}
														classes={{ checked: classes.checked }}
													/>
												}
												classes={{ label: classes.label }}
												label="I'm not a robot"
											/>
											<Button color="primary" className={classes.pullRight}>
												Send Message
											</Button>
										</CardFooter>
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(contactsStyle)(SectionContacts)
