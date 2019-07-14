const UserController = require('./controller/UserController')

module.exports= (app) => {

    //create
    app.post('/user', 
        UserController.create
    )

    //edit
    app.put('/user/:userId',
        UserController.put
    )

    //delete
    app.delete('/user/:userId',
        UserController.remove
    )

    //get user by id
    app.get('/user/userId',
        UserController.show
    )

    //get all user
    app.get('/users',
        UserController.index
    )
}