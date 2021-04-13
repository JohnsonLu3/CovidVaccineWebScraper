const axios = require('axios');

class Helper {

  constructor() {
  }

  async httpRequest({ url, headers, payload, method }) {
    try {
      if (url) {
        const { data, status } = await axios({
          headers, method, data: payload, url,
        });
        return { data, status }
      }
      return { data: 'url was not provided', status: 500 }
    } catch (exception) {
      return { data: exception.message || 'server error occurred', status: 500 }
    }
  }

} module.exports = Helper;
