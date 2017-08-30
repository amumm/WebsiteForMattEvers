import angular from 'angular'
import angularMeteor from 'angular-meteor'
import template from './diamond.html'

import bootstrap from 'angular-ui-bootstrap'

class diamondCtrl {
  constructor ($uibModal, $scope) {
    // ctrlr=this;
    $scope.$uibModal = $uibModal;
    $scope.openModal = this.openModal;
  }
  openModal () {
    this.$uibModal.open({
      templateUrl: this.$ctrl.modalurl,
      windowClass: 'app-modal-window'
                 // imports\modals\modal1.html
    });
  }
}

export default angular.module('diamond',[bootstrap]).component('diamond', {
  templateUrl: 'imports/components/diamond/diamond.html',
  bindings: {
    imageurl: '@imageurl',
    modalurl: '@modalurl',
    projectName: '@projectName',
    width: '@width',
    height: '@height'
  },
  controller: ['$uibModal', '$scope',diamondCtrl]
}
);
