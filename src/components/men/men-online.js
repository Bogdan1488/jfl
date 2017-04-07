
class onlineMan {
    constructor() {
        this.pageCnt = 1;
        this.tempOnline = [];
        this.onlineMan = [];
        this.getNextPage();
    }

    get online() {
        return this.onlineMan.length == 0 ? this.tempOnline : this.onlineMan;
    }


    getNextPage() {
        fetch(`/chat_v3/?ajax=1&mod=users&off=${this.pageCnt}&clear=0`, {
            credentials: 'include'
        }).then(data => {
            return data.json();
        }).then(json => {
            json.online.list.forEach(item => {
                this.tempOnline.push(item.user_id);
            });

            if (json.online.pager.cnt > this.pageCnt) {
                this.pageCnt++;
                setTimeout(() => {
                    this.getNextPage();
                }, 1500);
            } else {
                this.onlineMan = this.tempOnline.slice(0);
                this.tempOnline = [];
                this.pageCnt = 1;
                setTimeout(() => {
                    this.getNextPage();
                }, 1000*45);
            }

        });
    }
}


let OnlMan = new onlineMan();
export default OnlMan;
