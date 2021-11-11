const express = require('express')
const router = express.Router()
const personSchema = require('../models/personSchema')



router.post('/newPerson', (req, res) => {
  let newPerson = new personSchema(req.body)
  newPerson.save((err, data) => {
    err ? err : res.send('New person was added')
  });
});


router.post('/manyPerson', (req, res) => {
  personSchema.create(req.body, (err, data) => {
    err ? console.log(err) : res.send(data)
  })
});

router.get('/getAll', (req, res) => {
  personSchema.find((err, data) => {
    err ? console.log(err) : res.send(data)
  })
});

router.get('/getOne', (req, res) => {
  personSchema.findOne({ country: 'France' }, (err, data) => {
    err ? console.log(err) : res.send(data)
    console.log(data)
  })
});

router.get('/getByName/:id', (req, res) => {
  personSchema.findOne({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.send(data)
    console.log(data)
  })
});






router.put('/edit', (req, res) => {
  personSchema.findById({ _id: req.params.id }, (err, data) => {
    rlt.favoriteFoods.push('hamburger')
    rlt.save()
    res.send(data)
  })
})


router.put('/update', (req, res) => {
  personSchema.findOneAndUpdate({ name: "mikel" }, { age: 30 }, { new: true }, (err) => {
    err ? console.log(err) : res.send("updated");
  })
});


router.delete('/delete', (req, res) => {
  personSchema.findByIdAndDelete({_id:req.params.id}, (err) => {
    err ? console.log(err) : res.send("deleted");
  });
});



router.delete('/removeMany', (req, res) => {
  personSchema.remove({ name: 'sami' }, (err) => {
    err ? console.log(err) : res.send("Many was deleted");
  });
});


router.get('/list', (req, res) => {
  personSchema.find({ favoriteFoods: 'pizza' })
    .sort({ name: -1 })
    .limit(2)
    .select({ age: 0, _id: 0, __v: 0 })
    .exec((err, data) => {
      err ? console.log(err) : res.send(data)
    })
})



module.exports = router
