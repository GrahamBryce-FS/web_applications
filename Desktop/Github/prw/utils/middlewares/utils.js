const email = (req,res,next)=>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regex.test(req.body.email)) {
        return next()
    }
    res.status(422).json({ msg: "A valid email was not provided." })
}

const phone = (req,res,next)=>{
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g
    if(regex.test(req.body.phone)) {
        return next()
    }
    res.status(422).json({ msg: "A valid phone was not provided." })
}

const birthday = (req,res,next)=>{
    const regex = /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/g
    if(regex.test(req.body.birthday)) {
        return next()
    }
    res.status(422).json({ msg: "A valid birthday was not provided." })
}

const password = (req,res,next)=>{
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
    if(regex.test(req.body.password)) {
        return next()
    }
    res.status(422).json({ msg: "A valid password was not provided." })
}

module.exports = { email, phone, birthday, password }