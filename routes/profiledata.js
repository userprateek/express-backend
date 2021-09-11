const router = require('express').Router();
let Profiledata = require('../models/profile.model');
router.route('/').get((req, res) => {
    Profiledata.find()
      .then(profiledata => res.json(profiledata))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    const tech = req.body.tech;
    const desc = req.body.desc;
    const duration = req.body.duration;
    const newProfile = new Profiledata({title,link,tech,desc,duration});
  
    newProfile.save()
      .then(() => res.json('Profile added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;