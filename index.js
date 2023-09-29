import cookieParser from "cookie-parser";
import express from "express";
//import * as object from "./public/index.js";

import * as path from "path";
import { fileURLToPath } from "url";

const __file_total_path = fileURLToPath(import.meta.url); //return total path ex:D://JS/node/project1/lib/index.js
const __filename = path.basename(__file_total_path); //return index.js
const __pathname = path.dirname(__file_total_path );//return path name ex: D://JS/node/project1/lib

var app = express();
var blog = express.Router();
var admin = express.Router();

//import * as a from "./test.js";
app.use(express.static(`${__pathname}/views/`));
app.locals.test = "hi , I am testing";

/*
app.use(express.json());
app.param("id", (req , res , next , ids)=>{
   const t = { 
      myid :ids , 
      name : "BD"
   }
   //req.extra = t;
   req.body.extra = t;
   next();
});

app.get("/:id" , (req , res)=>{
   console.log(req.body);
   //console.log(req.extra);
   //console.log(app.get("case sensitive routing"));
   res.end("hello from app.get")
});
app.post("/" , (req , res)=>{})
app.put("/" , (req , res)=>{})
app.delete("/" , (req , res)=>{})
*/

/*
*a way to publish your html site in "ejs" format
* "npm i ejs"
app.set("view engine" , "ejs");
app.get("/about" , (req , res)=>{
   res.render("index")
})*/

app.use(express.json());
app.use(cookieParser());
app.set("view engine" , "ejs");

app.param("name" , (req , res , next , names)=>{
   app.locals.name = names ;
   next();
});

app.get("/:name" , (req , res)=>{
   //console.log(req.ip);
   //res.send("asdfa");
   //res.status(404);
   //res.send("asdfa");
   res.download("../../Practical_instructions_GitHub_collaboration.pdf" , "Practical_instructions_GitHub_collaboration.pdf" , (err)=>{
      if(err){
         console.log("err");
      }
   });
   
   
})
app.get("/" , (req , res)=>{
   res.render("index" , {
      name: "niaz"
   })
});
app.get("/about/:id" , (req , res)=>{
   console.log(req.query);
   res.end("asdfaaa")
});

blog.get("/usPage" , (req , res)=>{
   console.log(req.cookies);
   res.send("sdfasdf");
})  
app.use("/blogs" , blog);


app.listen(8080 , ()=>{
   //object.obj.whats();
   console.log("listening to port http://localhost:8080");
});
//console.log(express);