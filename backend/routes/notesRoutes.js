const express = require("express");
const { getAllNotes } = require("../controllers/notesControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route('/').get(protect,getAllNotes)
// router.route('/create').post()
// router.route('/:id').get().put().delete()

module.exports = router