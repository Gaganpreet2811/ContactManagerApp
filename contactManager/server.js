require('./models/db')
const path=require('path')
const exphbs=require('express-handlebars')
const express=require('express')
const contactController=require('./controllers/contactController')
const bodyparser=require('body-parser')

var app=express()
app.use(bodyparser.urlencoded(
{
	extended:true
}))
app.use(bodyparser.json())

app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',
layoutDir:__dirname+'/views/layouts/'}))
app.use('/contact',contactController)
app.set('view engine','hbs')





app.listen(3000,()=>
	console.log('server is listening at port:3000'))