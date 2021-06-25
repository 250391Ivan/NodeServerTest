
 /*  const valores = req.body; // valores  que se  reciben en el body
         const valores1 = req.query.name; //valores que re reciben en le url
         const parametros = req.params; //paramatros que se envian */
const getUser = (req,resp)=>{
        resp.status(500).json({
              status:'ok',
              msn:'getUser'
        })
}
const postUser = (req,resp)=>{
       

        resp.status(500).json({
              status:'ok',
              msn:'postUser'
        })
}
const putUser = (req,resp)=>{
        resp.status(500).json({
              status:'ok',
              msn:'putUser'
        }) 
}
const deleteUser = (req,resp)=>{
        resp.status(500).json({
              status:'ok',
              msn:'deleteUser'
        }) 
}

module.exports ={
    getUser,
    postUser,
    putUser,
    deleteUser,

}

