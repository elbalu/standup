'use strict';



module.exports = function(server) {
    
    'use strict';

	server.get('/', function(req, res) {
		//renderHtml(req, res, 'index', '');
		
		res.redirect('/index');
	});

	server.get('/index', function(req, res) {
		//renderOutput(req, res, 'index', '');
		var data = {
			viewName : 'index',
			 baseTemplate: 'layouts/master',
			 cssLink: '/css',
			 jsLink: '/js'
		}
		res.render(data.baseTemplate, data);
	});

	server.get('/app', function(req, res) {
		var json = {
				viewName: "about",
	            baseTemplate: 'master',
	            data: {
	                title: 'hello Sai'
	            },
			 	cssLink: '/css',
			 	jsLink: '/js'
	        }
		//renderOutput(req, res, 'index', '');
		res.json(json);
	});

	server.get('/about', function(req, res) {
                //renderOutput(req, res, 'about', 'Deleted');
                res.render('about');
        });

	function renderOutput(req, res, viewName, status) {
		var json;

			json = {
				viewName: viewName
			};
	
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.write(JSON.stringify(json));
			res.end();
			
		};

	function renderHtml(req, res, viewName, status) {
		var json;

			json = {
				viewName: viewName,
				baseTemplate: 'layouts/master',
			 	cssLink: '/css',
			 	jsLink: '/js'
				
			};
            res.render(json.viewName);
			

	}	
};

