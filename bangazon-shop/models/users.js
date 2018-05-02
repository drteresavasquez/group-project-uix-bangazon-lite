var faker = require('faker')

function generateUsers () {
  let users = []

  for (let id = 1; id < 51; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.firstName();
    let phoneNumber = faker.phone.phoneNumberFormat();
    let cardTypes = ["Visa", "MasterCard", "American Express", "Discover"];

    users.push({
      "id": id,
      "image": faker.image.avatar(),
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber,
      "email": (faker.internet.email()).toLowerCase(),
      "address": faker.address.streetAddress(),
      "city": faker.address.city(),
      "zip": faker.address.zipCode(),
      "password": faker.internet.password()
    })
  }

  return { "users": users }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateUsers