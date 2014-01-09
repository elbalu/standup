  module.exports = function (mongoose) {

      var teamMemberSchema = new mongoose.Schema({
          teamName: String,
          fullName: String,
          shortName: String,
          color: String
      });

      var teamMemberModel = mongoose.model('teamMemberSchema', teamMemberSchema);

      var saveTeamMember = function (teamName, teamMemberName, callback) {
          var teamMember = new teamMemberModel();

          var nameArr = teamMemberName.split(" "), shortName;
          if (nameArr.length > 1){
            shortName = nameArr[0].charAt(0)+nameArr[1].charAt(0);
          }
          else{
            shortName = nameArr[0].substring(0,2);
          }

          this.getTeamMemberList(teamName, function (teamMemberList) {

              teamMember.teamName = teamName;
              teamMember.fullName = teamMemberName;
              teamMember.shortName = shortName.toUpperCase();

              var colorCode;

              switch(Object.keys(teamMemberList).length % 8){
                case 0: 
                  colorCode = "greensea";
                  break;
                case 1:
                  colorCode = "orange";
                  break;
                case 2: 
                  colorCode = "nephritis";
                  break;
                case 3:
                  colorCode = "pumpkin";
                  break;
                case 4: 
                  colorCode = "belizehole";
                  break;
                case 5:
                  colorCode = "pomegranate";    
                  break;
                case 6:
                  colorCode = "wisteria";       
                  break;
                case 7:
                  colorCode = "midnightblue";       
                  break;
              }
              teamMember.color = colorCode;
                
              teamMember.save(function (err, sucess) {
                  if (err) {
                      throw err;
                    console.log('Team Member saved');
                  } else {
                    callback(sucess);
                  }
              });

          })

      }

      var getTeamMemberList = function (teamName, callback) {
          teamMemberModel.find({
            teamName: teamName
          }, function (err, teamMemberList) {
              callback(teamMemberList);
          });
      }


      var getTeamMemberData = function (teamName, shortName, callback) {
          teamMemberModel.find({
            teamName: teamName,
            shortName: shortName
          }, function (err, teamMemberData) {
              callback(teamMemberData);
          });
      }

      return {
          saveTeamMember: saveTeamMember,
          getTeamMemberList: getTeamMemberList
      }

  }