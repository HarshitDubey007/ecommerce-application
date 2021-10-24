const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'user already registered'
            });
            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;

            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            })

            _user.save((error, data) => {
                // console.log(_user)
                if (error) {
                    return res.status(400).json({
                        message: 'Somthing went wrong'
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: "user created successfully"
                    })
                }
            })
        })
}


exports.signin = (req, res) => {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
            // console.log(user.authenticate(req.body.password))
            if (user.authenticate(req.body.password)) {
                const { _id, firstName, lastName, email, role, fullName } = user;
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' })


                res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, role, fullName
                    }
                })
            } else {
                return res.status(400).json({
                    message: "Invalide username and password"
                })
            }
        } else {
            return res.status(400).json({
                message: "Somthing went wrong"
            })
        }
    })
}

