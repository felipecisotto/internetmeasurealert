let request = require('request-promise');
const userId = process.env.USER_ID
const botId = process.env.BOT_ID

let sendMessage = function (text) {
    return new Promise(async function (resolve, reject) {
        var body = {
            chat_id:userId,
            text:text
        }
        const options = {
            method: 'POST'
            , json: true
            , uri: 'https://api.telegram.org/bot'+botId+'/sendMessage'
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