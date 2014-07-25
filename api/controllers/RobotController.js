/**
 * RobotController
 *
 * @description :: Server-side logic for managing robots
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require('request');

module.exports = {
  index: function(req, res) {
    console.log(req.body.text);
    var obj = {};
    console.log(req.body);
    if (req.body.user_name != 'slackbot') {
      obj.text = '你好~ 今天想吃什麼？'
    }
    
    return res.send(obj); 
  }
};

