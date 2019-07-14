const {User} = require('../models')

module.exports={
    //get all user
    async index (req, res){
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (error) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },
    //create user
    async create (req, res){
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON)
        } catch (error) {
            res.status(500).send({
                error: 'TCreate user incorrect'
            })
        }
    },
    //edit user, suspend, active
    put (req, res) {
        res.send('ทําการแก้ไขผุ้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },
    //delete user
    remove (req, res){
        res.send('ลบผู้ใช้งาน: ' + ' '+ req.params.userId + ' ' + JSON.stringify(req.body))
    },
    // get user by id   
    show (req, res) {     
        res.send('ดูขอ้มูลผใู้ชง้าน: ' + req.params.userId)
    }
}