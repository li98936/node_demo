var express = require('express');
var router = express.Router();
 
var axios = require('axios');
var url1 = "http://localhost:8888/api/test1";
var url2 = "http://localhost:8888/api/test2";
var url3 = "http://localhost:8888/api/test3";
var url4 = "http://localhost:8888/api/test4";

router.get('/test', function(req, res, next) {
    var data = []
    axios.get(url1)
        .then(function (response) {
            console.log(response);
            data.push(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    axios.get(url2)
        .then(function (response) {
            console.log(response);
            data.push(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    axios.get(url3)
        .then(function (response) {
            console.log(response);
            data.push(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    axios.get(url4)
        .then(function (response) {
            console.log(response);
            data.push(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    res.send(response.data);
});
 
module.exports = router;