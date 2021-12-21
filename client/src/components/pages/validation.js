
const validation = (values) =>{
    
    let errors={};

    if(!values.lastname){
        errors.lastname="Last Name is Required."
    }
    if(!values.firstname){
        errors.firstname="First Name is Required."
    }
    if(!values.email){
        errors.email="Email is Required."
    }
    else if(!/\S+@\S+\S\.\S+/.test(values.email)){
        errors.email = "Email is invalid."
    }

    if(!values.major){
        errors.major="Major is Required."
    }

    if(!values.password){
        errors.password="Password is required."
    }else if (values.password.length < 5){
        errors.password = "Password must be more than five characters."
    }

    return errors;

};

export default validation;