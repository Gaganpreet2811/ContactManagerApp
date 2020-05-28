const express=require('express')
var router=express.Router()
const mongoose=require('mongoose')
const Contact=mongoose.model('Contact')

router.get('/',(req,res)=>
{
	res.render('contact/add',{
		viewTitle:"Add New Contact"
	})
})
router.post('/',(req,res)=>{
	if(req.body._id=='')
		insertRecord(req,res)
	else
	updateRecord(req,res)
})
function updateRecord(req,res)
{
	Contact.findOneAndUpdate({_id:req.body._id},req.body,
		{new:true},(err,doc)=>{
			if(!err)
		res.redirect('contact/list')
	else
	{
		if(err.name=='ValidationError')
		{
			handleValidationError(err,req.body)
			res.render("contact/add",{
				viewTitle:"Update Contact",
			contact: req.body})

		}
		else 
			console.log('error during insertion:'+err)
	}

		})
}
function insertRecord(req,res)
{
	var contact=new Contact()
	contact.name=req.body.name;
	contact.email=req.body.email;
	contact.phone=req.body.phone;
	contact.DOB=req.body.DOB;
	contact.save((err,doc)=>{
	if(!err)
		res.redirect('contact/list')
	else
	{
		if(err.name=='ValidationError')
		{
			handleValidationError(err,req.body)
			res.render("contact/add",{
				viewTitle:"Add New Contact",
			contact: req.body})

		}
		else
			console.log('error during insertion:'+err)
	}
})
	
}
router.get('/list',(req,res)=>
{
	Contact.find((err,docs)=>
	{
		if(!err)
		{
			res.render("contact/list",{
				list:docs
			})
		}
		else
		{
			console.log('Error in retreiving data: '+err)
		}
	}).lean().sort({"name":1})
})
function handleValidationError(err,body)
{
	for(field in err.errors)
	{
		switch(err.errors[field].path)
		{
			case 'name':
				body['nameError']=err.errors[field].message;
				break
			case 'email':
				body['emailError']=err.errors[field].message;
				break
			case 'phone':
				body['phoneError']=err.errors[field].message;
				break
			default:
			break;


		}
	}
}
router.get('/:id',(req,res)=>
{
	Contact.findById(req.params.id,(err,doc)=>
	{
		if(!err)
		{
			res.render("contact/add",{
				viewTitle:"Update Contact",
				contact:doc
			})
		}

	}).lean()
})
router.get('/delete/:id',(req,res)=>
{
	Contact.findByIdAndRemove(req.params.id,(err,doc)=>
	{
		if(!err)
		{
			res.redirect('/contact/list')
		}
		else
		{
			console.log('error in contact delete:'+err)
		}
	})
})
module.exports=router