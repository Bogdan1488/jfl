import angular from 'angular';
import Bogdan from './bogdan/bogdan';


let commonModule = angular.module('app.common', [
  Bogdan
]).name;

export default commonModule;
