'use strict';

//var mongoose = require('mongoose');
//var teamMemberModel = require('../models/teamMember')(mongoose);
//var memberStatusModel = require('../models/memberStatus')(mongoose);

var memberStatusModel = require("../models/memberStatusModel");

module.exports = function(server) {
    
    'use strict';

    server.get('/team/:team/status/:name', function(req, res) {
		
		var data = {
			viewName : 'memberStatus',
			baseTemplate: 'layouts/master',
			teamName: req.params.team,
			shortName: req.params.name,
			color: req.query.cl,
			fullName: req.query.fn,
 			cssLink: '/css',
			jsLink: '/js'			 
		}
       
	    res.render(data.baseTemplate, data);
     
	});

    server.post('/team/:team/status/:name', function(req, res) {
		
		var data = {
			viewName : 'teamScrumMaster',
			baseTemplate: 'layouts/master',
			teamName: req.params.team,
			teamMemberName : req.body.teamMemberName,
			yesterdayStatus : req.body.yesterdayStatus,
			todayStatus : req.body.todayStatus,
			blocker : req.body.blocker,
			overAllStatus : req.body.overallStatus,
			cssLink: '/css',
			jsLink: '/js'
		}

		data.memberStatus = memberStatusModel.memberStatus;

		
		res.render(data.baseTemplate, data);

	});
	
};

