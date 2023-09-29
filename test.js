//scaffolding
export const apps = {};

//define
apps.get = (req , res)=>{
   res.send("this is for method get")
   console.log(req.app.locals.test);
};