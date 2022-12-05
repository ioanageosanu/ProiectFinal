 import {Food} from '../models/aliment.js'

 export const getAliment=async(req,res)=>{
    try {
        const food=await Food.findAll()
        res.json(food)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}
export const createAliment= async(req,res)=>{
    const {denumire,data_expirare,categorie,user_id}=req.body
    try {
        const newAliment=await Food.create({
            denumire,
            data_expirare,
            categorie,
            user_id
        })
        res.json(newAliment)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getaliment=async(req,res)=>{
    const {food_id}=req.params
    try {
        const food=await Food.findOne({
        where:{
            food_id
        },
        attributes:["food_id","denumire","data_expirare","categorie","user_id"],
        })
        if(!food) return res.status(404).json({message:"Aliment inexistent"})
        res.json(food);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}

export const updateAliment=async(req,res)=>{
    try {
        const {food_id}=req.params
        const {denumire,data_expirare,categorie}=req.body
        const food=await Food.findByPk(food_id)
        food.set(req.body)
        await food.save()
        return res.json(food)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}
export const deleteAliment= async(req,res)=>{
    try {
        const {food_id}=req.params
        await Food.destroy({
            where:{
                food_id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
