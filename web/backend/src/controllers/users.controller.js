import { User } from "../models/user.js"
import {Food }from '../models/aliment.js'

export const getUser=async(req,res)=>{
    try {
        const users=await User.findAll()
        res.json(users)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}
export const createUser= async(req,res)=>{
    const {nume,prenume,locatie,email,password,contact_no}=req.body
    try {
        const newUser=await User.create({
            nume,
            prenume,
            locatie,
            email,
            password,
            contact_no
        })
        res.json(newUser)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getuser=async(req,res)=>{
    try {
        const {id}=req.params
        const user=await User.findOne({
        where:{
            id,
        },
        })
        if(!user) return res.status(404).json({message:"Proiect inexistent"})
        res.json(user);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}

export const updateUser=async(req,res)=>{
    try {
        const {id}=req.params
        const {nume,prenume,locatie,email,password,contact_no}=req.body
        const user=await User.findByPk(id)
        user.nume=nume;
        user.prenume=prenume;
        user.locatie=locatie
        user.email=email
        user.password=password
        user.contact_no=contact_no
        await user.save()
        res.json(user)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}
export const deleteUser= async(req,res)=>{
    try {
        const {id}=req.params
        await User.destroy({
            where:{
                id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getAlimenteUser=async(req,res)=>{
    const {id}=req.params
    const alimente=await Food.findAll({
    where:{
        user_id:id,
    }
    })
    res.json(alimente);
}

