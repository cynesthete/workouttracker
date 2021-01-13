const mongoose = require(
    "mongoose" 
);

// const exerciseschema = new mongoose.Schema({
//     name: {
//         type: String, 
//         required: true
//     }, 
//     sets: Number,
//     weight: Number,
//     duration: Number,
//     reps: Number,
//     distance: Number,
// })

const workoutschema = new mongoose.Schema({
    
    day: {
        type: Date, 
        default: ()=>new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: "Must have exercise type"
        }, 
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
})

const Workout = mongoose.model("Workout", workoutschema)

module.exports = Workout