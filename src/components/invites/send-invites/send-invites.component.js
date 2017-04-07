import template from './send-invites.html';

import controller from './send-invites.controller';


let sendInvitesComponent = {
    restrict: 'E',
    bindings: {
        'data': '<'
    },
    template,
    controller
};

export default sendInvitesComponent;
