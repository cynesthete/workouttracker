const mongoose = require(
    "mongoose" 
)

const exerciseschema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    sets: Number,
    weight: Number,
    duration: Number,
    reps: Number,
    distance: Number,
})

const workoutschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [{
        type: exerciseschema
    }]
})

const workout = mongoose.model("Workout", workoutschema)

module.exports = workout