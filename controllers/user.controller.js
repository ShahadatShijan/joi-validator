
exports.createUser = (req,res)=>{
    try {
        const createUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            age: req.body.age,
            languages : req.body.languages,
            dob : req.body.dob
        }
        return res.status(201).json({message: "created user",createUser});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
exports.loginUser = (req,res) => {
    try {
       
        const login = {
            email : req.body.email,
            password : req.body.password
        }
        res.status(200).json({message: "logIn successfully",login})
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}