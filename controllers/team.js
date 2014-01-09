'use strict';

// var mongoose = require('mongoose');
// var teamModel = require("../models/team")(mongoose);

var teamModel = require("../models/teamModel");
var teamStatusModel = require("../models/memberStatusModelSingleDate");

module.exports = function (server) {

    'use strict';

    server.get('/teams', function (req, res) {
        var data = {
            viewName: 'teams',
            baseTemplate: 'layouts/master',
			cssLink: '/css',
            jsLink: '/js',
        };

        data.teamList = teamModel.teamList;

        res.render(data.baseTemplate, data);
    });

    
    server.post('/teams', function (req, res) {

    var data = {
            viewName: 'teams',
            baseTemplate: 'layouts/master',
            teamName: req.body.teamName,
            message: {
                type: '',
                message: ''
            },
			cssLink: '/css',
            jsLink: '/js'
        }

        data.teamList = teamModel.teamList;

        data.teamList.push({teamName : req.body.teamName});

        res.render(data.baseTemplate, data);
      
    });

    server.get('/team/:team', function (req, res) {
        var data = {
            viewName: 'teamPage',
            baseTemplate: 'layouts/master',
            teamName: req.params.team,
			cssLink: '/css',
            jsLink: '/js'
        }

        data.memberStatus = teamStatusModel.memberStatus;
        res.render(data.baseTemplate, data);
    });

    server.get('/team/:team/chart', function (req, res) {
        var data = {
            viewName: 'chart',
            baseTemplate: 'layouts/master',
            teamName: req.params.team,
            cssLink: '/css',
            jsLink: '/js'
        }
        res.render(data.baseTemplate, data);
    });

};