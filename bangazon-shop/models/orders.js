var faker = require('faker')

function generateOrders () {
  var orders = []

  for (var id = 1; id < 201; id++) {
    let userIds = [...Array(49).keys()];

    orders.push({
      "id": id,
      "user_id": userIds[Math.floor(Math.random()*userIds.length)+1],
      "is_completed?": faker.random.boolean(),
      "total": faker.random.boolean(),
      "payment_id": faker.random.boolean()
    })
  }

  return { "orders": orders }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateOrders