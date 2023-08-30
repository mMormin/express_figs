const { Client } = require('pg');
const client = new Client(process.env.PG_URL);
client.connect().then(console.log("🗃️  Database connection ✅"));

module.exports = client;