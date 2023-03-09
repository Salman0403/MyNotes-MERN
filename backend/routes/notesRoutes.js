const express = require("express");
const { getAllNotes, createNote,getNoteById,updateNote } = require("../controllers/notesControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getAllNotes);
router.route("/").post(protect,createNote);
router.route('/:id').get(getNoteById).put(protect,updateNote)
// router.route('/:id').get(getNoteById)
// .get().put().delete()

module.exports = router;
