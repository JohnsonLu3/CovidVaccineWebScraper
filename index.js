const express = require('express')
const schedule = require('node-schedule');

const { PORT } = require('./config')
const { cvs } = require('./controller')

const app = express()

const server = app.listen(PORT, async () => {
  console.log('=====================================')
  console.log("= Covid Vaccine Appointment Scanner =")
  console.log('=====================================')
})

try {
  cvs.checkStateAppointmentsByCities()
    .then(() => {
      console.log("Checking Again in 30 minutes...")
    })
} catch (err) {
  console.log(err)
}

try {
  const cvsJob = schedule.scheduleJob('* 30 * * *', function () {
    cvs.checkStateAppointmentsByCities()
      .then(() => {
        console.log("Checking Again in 30 minutes...")
      })
  });
} catch (err) {
  console.log(err)
}

