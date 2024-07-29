const { UserModel } = require( "../Model/UserSignupmodel");

const SignUp = async(req ,res) =>{
   
try{
    console.log(req.body);
      
    const { username, password, phoneNumber, emailaddress } = req.body;
    if(username?.length && 
        password?.length && 
        emailaddress?.length && 
        phoneNumber?.length ) {

        }

        const dbResponse = await UserModel.create({
            username,
            emailaddress,
            password,
            phoneNumber
        });
        
        if (dbResponse?._id) {
            console.log("Created");
            res.status(201).json({
                data : dbResponse,
                success: true,
                error: false,
            });
            return;
        }
    
   

}catch(err){
    res.json({
        message : err,
        success:true,
        error: true
    })
    
    
}
}

module.exports = SignUp;

