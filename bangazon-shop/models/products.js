var faker = require('faker')

function generateProducts () {
  var products = []

  for (var id = 1; id < 201; id++) {
    let userIds = [...Array(49).keys()];

    products.push({
      "id": id,
      "seller_id": userIds[Math.floor(Math.random()*userIds.length)+1],
      "date_added": faker.date.past(),
      "image": faker.image.business(),
      "category": faker.commerce.product(),
      "product_name": faker.commerce.productName(),
      "price": faker.commerce.price(),
      "qty": faker.random.number(50)
    })
  }

  return { "products": products }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProducts