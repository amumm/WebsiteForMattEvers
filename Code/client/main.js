import angular from 'angular'
import angularMeteor from 'angular-meteor'

import carousel from '../imports/components/carousel/carousel'
import diamond from '../imports/components/diamond/diamond'

// need to import every modal here
import DuskTilDawn from '../imports/modals/DuskTilDawn.html'
import DesignWorkshops from '../imports/modals/DesignWorkshops.html'
import No_Sub from '../imports/modals/No_Sub.html'
import Sunrise from '../imports/modals/Sunrise.html'
import Welcome from '../imports/modals/Welcome.html'
import AIGA from '../imports/modals/AIGA.html'
import Typeface from '../imports/modals/Typeface.html'
import Tarot from '../imports/modals/Tarot.html'
import Cyclone from '../imports/modals/Cyclone.html'
import Own from '../imports/modals/Own.html'

// import todosList from '../imports/components/todosList/todosList'
import bootstrap from 'angular-ui-bootstrap'

// import carousel from '../imports/components/MattSite/carousel/carousel'
import navbar from '../imports/components/navbar/navbar'

angular.module('matt-app', [
  angularMeteor,
  bootstrap,
  carousel.name,
  diamond.name,
  navbar.name,
  bootstrap
]);
