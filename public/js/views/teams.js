define([
    'jquery', 
    'underscore', 
    'backbone',
    '../jsdust/index'
    ], 
    function($, _, Backbone){
    
        var View = Backbone.View.extend({
        
            el: '#teams',
        
            events: {
            },
            
            initialize: function(json) {
            },
            
            render: function(json) {
            }
        
        });
        
        return View;
    
    }
);