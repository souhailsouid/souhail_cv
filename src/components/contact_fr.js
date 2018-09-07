import React from 'react'
import axios from 'axios'
// react components used to create a google map

import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
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
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import PropTypes from 'prop-types'
import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx'
import city from 'assets/img/examples/city.jpg'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

class SectionContacts extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			checked: [],
			first_name: '',
			last_name: '',
			email: '',
			message: '',
			phone: '',
			name: '',

			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleClose = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
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

	async handleSubmit(event) {
		event.preventDefault()
		console.log(this.state)

		const { first_name, last_name, email, message, phone } = this.state
		const snack = {
			variant: 'success',
			message: 'Your message has been sent ! I will contact you soon.'
		}

		const clear = document.location.reload(true)
		const showAlert = this.setState({ snack, displaySnack: true })
		try {
			const form = await axios.post('http://localhost:3030/api/form', {
				first_name,
				last_name,
				email,
				message,
				phone,
				snack,
				showAlert,
				clear
			})
			this.result = form.json()
		} catch (err) {
			alert('Something wrong with the form..')
		}
	}

	// handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	const { first_name, last_name, email, message, phone } = this.state
	// 	const snack = {
	// 		variant: 'success',
	// 		message: 'Your message has been sent ! I will contact you soon.'
	// 	}
	// 	console.log('this.state: ', first_name)
	// 	axios
	// 		.post('http://localhost:3030/api/form', this.state, snack, this.setState({ snack, displaySnack: true }))
	// 		.then((response) => {})
	// }
	render() {
		const { classes, ...rest } = this.props
		const { first_name, last_name, email, message, phone } = this.state

		return (
			<div className="cd-section" {...rest}>
				{/* Contact us 1 START */}
				<div className={`${classes.contacts} ${classes.section}`} style={{ backgroundImage: `url(${city})` }}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={5} md={5}>
								<h2 className={classes.title}>Restons en contact</h2>
								<h5 className={classes.description}>Intéresser? N'hésitez pas à me contacter!</h5>
								<InfoArea
									className={classes.infoArea}
									title="Mon adresse"
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
									title="Téléphone"
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
									title="Email "
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
									<CardHeader contact color="warning" className={classes.textCenter}>
										<h4 className={classes.cardTitle}>Contact</h4>
									</CardHeader>
									<ValidatorForm
										id="myForm"
										name="contact-form"
										ref="form"
										onSubmit={this.handleSubmit}
										onError={(errors) => console.log(errors)}
									>
										<CardBody>
											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<TextValidator
														id="multiline-static"
														label="First Name"
														name="first_name"
														className={classes.textField}
														style={{ width: 170, marginTop: 7 }}
														value={first_name}
														onChange={this.handleChange}
														margin="normal"
														required
														data-value-missing="Please enter your first name!"
														validators={[ 'required' ]}
														errorMessages={[ 'this field is required' ]}
													/>

													<GridItem xs={12} sm={6} md={6} />
												</GridItem>
												<br />
												<GridItem xs={12} sm={6} md={6}>
													<TextValidator
														id="multiline-static"
														label="Last Name"
														name="last_name"
														className={classes.textField}
														style={{ width: 170, marginTop: 7 }}
														value={last_name}
														onChange={this.handleChange}
														margin="normal"
														required
														data-value-missing="Please enter your last name!"
														validators={[ 'required' ]}
														errorMessages={[ 'this field is required' ]}
													/>
												</GridItem>
											</GridContainer>
											<br />

											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<TextValidator
														id="multiline-static"
														label="Your Email"
														name="email"
														className={classes.textField}
														style={{ width: 170, marginTop: 7 }}
														value={email}
														onChange={this.handleChange}
														required
														data-value-missing="Please enter your email(‘Required’)"
														margin="normal"
														validators={[ 'required', 'isEmail' ]}
														errorMessages={[ 'Please enter a valid email' ]}
													/>

													<GridItem xs={12} sm={6} md={6} />
												</GridItem>
												<br />
												<GridItem xs={12} sm={6} md={6}>
													<TextValidator
														id="multiline-static"
														label="Your phone number"
														name="phone"
														className={classes.textField}
														style={{ width: 170, marginTop: 7 }}
														value={phone}
														required
														data-value-missing="Please enter your phone number!"
														onChange={this.handleChange}
														margin="normal"
														validators={[ 'minNumber:10', 'required' ]}
														errorMessages={[ 'Only numbers are accepted' ]}
													/>
												</GridItem>
											</GridContainer>
											<TextValidator
												id="multiline-static"
												label="Your message"
												name="message"
												value={message}
												multiline
												rows="6"
												style={{ width: 385 }}
												required
												data-value-missing="Please enter your message!"
												className={classes.textField}
												onChange={this.handleChange}
												margin="normal"
												validators={[ 'required', 'isMessage' ]}
												errorMessages={[ 'this field is required' ]}
											/>
											<Button
												color="warning"
												className={classes.pullRight}
												onClick={this.handleSubmit}
											>
												Envoyer
											</Button>
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
											/>{' '}
										</CardFooter>
										<div>
											<Snackbar
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'right'
												}}
												open={this.state.displaySnack}
												autoHideDuration={3}
											>
												<MySnackbarContentWrapper
													{...this.state.snack}
													onClose={this.handleClose}
												/>
											</Snackbar>
										</div>
									</ValidatorForm>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}
SnackbarContent.propTypes = {
	message: PropTypes.node.isRequired,
	color: PropTypes.oneOf([ 'info', 'success', 'warning', 'danger', 'primary' ]),
	close: PropTypes.bool,
	icon: PropTypes.func
}
export default withStyles(contactsStyle)(SectionContacts)
