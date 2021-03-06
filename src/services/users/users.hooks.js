const auth = require('@feathersjs/authentication');
const local = require('@feathersjs/authentication-local');
const uuidv4 = require('uuid/v4');

const itemId = async context => {
  context.data.id = uuidv4();

  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      // local.hooks.hashPassword({ passwordField: 'password' })
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
