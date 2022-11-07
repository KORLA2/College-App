import express from 'express'

let Router=express.Router()
Router.get('/',(req,res)=>res.send('This  is working'));

export default Router;