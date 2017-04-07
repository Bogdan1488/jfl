

class InvitesService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getInvites() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let invites = [
                    {text: 'Hi my dear',
                    mine: false,
                    id: 1},
                    {text: 'Honey it is me! Please reply',
                        mine: true,
                        id: 2},
                    {text: 'I am serious about you',
                        mine: false,
                        id: 3},
                ];
                resolve(invites);
            }, 100);

        });
    }
}

InvitesService.$inject = ['$http', '$q'];

export default InvitesService;