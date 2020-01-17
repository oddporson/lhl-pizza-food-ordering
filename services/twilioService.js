const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const twilioService = {
  sendMessage: function(to, message) {
    twilioClient.messages.create({
      to,
      from: '+16042279961',
      body: message
    }, function(err, message) {
      if(err) {
        console.error(err.message);
      }
    });
  }
}

module.exports = twilioService
