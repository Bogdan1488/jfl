

class AddInvitesController {
    constructor() {

    }

    $onInit() {
        this.__reset();
    }


    submitForm() {
        let form = this.form;
        if (form.text.length < 2) return alert('Слишком короткий инвайт');
        this.addForm({payload: form});
        this.__reset();
    }


    __reset() {
        this.form = {
            text: '',
            mine: false,
            id: Math.floor(Math.random() * 9999999999)
        }
    }

}

export default AddInvitesController;
