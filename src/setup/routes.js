import Home from '../pages/Home/Home.page'
import Login from '../pages/Login/Login.page'
import NotFound from '../pages/NotFound/NotFound.page'
import Private from '../components/Private/Private'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/private',
    component: Private,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
