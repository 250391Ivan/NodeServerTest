const {Router} = require('express');
const  router  = Router()
const {getUser,postUser,putUser,deleteUser} =require('../controllers/user');

router.get('/getUsers',getUser);
router.post('/postUsers',postUser);
router.put('/putUsers',putUser);
router.delete('/deleteUsers',deleteUser);
/* en caso  de ir  por url  pasar valor /:id, en la ruta del metodo */
  
module.exports = router

