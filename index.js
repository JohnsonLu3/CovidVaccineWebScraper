const express = require('express')
const schedule = require('node-schedule');

const { PORT } = require('./config')
const { cvs } = require('./controller')
const { FgCyan, Reset } = require('./config/color')

const app = express()

const server = app.listen(PORT, async () => {
})

console.log('=====================================')
console.log("= Covid Vaccine Appointment Scanner =")
console.log('=====================================')

try {
  console.log("Checking CVS for avaliable appointments...")
  cvs.checkStateAppointmentsByCities()
    .then(() => {
      console.log("Checking Again in 30 minutes...\n")
    })
    .then(() => {
      console.log("Checking RiteAid for avaliable appointments...")
      console.log(FgCyan, "<functionality pending...>", Reset)
    })
    .then(() => {
      console.log("Checking Walgreens for avaliable appointments...")
      console.log(FgCyan, "<functionality pending...>", Reset)
    })

} catch (err) {
  console.log(err)
}

try {
  const cvsJob = schedule.scheduleJob('* 30 * * *', function () {
    console.log("Checking CVS for avaliable appointments...")
    cvs.checkStateAppointmentsByCities()
      .then(() => {
        console.log("Checking Again in 30 minutes...\n")
      })
  });
} catch (err) {
  console.log(err)
}

