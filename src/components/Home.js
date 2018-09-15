import React, { Component } from 'react'
import './style.css'
import './assets/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Button from 'components/CustomButtons/Button.jsx'
import Tooltip from '@material-ui/core/Tooltip'
import cover from './assets/img/cover.jpeg'




class Home extends Component {
	render() {
		return (
			<div>
				<div
					className="page-header header-filter"
					style={{
						media: 'screen',
						backgroundImage: `url(${cover})`,

						height: '100vh',

						paddingTop: '08vh',
						marginTop: 0
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-xs-6 col-xs-offset-3  text-center ">
								<h1 className="title">Souhail SOUID</h1>
								<h4 className="title">
									{' '}
									<b>Developer back & front-end</b>
								</h4>
								<h5 className="title">Reacts - Material UI</h5>
								<Link to="/cv_en">
									<Button color="warning" round className={this.props.margin5}>
										<b>View my CV</b>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<footer className="footer footer-transparent" />
				<nav className="pull-left">
					<ul>
						<a>
							<b style={{ color: '#000000', marginTop: 0 }}>Souhail SOUID</b>
						</a>
					</ul>
					<ul />
				</nav>

				<div className="social-area pull-right">
					<Tooltip id="tooltip-top" title="Watch my Linkedin ?" placement="top">
						<a href="https://www.linkedin.com/in/souhail-souid-81181915b/">
							<Button color="linkedin" style={{ marginTop: 0 }} simple>
								<i className={' fab fa-linkedin'} />
							</Button>
						</a>
					</Tooltip>
					<Tooltip id="tooltip-top" title=" ... and my Github !" placement="top">
						<a href="https://www.github.com/souhailsouid">
							<Button color="github" style={{ marginRight: 55, marginTop: 0 }} simple>
								<i className={' fab fa-github'} />
							</Button>
						</a>
					</Tooltip>
				</div>

				<div />
				<footer />
			</div>
		)
	}
}

export default Home
