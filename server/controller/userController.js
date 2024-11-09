const User = require('../models/SafeMax')
var nodemailer = require('nodemailer');


async function createUserRequestForAppointment(req, res) {

    let {name , email, comment} = req.body;
    let appointment = Number(req.body.appointment);
    // convert the appointment to a date object
    appointment = new Date(appointment);
    console.log(req.body);
    console.log(appointment);
    try {
        
    if(!name || name.length <3) {
        return res.status(400).json({message : "Name is required and should be atleast 3 characters long",
            success : false})
    }
    if(!email ) {
        return res.status(400).json({message : "Email is required",
            success : false})
    }
    if(!appointment) {
        return res.status(400).json({message : "Appointment is required",
            success : false})
    }
     const user = await User.create({
        name,
        email,
        appointment,
        comment
     })

     return res.status(201).json({message : "appointment created successfully",
        success : true,
        data : user})
    } catch (error) {
        return res.status(500).json({message : "Appointment creation failed",
            success : false})
    }

}


async function testing(req, res) {
    return res.status(200).json({message : "testing",
        success : true})
}

async function getAllAppointments(req, res) {
    try {
        const appointments = await User.find({});
        return res.status(200).json({message : "all appointments",
            success : true,
            data : appointments})
    } catch (error) {
        return res.status(500).json({message : "Failed to fetch appointments",
            success : false})
    }
}
 



async function updateRequest(req,res) {
    
    try {
        const request = await User.findByIdAndUpdate(req.body.requestId, req.body);
        console.log(request);
        const {name,email,comment,appointment} = request;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth : {
        user : `${process.env.EMAIL}`,	
        pass : `${process.env.API_KEY}`  
      } 
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'SafeMax Appointment Request',
        text: `Hello, ${name} ! Your appointment request has been received. We will get back to you soon.
        Your appointment is scheduled on ${appointment} and The request you provided for ${comment}.`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        } 
      });
        return res.status(200).json({message : "Appointement updated successfully",
            success : true})
    }   catch (error) {
        return res.status(500).json({message : "Failed to update appointment",
            success : false})
    }
}



module.exports = {
    createUserRequestForAppointment,
    testing,
    getAllAppointments,
   
    updateRequest
}