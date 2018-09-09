import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import ProfilePage_fr from 'views/ProfilePage/ProfilePage_fr.jsx'
import Home from 'components/Home'
var indexRoutes = [
	{ path: '/cv_en', name: 'ProfilePage', component: ProfilePage },

	{ path: '/cv_fr', name: 'ProfilePage_fr', component: ProfilePage_fr },
	{ path: '/', name: 'Home', component: Home }
]

export default indexRoutes
