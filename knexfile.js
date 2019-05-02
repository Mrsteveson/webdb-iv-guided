module.exports = {
  // exporting an object, that has a development key.
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.db3', // the folder will be created when we run the migrations
    },

    // Will have the npx knex migrate:make XXXX create a migrations folder in data
    migrations: {
      directory: './data/migrations'
    },
    // Will have the npx knex seed:make XXXX create a seeds folder in data
    seeds: {
      directory: './data/seeds'
    }
  },

  // SQLLite does not enforce Foreign Keys by default!******************
  // Below enforces Foreign Key constraints
  pool: {
    afterCreate: (connection, done) => {
      connection.run('PRAGMA foreign_keys = ON', done)
    },
  },

};
