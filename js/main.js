$(document).ready(function () {


    // const codeLabel = $('#codeLabel'); 
    const authBtn = $('#authBtn'); // selektor ID
    const smsBtn = $('#smsBtn'); // selektor ID

    const smsData =
    {
        "from": "ECUPRO",
        "to": "48516480615",
        "message": "First myApi test",
        "fast": "0",
        "format": "json",
        "encoding": "utf-8"
    };


    function sendSMS(e) {
        e.preventDefault();

        fetch(
            "https://api.smsapi.pl/sms.do",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization:
                        "Bearer 1wyyxKVT5hl18qWgTIzyI7Zgp8kX5qYKsNwXrvHa",
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(smsData),
            }
        )
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);

                document.getElementById('email').value = ''
            });


        console.log($('#telLabel').val());
    };


    $(smsBtn).click(sendSMS);
    // $(authBtn).click(authCode);



});



