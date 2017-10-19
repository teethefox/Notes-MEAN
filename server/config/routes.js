var messages = require('../controllers/notescontroller.js');
module.exports = function(app) {
    
    


app.get('/', function(req, res) {  
messages.show(req,res)   
 })
app.get('/notes/:id', function(req, res){
    messages.showsingle(req, res)
  })
  
app.get('/new', function(req, res){
 messages.getnew(req, res)
})
// Add User Request 
app.post('/notes', function(req, res) {
 messages.add(req, res)
})
app.get('/notes/edit/:id', function(req,res){
messages.edit(req, res)
})
app.post('/notes/update/:id', function(req,res){
 messages.update(req, res)
    })

app.post('/notes/destroy/:id', function(req, res){
 messages.destroy(req, res)
})
}