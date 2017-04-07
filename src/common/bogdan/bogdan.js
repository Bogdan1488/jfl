import angular from 'angular';
import bogdanComponent from './bogdan.component';

let bogdanModule = angular.module('bogdan', [])
  .component('bogdan', bogdanComponent)
  .name;

export default bogdanModule;
