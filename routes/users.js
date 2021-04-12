var express = require('express');
const { getPlaceList, getDirection } = require('../controller/api');
var router = express.Router();

router.post('/direction', async function (req, res, next) {
  const { startingPoint, endingPoint, profile } = req.body
  try {
    const directions = await getDirection(startingPoint, endingPoint, profile)
    console.log({ directions })
    res.json(directions);
  } catch (e) {
    res.status(400).json('something got wrong')
  }
});


router.post('/textsearch', async function (req, res) {
  
  const { region, query, location } = req.body
  try {
    const placeList = await getPlaceList(region, query, location)
    // console.log(placeList)
    res.json(placeList)
    //console.log(new MapApi({region,query, location}).createApi('TextSearch'))
  } catch (e) {
    console.log(e.message)
  }
})




module.exports = router;
