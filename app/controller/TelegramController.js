let request = require('request-promise');


let sendMessage = function (text) {
    return new Promise(async function (resolve, reject) {
        var body = {
            chat_id:801208523,
            text:text
        }
        const options = {
            method: 'POST'
            , json: true
            , uri: 'https://api.telegram.org/bot1223452068:AAFHl4ABmAnvJHhdXizlxtVqyEIEV-q9ERI/sendMessage'
            , body:body
        };
        try {
            const response = await request(options);
            return resolve(response);
        }
        catch (error) {
            return reject(error);
        }
    })
}
module.exports = {
    sendMessage: sendMessage
}