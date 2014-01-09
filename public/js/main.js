require.config({
  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-optamd3-min',
    json: (typeof JSON === "undefined") ? "lib/json2" : "empty:",
    dust: 'lib/dust-core-1.2.3',
    dustHelper: 'lib/dust-helpers',
    bootstrap:'lib/bootstrap',
    less:'lib/less-1.3.0.min',
    chart: 'lib/Chart'
  },

  shim: {
  
    
    "backbone": {
      deps: ["underscore", "jquery"]
    },
    "bootstrap":{
      deps:["jquery"]
    },
    "select2": {
      deps: ["jquery"]
    }
  }
});

require(['views/app', 'views/memberStatus', 'views/teamScrumMaster', 'views/chart'], function(AppView, MemberStatusView, TeamScrumMasterView, chartView){
  var app_view = new AppView;
  app_view.render();
  var member_view = new MemberStatusView;
  member_view.render();
  var scrum_master_view = new TeamScrumMasterView;
  scrum_master_view.render();
  var chart_view = new chartView;
  chart_view.render();
});

