var faker = require('faker')

function generatePayments () {
  let payments = []

  for (let id = 1; id < 150; id++) {
    let userIds = [...Array(49).keys()];
    let cardTypes = ["Visa", "MasterCard", "American Express", "Discover"];

    payments.push({
        "id": id,
        "user_id": userIds[Math.floor(Math.random()*userIds.length)+1], 
        "payment_type": cardTypes[Math.floor(Math.random()*cardTypes.length)],
        "account_number": `---- ---- ---- ${faker.finance.mask()}`,
        "exp-date": faker.date.future()
      })
  }

  return { "payments": payments }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generatePayments