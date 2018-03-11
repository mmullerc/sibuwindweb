import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage';
import WindFarms from '../pages/WindFarms';
import Inspections from '../pages/Inspections';
import InspectionView from '../pages/InspectionView';
import InspectionEndOfWarranty from '../pages/InspectionEndOfWarranty';
import InspectionSiteArrival from '../pages/InspectionSiteArrival';
import Components from '../pages/Components';
import Settings from '../pages/Settings';
import AdvancedSearch from '../pages/AdvancedInspectionSearch';
import Users from '../pages/Users';
import CompanyUsers from '../pages/CompanyUsers';
import Login from '../pages/Login';
import Callback from '../pages/Callback';
import ErrorMsg from '../pages/ErrorMsg';
import store from '../store';
import NewInspection from '../pages/NewInspection';
import NewSiteArrival from '../components/NewSiteArrivalComponents/NewSiteArrival';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/windfarms',
      name: 'WindFarms',
      component: WindFarms,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/inspections',
      name: 'Insepctions',
      component: Inspections,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/inspection/endofwarranty',
      name: 'InspectionEndOfWarranty',
      component: InspectionEndOfWarranty,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/inspection/sitearrival',
      name: 'InspectionSiteArrival',
      component: InspectionSiteArrival,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/advancedsearch',
      name: 'AdvancedSearch',
      component: AdvancedSearch,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login',
        auth: false
      }
    },
    {
      path: '/companyusers',
      name: 'CompanyUsers',
      component: CompanyUsers,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/newinspection',
      name: 'NewInspection',
      component: NewInspection,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/inspection/newsitearrival',
      name: 'NewSiteArrival',
      component: NewSiteArrival,
      meta: {
        title: 'Error',
        auth: true
      }
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
      meta: {
        title: 'Authenticating...',
        auth: false
      }
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorMsg,
      props: true,
      meta: {
        title: 'Error',
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Use the page's router title to name the page
  if (to.meta && to.meta.title) {
    document.title = "sibuwind"
  }

  // Redirect to the login page if not authenticated
  // for pages that have 'auth: true' set
  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (store.getters.isAuthenticated) {
        next()
      } else {
        router.push({ name: 'login' })
      }
    } else {
      if (store.getters.isAuthenticated) {
        router.push({ name: 'HomePage' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
});

export default router
