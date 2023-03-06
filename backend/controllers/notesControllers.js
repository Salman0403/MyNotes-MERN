const Notes = require("../models/notesModel");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res) => {
    console.log('InsideNoteController')
    const notes = await Notes.find()
    res.json(notes)
});

module.exports = {getAllNotes}