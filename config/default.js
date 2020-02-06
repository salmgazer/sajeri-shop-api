module.exports = {
  host: 'localhost',
  port: process.env.PORT || '3500',
  public: '../public/',
  paginate: {
    default: 1000
  },
  postgres: {
    client: 'pg',
    pool: {
      min: 2,
      max: 10,
      softIdleTimeoutMillis: 60000,
    },
    connection: process.env.POSTGRESQLCONNSTR_DB || 'postgres://localhost/shop_api',
    migrations: {
      directory: `${__dirname}/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/seeds/test`,
    },
  },
  authentication: {
    secret: 'c2adbb6a617951511860b84658685bda8415c12affb7009e80f4e86f894c5544bb8822a3dd1f7fbd9ccd3593e999ce29893a2e0cb2297ae3cef98319b44a339bcbfd698ac3977e7b430a1e60cb3f2fe1c4e255e36cce97b08128941cd37ace55734b5b08ad2e1d656d539a7fb11c95038acf3fa3c5123918cf7d877b1efcfcb8e8e05b1001ae6824e705d08edccedad7e2e6ae269f63ba43038809a9a305d5dd925b016f2e106590743814834e08068b79eaf8285cdb38c841bba1de5899b0e73c8f93d9e81d57866bcb9bb2738daba023f8c83d2ba8126e4922af7d3ebb8b85fe894d5a52ba31bd6b643c1464fb7b96ea556d0d55b52445a14aa3a9b8b0741b',
    strategies: [
      'jwt',
      'local'
    ],
    path: '/authentication',
    service: 'users',
    jwt: {
      header: {
        type: 'access'
      },
      audience: 'https://sajeri.com',
      subject: 'anonymous',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d'
    },
    local: {
      entity: 'user',
      usernameField: 'email',
      passwordField: 'password'
    }
  }
};
