import angular from 'angular';

import invitesComponent from './invites.component';
import addInvitesComponent from './add-invites/add-invites.component';
import showInvitesComponent from './show-invites/show-invites.component';
import sendInvitesComponent from './send-invites/send-invites.component';

import invitesServie from './invites.service';


let invitesModule = angular.module('invites', [])
    .service('InvitesService', invitesServie)
    .component('invites', invitesComponent)
    .component('addInvites', addInvitesComponent)
    .component('showInvites', showInvitesComponent)
    .component('sendInvites', sendInvitesComponent)
    .name;

export default invitesModule;
