


class InvitesController {
    constructor(InvitesService) {
        this.InvitesService = InvitesService;
    }



    addForm(data) {
        if (!Array.isArray(this.invitesData)) this.invitesData = [];
        this.invitesData = [...this.invitesData, data];
    }


    $onInit() {
        this.invitesData = [];

        this.InvitesService.getInvites().then(invites => {
            this.invitesData = invites;
        }).catch(err => {
            alert('Не удалось подгрузить инвайты с сервера');
        });


    }

}

InvitesController.$inject = ['InvitesService'];


export default InvitesController;
