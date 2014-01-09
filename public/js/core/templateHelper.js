define([
        'dust'
], function (dust) {
	
	'use strict';

	function renderTemplate(templateName, json, callback) {
	    console.log(templateName);
		
	    var out;
		if(typeof dust!=='undefined') {
			dust.render('public/templates/' + json.viewName + '.dust', json, function(err, output) {
          		out = output;
        	});      
	    }
        if(callback) {
            callback(out);
        }
	}

	return {
		renderTemplate: renderTemplate
	};

});
