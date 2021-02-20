const request = require('request');

exports.get = function(url, header, body) {
    const options = {
        url: url,
        method: "GET",
        header: header,
        body: body
    };

    request(options, function(error, response, body) {
        return {"error": error, "response": response, "body": body};
    });
}