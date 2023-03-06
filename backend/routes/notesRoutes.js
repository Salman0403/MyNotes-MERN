const express = require("express");
const { getAllNotes } = require("../controllers/notesControllers");
const router = express.Router();

router.route('/').get(getAllNotes)
// router.route('/create').post()
// router.route('/:id').get().put().delete()

module.exports = router