const express = require("express")
const router = express.Router()
const {getAnimals, getAnimal, postAnimal, removeAnimal, changeAnimal} = require("../controllers/animals_controller")

//READ
//GET on "/animals"
//Returns all animals
router.get("/", getAnimals)

//READ
//GET on "/animals/:id"
//Returns an animal with given id
router.get ("/:id",getAnimal)

//CREATE
//POST in "/animals"
//Creates a new animal
router.post("/",postAnimal)

//DELETE
//DELETE on "/animals/:id"
//Deletes an animal with given id
router.delete("/:id", removeAnimal)
// /animals?kind=Cat
//UPDATE
//PUT on "/animals/:id"
//Updates an animal with given id
router.put("/:id", changeAnimal)

module.exports = router