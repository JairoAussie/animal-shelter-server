const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Animal = new Schema ({
    name:{
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    description:{
        type: String
    }
})

Animal.statics.findByKindOfAnimal = function (k){
    return this.find({kind: k})
}

Animal.statics.findByName = function (n){
    return this.find({name: n})
}
module.exports = mongoose.model("Animal",Animal)