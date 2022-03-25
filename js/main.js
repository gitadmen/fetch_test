
function sendSMS(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1wyyxKVT5hl18qWgTIzyI7Zgp8kX5qYKsNwXrvHa");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "https://api.smsapi.pl/");

    var raw = JSON.stringify({
        "from": "INFO",
        "to": "48516480615",
        "message": "!!!",
        "fast": "0",
        "format": "json",
        "encoding": "utf-8"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.smsapi.pl/sms.do", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};


document.getElementById('smsBtn').addEventListener('click', sendSMS);

