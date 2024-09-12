const asycnhandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const getContacts = asycnhandler(async(req, res) => {
  const contacts = await Contact.find()
  res.status(200).json(contacts);
});





const createContacts = asycnhandler(async (req, res) => {
  console.log("req body====", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory123");
  }
  const contact = await Contact.create({
    name,
    email,
    phone
  })
  res.status(201).json(contact);
});



const getContact = asycnhandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});




const updateContact = asycnhandler(async (req, res) => {
  res.status(200).json({ messege: `Update contact for ${req.params.id}` });
});



const deleteContact = asycnhandler(async (req, res) => {
  res.status(200).json({ messege: `Delete contact for ${req.params.id}` });
});
module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
