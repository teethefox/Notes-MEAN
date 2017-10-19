var mongoose = require('mongoose');
// We are setting this Schema in our Models as 'User'
var Note = mongoose.model('Note') // We are retrieving this Schema from our Models, named 'User'
module.exports = {
 show: function(req, res){
     Note.find({}, function(err, results){       
          console.log("Notees")

     res.render('index', {Notees: results})
})
},
 showsingle: function(req, res){
 Note.find({ _id: req.params.id }, function(err, results) {
   res.render('show', { Notees: results });
 })
},

getnew:function(req, res){
     Note.find({}, function(err, results){    
   
res.render('new')
 })
},
// Add User Request 
add: function(req, res){
console.log("POST DATA", req.body);
 Note.create(req.body, function(err, results){
     if(err) { console.log(err); }

 // This is where we would add the user from req.body to the database.
 res.redirect('/');
})
},
edit: function( req, res) {
 Note.find({_id:req.params.id}, function(err, results){
if(err){console.log(err)}
res.render('edit',{ Notees:results[0]})
})
},
update: function(req, res){

Note.update({ _id: req.params.id }, req.body, function(err, result){
     if (err) { console.log(err); }
     res.redirect('/');
 })
 },

destroy: function(req, res){
     console.log('die');
 Note.remove({_id:req.params.id}, function(req, err){
     if(err){console.log(err);}
     res.redirect('/')
 })
}
}