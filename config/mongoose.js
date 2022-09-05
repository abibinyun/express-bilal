const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abibinyun:abibinyun71@bilalclustertest.dvxchgq.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "conection error: "));
db.once("open", () => console.log("Server database terhubung"));
