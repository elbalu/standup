define([
    'jquery', 
    'underscore', 
    'backbone'
    ], 
    function($, _, Backbone){
    
        var teamScrumMaster = Backbone.View.extend({
        
            el: $('#scrumMemberStatusID'),
            teamList: [],
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
                var that = this;
                $('.scrumMemberStatus').each( function (key,value) {
                    that.teamList.push($(this).attr('class').split(' ')[1]);
                })
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
                    val = $(e.target).val(),
                    currentSection = $(e.target).closest('.scrumMemberStatus').attr('class').split(' ')[1];
                    //.find('.scrumMemberStatus').attr('class').split(' ')[1]
                if(valLength > 2) {
                    $(this.teamList).each( function(key, value) {
                        if(val.substring(valLength-2, valLength).toUpperCase() === value ) {

                            val = val.replace(val.substring(valLength-3, valLength), '');
                            $(e.target).val(val);
                            $("." + value + " textarea")[0].focus();
                            return;
                        } 
                    });
                    
                }
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
        
        return teamScrumMaster;
    
    }
);