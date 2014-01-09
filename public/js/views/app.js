define([
        'jquery',
        'underscore',
        'backbone',
        'bootstrap',
        'dust',
        'dustHelper',
        'views/memberStatus',
        'views/index'
], function ($, _, Backbone, Bootstrap, Dust) {

    var AppView = Backbone.View.extend({

        el: $("#wrapper"),
        events: {
            'click a.proceed': 'proceedInnerLink'
        },

        render: function () {

        },

        initialize: function() {
        },
        proceedFormUserSet: function (e) {

            $.post(e.target.action, function (json) {
                require(['views/' + json.viewName], function (View) {

                    var pageView = new View(json);
                    dust.render('public/templates/' + json.viewName + '.dust', json, function (err, out) {
                        $('#userSet').empty();
                        document.getElementById("userSet").innerHTML = out;
                    });
                    pageView.render(json);
                });
            });

            e.preventDefault();
        },

        proceedInnerLink: function (e) {
            $.get(e.target.href, function (json) {
                require(['views/' + json.viewName], function (View) {
                    var pageView = new View(json);
                    dust.render(json.viewName, json, function (err, out) {
                        $('#innerContent').html(out);
                    });
                    pageView.render(json);
                });
            });

            e.preventDefault();
        }


    });

    return AppView;

});