import template from './add-invites.html';

import controller from './add-invites.controller';


let addInvitesComponent = {
    restrict: 'E',
    bindings: {
        'addForm': '&'
    },
    template,
    controller
};

export default addInvitesComponent;
