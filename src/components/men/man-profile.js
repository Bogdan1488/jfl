let PROFILES = {};


function getProfile(id) {
    return new Promise((resolve, reject) => {
        if (PROFILES[id]) return resolve(PROFILES[id]);

        fetch(`/user_${id}.love`, {
            credentials: 'include'
        }).then(responce => {
            if (responce.status != 200) throw `${id} profile is 404`;
            return responce.text();
        }).then(data => {
            let country = '';
            try {
                country = $(".profile-data div span:contains('Country:')", data).parent().html().split('</span>')[1].trim();
            } catch (e) {
            }
            let fullName = data.split("'name':'")[1].split("'")[0].trim();
            let fName = fullName.split(' ')[0] || 'Dear';
            fName = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
            let lName = fullName.split(' ')[1] || 'Dear';
            let city = '';
            try {
                city = $(".profile-data div span:contains('City:')", data).parent().html().split('</span>')[1].trim();
            } catch (e) {
            }

            if (city) city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
            let result = {
                id,
                country,
                fullName,
                hiname: fName,
                lname: lName,
                city
            };
            return result;
        }).then(result => {
            PROFILES[id] = result;
            resolve(result);
        }).catch(ex => {
            alert(ex)
            reject(ex);
        });
    });
}

export default getProfile;