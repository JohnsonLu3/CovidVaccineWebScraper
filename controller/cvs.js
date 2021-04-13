const Headers = require('../config/cvs')
const Cities = require('../config/cities')
const { FgRed, FgGreen, Reset } = require('../config/color')

class Cvs {

  constructor(helper) {
    this.helper = helper
    this.endpoint = 'https://www.cvs.com/immunizations/covid-19-vaccine.vaccine-status.NY.json?vaccineinfo'
  }

  async printCities(cities = Cities) {
    const details = await this.fetchCvsDetails();
    details.NY.forEach(row => {
      const { city, state, status } = row
      console.log(city)
    });
  }

  async checkStateAppointmentsByCities(cities = Cities) {
    const details = await this.fetchCvsDetails();
    details.NY.forEach(row => {
      const { city, state, status } = row
      if (cities.includes(city))
        if (status === 'Fully Booked') {
          console.log(`${city} is ${FgRed}${status}${Reset}`)
        } else {
          console.log(`${city} is ${FgGreen}${status}${Reset}`)
        }
    });
  }

  async checkStateAppointments() {
    const details = await this.fetchCvsDetails();
    details.NY.forEach(row => {
      const { city, state, status } = row
      if (status != 'Fully Booked') {
        console.log(FgGreen, `${city} is ${status}`)
      }
    });
  }

  async fetchCvsDetails() {
    try {
      const { data, status } = await this.helper.httpRequest({
        url: this.endpoint,
        headers: Headers,
      })

      if (status === 200) {
        return data.responsePayloadData.data
      }
      return "Failed to Fetch CVS Vaccine details"
    } catch (exception) {
      console.log(exception)
    }

  }
}
module.exports = Cvs
