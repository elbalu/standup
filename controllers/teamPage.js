'use strict';

//var mongoose = require('mongoose');
var teamMemberModel = require('../models/teamMemberModel');

module.exports = function(server) {
    
    'use strict';

    server.get('/team/:team/scrumMaster', function(req, res) {
		
			var data = {
				viewName : 'teamScrumMaster',
				baseTemplate: 'layouts/master',
				teamName: req.params.team,
	 			cssLink: '/css',
				jsLink: '/js'			 
			}

            data.teamMemberList = teamMemberModel.teamMemberList;
            res.render(data.baseTemplate, data);
	});

    server.post('/team/:team/scrumMaster/addMember', function(req, res) {
		
		var data = {
			viewName : 'teamScrumMaster',
			baseTemplate: 'layouts/master',
			teamName: req.params.team,
			teamMemberName : req.body.teamMemberName,
			cssLink: '/css',
			jsLink: '/js'
		}

		 var teamMemberName = req.body.teamMemberName;

         var nameArr = teamMemberName.split(" "), shortName;

         if (nameArr.length > 1){
            shortName = nameArr[0].charAt(0)+nameArr[1].charAt(0);
          }
          else{
            shortName = nameArr[0].substring(0,2);
          }

         data.teamMemberList = teamMemberModel.teamMemberList;

         data.teamMemberList.push({teamName : req.params.team, fullName : req.body.teamMemberName, shortName: shortName, color: "belizehole" });

	     res.render(data.baseTemplate, data);
		 
	});
	
};

