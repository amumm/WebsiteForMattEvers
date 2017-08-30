import angular from 'angular'
import angularMeteor from 'angular-meteor'
import bootstrap from 'angular-ui-bootstrap'

import template from './navbar.html'

class NavbarCtrl {
  constructor ($scope) {

  }
}

export default angular.module('navbar',[bootstrap]).component('navbar', {
  templateUrl: 'imports/components/navbar/navbar.html',
  controller: ['$scope', NavbarCtrl]
});
