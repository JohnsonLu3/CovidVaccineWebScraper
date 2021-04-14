module.exports = {
  "headers": {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
    'authority': 'www.walgreens.com',
    'method': 'POST',
    'path': '/hcschedulersvc/svc/v1/immunizationLocations/availability',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'referer': 'https://www.cvs.com/immunizations/covid-19-vaccine',
    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
  },
  "payload": {
    appointmentAvailability: {
      startDateTime: "2021-04-14"
    },
    startDateTime: "2021-04-14",
    position: { latitude: 0, longitude: 0 },
    latitude: 0,
    longitude: 0,
    radius: 25,
    serviceId: "99",
  }
}
