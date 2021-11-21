const express = require("express");

const Pizza = require('../models/pizza')


exports.getallpizzas = async(req, res) => {
    
  
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

};

exports.addpizza = async(req, res) => {

    const pizza = req.body.pizza

   try {
    const newpizza = new Pizza({
        name : pizza.name,
        image :pizza.image,
        varients : ['small','medium','large'],
        description : pizza.description,
        category : pizza.category,
        prices : [pizza.prices]
    })
    await newpizza.save()
    res.send('Adicionado com sucesso')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
};

exports.getpizzabyid = async(req, res) => {

 const pizzaid = req.body.pizzaid

 try {
     const pizza = await Pizza.findOne({_id : pizzaid})
     res.send(pizza)
 } catch (error) {
     return res.status(400).json({ message: error });
 }
  
};

exports.editpizza = async(req, res) => {

    const editedpizza = req.body.editedpizza

    try {
        const pizza = await Pizza.findOne({_id : editedpizza._id})
        
        pizza.name= editedpizza.name,
        pizza.description= editedpizza.description,
        pizza.image= editedpizza.image,
        pizza.category=editedpizza.category,
        pizza.prices = [editedpizza.prices]

        await pizza.save()

        res.send('Editado com sucesso')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
};

exports.deletepizza = async(req, res) => {

    const pizzaid = req.body.pizzaid

  try {
    await Pizza.findOneAndDelete({_id : pizzaid})
    res.send('Pizza excluída')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
};