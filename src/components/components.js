import angular from 'angular';

import Hero from './hero/hero';
import Invites from './invites/invites';


let componentsModule = angular.module('app.components', [
  Hero,
  Invites
])

.name;

export default componentsModule;
