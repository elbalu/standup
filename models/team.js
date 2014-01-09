  module.exports = function (mongoose) {

      var teamSchema = new mongoose.Schema({
          teamName: {
              type: String
          }
      });

      var teamModel = mongoose.model('teamSchema', teamSchema);

      var saveTeam = function (teamName) {
          var team = new teamModel();

          team.teamName = teamName;
          team.save(function (err) {
              if (err)
                  throw err;
              console.log('Team saved');
          });

      }

      var isTeamNameExists = function (teamName, callback) {
          teamModel.findOne({
              teamName: teamName
          }, function (err, teamname) {

              if (teamname != null) {
                  callback(false);
              } else {
                  callback(true);
              }
          })
      }

      var getTeamList = function (callback) {
          teamModel.find(function (err, teamList) {
            console.log('teamllissss '+teamList);
              callback(teamList);
          });
      }

      return {
          saveTeam: saveTeam,
          isTeamNameExists: isTeamNameExists,
          getTeamList: getTeamList
      }

  }