module.exports={
    //get all user
    index (req, res){
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
    },
    //create user
    create (req, res){
        res.send('สร้างผู้ใช้งาน'+ JSON.stringify(req.body))
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