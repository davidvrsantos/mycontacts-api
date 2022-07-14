const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'David',
    email: 'davidvrsantos@gmail.com',
    phone: '123123123',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactsRepository();
