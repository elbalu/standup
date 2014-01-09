define([
    'jquery', 
    'underscore', 
    'backbone'
    ], 
    function($, _, Backbone){
    
        var memberStatusView = Backbone.View.extend({
        
            el: $('#memberStatus'),
        
            events: {
                'click #overallStatusPanel .entryStatus': 'selectStatus',
                'keydown .keyPressField': 'doActions'

            },
            
            initialize: function() {
                var d = new Date();

                var month = d.getMonth()+1;
                var day = d.getDate();

                var output = d.getFullYear() + '/' +
                    ((''+month).length<2 ? '0' : '') + month + '/' +
                    ((''+day).length<2 ? '0' : '') + day;
                    $('#currentDate').html('Status for ' + output);
            },
            
            render: function() {
            },
            selectStatus: function(e) {
                var target = $(e.target);
                if (!$(target).hasClass('selected')) {
                    if($(target).hasClass('good')) {
                        $('.good').toggleClass('selected');
                        $('.bad').toggleClass('selected');
                        $('#overallStatus').val('good');
                    } else {
                        $('.bad').toggleClass('selected');
                        $('.good').toggleClass('selected');
                        $('#overallStatus').val('bad');

                    }
                    console.log($('#overallStatus').val());

                }
            },
            doActions: function(e){
               // console.log($(e.target).val().length);
                var valLength = $(e.target).val().length,
                    val = $(e.target).val();
                if(valLength > 3) {
                    //console.log(val.substring(valLength-4, valLength))
                    if(val.substring(valLength-4, valLength) === ':bad' ) {
                        $('.good').removeClass('selected');
                        $('.bad').addClass('selected');
                        val = val.replace(val.substring(valLength-4, valLength), '');
                        $(e.target).val(val)
                    } 
                }
                if(valLength > 4) {
                    //console.log(val.substring(valLength-5, valLength))
                    if(val.substring(valLength-5, valLength) === ':good' ) {
                        $('.bad').removeClass('selected');
                        $('.good').addClass('selected');
                        val = val.replace(val.substring(valLength-5, valLength), '');
                        $(e.target).val(val)
                    } else if(val.substring(valLength-5, valLength) === ':save') {
                        val = val.replace(val.substring(valLength-5, valLength), '');
                        $(e.target).val(val)
                        $(this.el).find('form').submit();
                    }
                }


            }
        
        });
        
        return memberStatusView;
    
    }
);