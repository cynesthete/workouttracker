const router = require("express").Router();
const workout = require("../models/workout");

//create route (no methods)
router.route("/api/workouts")
.get(function(req, res){
    workout.find({})
    .then(workout=>res.json(workout)).catch(err=>res.sendStatus(500))
})

//create workout 
.post(function(req, res){
    workout.create(req.body).then(workout=>res.json(workout)).catch(err=>res.sendStatus(500))
})

router.route("/api/workouts/:id")
.put(function(req, res){
    workout.findById(req.params.id)
    .then(workout=>{
        workout.exercises.push(req.body)
        return workout.save()
    }).then(workout=>res.json(workout)).catch(err=>res.sendStatus(500))
})

module.exports = router