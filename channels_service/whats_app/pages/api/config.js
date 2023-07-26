let config = {}

// config.port = 3000; // check docker file to set port
// config.host = '0.0.0.0';
// config.bot_api = 'http://host.docker.internal:5000/generate';

// config.bot_api = 'http://172.16.227.241:5000/generate';
config.bot_api = 'http://172.30.0.3:5000/medichatbot';

config.accountSid = 'SK17db443a12b63f548bdeb21c758b012f';
config.authToken = '9YIOodLxYjcWXrPsaOgcf3R49HaXxFVs';
config.twillonumber= 'whatsapp:+14155238886'

module.exports = config;

