const express = require("express");
const router = express.Router();

const { getContacts } = require("../controllers/contactController");
const { createContacts } = require("../controllers/contactController");
const { getContact } = require("../controllers/contactController");
const { updateContact } = require("../controllers/contactController");
const { deleteContact } = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
