const axios = require('axios');
var MapApi = require('../model/api');
var ACCESS_TOKEN = "9232f8c6-e6fd-4f8f-b999-dd2af8b10e0c"
const { instructionsParser, reverseGeoLocation } = require('../helper')

const getPlaceList = async (region, query, location) => {
    try {
      /*   const result = await axios({
            method: 'get',
            url: new MapApi({ region, query, location }).createApi('TextSearch'),
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` }
        }) */

        const result = await axios({
            method : 'post',
            url : 'https://oauth.fatsecret.com/connect/token',
            data:{
                auth:{
                    user: "dfa2567107014423b29dd0abf115d8cd",
                    password : '38f8420026ed4aed827c45df21c4614'
                }
            }
        })
        return result.data
    } catch (e) {
        console.log(e)
    }
}

const getDirection = async (startingPoint, endingPoint, profile) => {
    startingPoint = reverseGeoLocation(startingPoint)
    endingPoint = reverseGeoLocation(endingPoint)
    try {
        const result = await axios({
            method: 'get',
            url: new MapApi({ startingPoint, endingPoint, profile }).createApi('Distance'),
        });
        var instructions = instructionsParser(result.data);
        return instructions;
    } catch (e) {
        console.log(e);
        return e.message
    }
}

module.exports = { getPlaceList, getDirection }
