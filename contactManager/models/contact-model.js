const mongoose=require('mongoose')
var contactSchema=new mongoose.Schema(
	{
		name:{
			type:String,
			required:'Name is required',
			unique:true
		},
		email:{
			type: String,
			required:'Email is required',
		},
		phone:
		{
			type:Number,
			required:'Phone Number is required',
			unique:true,
		},
		DOB:
		{
			type:Date,

		}
	})
contactSchema.path('email').validate((val)=>{
	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val)
},'Invalid e-email')
mongoose.model('Contact',contactSchema)