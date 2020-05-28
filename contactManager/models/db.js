const mongoose=require('mongoose')
require('./contact-model')
const uri='mongodb://localhost:27017/ContactManager'
mongoose.connect(uri,{useUnifiedTopology:true,
	useFindAndModify:false,useNewUrlParser:true, useCreateIndex:true})
const connection =mongoose.connection
connection.once('open',()=>
{
    console.log("MOngoDB connection is established")
})