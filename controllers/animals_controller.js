const {getAllAnimals, getAnimalById, addAnimal, deleteAnimal, updateAnimal} = require("../utils/animals_utilities")

const getAnimals = function (req, res){
    getAllAnimals(req).exec((err, animals) => {
        if (err){
            res.status(500)
            return res.json({
                error: err.message
            })
        }
        res.send(animals)
    })
}

const getAnimal = function (req, res){
    getAnimalById(req.params.id).exec((err, animal) => {
        if (err){
            res.status(404)
            return res.send("Animal not found")
        }
        res.send(animal)
    })
}

const postAnimal = function (req, res){
    //save the animal instance form addAnimal
    addAnimal(req.body).save((err,animal) =>{
        if (err){
            res.status(500)
            return res.json({
                error: err.message
            })
        }
        res.status(201)
        res.send(animal)
    })
}

const removeAnimal = function (req, res){
    deleteAnimal(req.params.id).exec((err) => {
        if (err){
            res.status(500)
            return res.json({
                error: err.message
            })
        }
        res.sendStatus(204)
    })
}

const changeAnimal = function(req,res){
    updateAnimal(req).exec((err,animal) => {
        if (err) {
            res.status(500)
            return res.json({
                error : err.message
            })
        }
        res.status(200)
        res.send(animal)
    })
}

module.exports = {getAnimals, getAnimal, postAnimal, removeAnimal, changeAnimal}