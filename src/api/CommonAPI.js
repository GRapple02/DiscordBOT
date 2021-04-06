const bent = require('bent');
const getJson = bent('json');

exports.get = async (url, header, body) => {
    console.log('url :>> ', url);
    console.log('header :>> ', header);
    console.log('body :>> ', body);

    try {
        let result = await getJson(url, body, header);
        
        return result;
    } catch(error) {
        console.log('error :>> ', error);
    }
}