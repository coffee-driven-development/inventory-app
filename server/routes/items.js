const { application } = require('express')
const express = require('express')
const { async } = require('regenerator-runtime')
const router = express.Router()

const { Item } = require('../models/index')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

// GET 
router.get('/', async(req,res,next)=>{
  try{
    const items = await Item.findAll()
    res.send(items)
  } catch(error){
    next(error)
  }
})

router.get('/:id',async(req,res)=>{
    try{
        const item = await Item.findByPk(req.params.id)
        res.send(item)
    }catch(error){
        next(error)
    }
    
})


module.exports = router