var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes');
var NoteSchema = new mongoose.Schema({
   message: String
   })
   // We are setting this Schema in our Models as 'User'
   var Fox = mongoose.model('Note', NoteSchema);