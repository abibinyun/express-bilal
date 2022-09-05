const { MongoClient } = require("mongodb");

const url = "mongodb+srv://abibinyun:abibinyun71@bilalclustertest.dvxchgq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log("koneksi ke mongodb berhasil");
  } catch (e) {
    console.log(e);
  }
})();

const db = client.db("bilal-mongodb");

module.exports = db;
