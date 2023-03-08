const Notes = require("../models/notesModel");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res) => {
  console.log("InsideNoteController");
  const notes = await Notes.find({user: req.user._id});
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please all the fields.");
  } else {
    const note = new Notes({ user: req.user._id, title, content, category });
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  }
});

module.exports = { getAllNotes, createNote };
