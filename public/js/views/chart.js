define([
    'jquery', 
    'underscore', 
    'backbone',
    'chart'
    ], 
    function($, _, Backbone, chart){
    
        var chartView = Backbone.View.extend({
        
            el: $('#chart'),
        
            events: {
            },
            
            initialize: function(json) {
               var lineChartData = {
                        labels : ["Sprint1","Sprint2","Sprint3","Sprint4","Sprint5","Sprint6","Sprint7"],
                        datasets : [
                                {
                                        fillColor : "rgba(100,172,77,0.5)",
                                        strokeColor : "rgba(100,172,77,1)",
                                        pointColor : "rgba(100,172,77,1)",
                                        pointStrokeColor : "#fff",
                                        data : [5,9,9,8,5,5,4]
                                },
                                {
                                        fillColor : "rgba(251,79,45,0.5)",
                                        strokeColor : "rgba(251,79,45,1)",
                                        pointColor : "rgba(251,79,45,1)",
                                        pointStrokeColor : "#fff",
                                        data : [8,8,4,9,9,7,10]
                                }
                        ]
                        
                }

        var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Line(lineChartData);


         var pieData = [
                                {
                                        value: 30,
                                        color:"#1abc9c",
                                        name: 'BL'
                                },
                                {
                                        value : 50,
                                        color : "#f1c40f"
                                },
                                {
                                        value : 100,
                                        color : "#e74c3c"
                                },
                                {
                                        value: 30,
                                        color:"#9b59b6",
                                        name: 'BL'
                                },
                                {
                                        value : 50,
                                        color : "#2c3e50"
                                },
                                {
                                        value : 100,
                                        color : "#d35400"
                                }
                        
                        ];

        var myPie = new Chart(document.getElementById("standupApp").getContext("2d")).Pie(pieData);
            },
            


            render: function(json) {
            }
        
        });
        
        return chartView;
    
    }
);