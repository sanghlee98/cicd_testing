const express = require('express');

const router = express.Router();

const KSEA_MODEL = require('../models/tamuksea');

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