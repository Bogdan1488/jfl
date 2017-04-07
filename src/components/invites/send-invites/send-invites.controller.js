

class SendInvitesController {
    constructor() {

    }

    $onInit() {
        this.isSending = false;
    }

    toggleSending() {
        this.isSending = !this.isSending;
        if (this.isSending) this.doSend();
    }

    doSend() {
        alert('send')
    }



}

export default SendInvitesController;
