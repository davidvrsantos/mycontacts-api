const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  index(request, response) {
    const contacts = ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // obter 1 registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
