var requestUrl = 'https://www.loc.gov/?fo=json'


function getApi(request) {
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    });
}

getApi(requestUrl);