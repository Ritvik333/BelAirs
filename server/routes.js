import express from "express"
import loginschema from "./schema.js"
const router = express.Router()

router.post("/dread", async (req, res) => 
{
    await loginschema.findOne({email: req.body.email})
    .then( item => res.json(item))
    .catch( e => console.log(e))
})
router.post("/dwrite", async (req, res) =>
{
    await loginschema.create({email: req.body.email, number: req.body.number, name:req.body.name, from:req.body.from,to:req.body.to,Dep_date:req.body.Dep_date,Ret_date:req.body.Ret_date,Round:req.body.Round})
    .then( () => console.log("New user added successfully!"))
    .catch( e => console.log(e))
})


export default router