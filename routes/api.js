const express = require('express');

const router = express.Router();

const KSEA_MODEL = require('../models/tamuksea');

const KSEA_EVENT = require('../models/tamuevent')
// Routes
router.get('/', (req, res) => {

    KSEA_MODEL.find({ })
        .then((data) =>{
                console.log('data: ', data);
                res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        }); 
    
})

// Update User Information
router.post('/update', (req, res) => {

    console.log('Body: ' , req.body);

    const {email, lastname, firstname, password, major} = req.body;

    const doc2 = KSEA_MODEL.findOne({email: email}, (err, user) => {

    })    
    doc2.updateOne({email:email}, { $set: {lastname:lastname, firstname:firstname, password:password, major:major}});

    res.send({message: "Your profile has been updated successfully."})

})

router.post("/login", (req, res) => {
    
    const {email, password} = req.body
    
    console.log(req.body)
    KSEA_MODEL.findOne({email: email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({message: "Login Successful. Welcome To KSEA", user: user})
            } else{
                res.send({message: "Incorrect Password or UserName"})
            }
        }else{
            res.send({message: "Please enter Valid ID and Password."})
        }

    })
})

router.post('/event', (req, res) => {

    console.log('Body: ' , req.body);

    const data = req.body;
        
    const {title, shortDesc, desc, link} = req.body

    console.log('title: ' , title);

    KSEA_EVENT.findOne({title:title}, (err, event)=>{       
        
        if(event){            
            res.send({msg: "Event already exists"});
        }
        else{
            
            const newKSEA_event = new KSEA_EVENT(data);

            newKSEA_event.save((error) => {
                if (error){
                    res.status(500).json({msg: 'Sorry, internal server errors'})
                }
                else{
                    res.json({
                        msg: 'Event Successfully Registered.'
                    });                    
                }
            })
        }
    })
    //newKSEA_USER.findOne({})

    console.log(data);


})

router.post('/save', (req, res) => {

    console.log('Body: ' , req.body);

    const data = req.body;
        
    const {lastname, firstname, email, password, major} = req.body

    console.log('email: ' , email);

    KSEA_MODEL.findOne({email:email}, (err, user)=>{       

        if(user){            
            res.send({msg: "User already registered"});
        }
        else{
            //console.log("Not registered ");
            
            const newKSEA_USER = new KSEA_MODEL(data);

            newKSEA_USER.save((error) => {
                if (error){
                    res.status(500).json({msg: 'Sorry, internal server errors'})
                }
                else{
                    res.json({
                        msg: 'Successfully Registered, Please login now'
                    });
                    //res.send({message: "Successfuly Registered"});
                }
            })
        }
    })
    //newKSEA_USER.findOne({})

    console.log(data);


})

router.get('/name', (req, res) => {
    const data = {
        username: "peterson",
        age: 5
    };
    res.json(data);
})

// router.listen(9002, () => {
//     console.log("Be started at port 9002")
// })


module.exports = router;