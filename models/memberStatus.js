  module.exports = function (mongoose) {

      var memberStatusSchema = new mongoose.Schema({
          teamName: String,
          fullName: String,
          shortName: String,
          color: String,
          status: [
              {
                date: Date,
                sterday: String,
                today: String,
                blocker: String,
                statusColor: String
              }

          ]   
      });

      var memberStatusModel = mongoose.model('memberStatusSchema', memberStatusSchema);

      var saveMemberStatus = function (teamName, fullName, shortName, color, sterday, today, blocker, statusColor, callback) {
          
          var memberStatus = new memberStatusModel();

          this.getMemberStatusRecords(teamName, fullName, shortName,  function (memberStatusRecord) {

              if (Object.keys(memberStatusRecord).length > 0){

                console.log(">>> inside length conditin  >>> ", memberStatusRecord);

                  var query = { 'teamName': teamName, 'fullName': fullName, 'shortName': shortName};

                  memberStatusModel.update(query, {$pushAll: { status : {date: new Date(), sterday: sterday, today: today, blocker: blocker, statusColor: statusColor} }},  function(err, success){
                    if (err)
                    {
                      throw err;
                    }
                    else{
                                          
                        console.log(' Member status added successfully ', memberStatus)  
                        callback(success);
                    }
                  });
              }else{
                  memberStatus.teamName = teamName;
                  memberStatus.fullName = fullName;
                  memberStatus.shortName = shortName;  
                  memberStatus.color = color;
                  memberStatus.status.push({ "date": new Date(), "sterday" : sterday, "today" : today, "blocker" : blocker, "statusColor" : statusColor });
                  memberStatus.save(function (err, success) {
                  if (err)
                  {
                      throw err;
                    }
                    else{
                           console.log(' Member status saved successfully');
                              callback(success);
                         }
                  });
              }
          })

      }

      var getMemberStatusRecords = function (teamName, fullName, shortName,  callback) {
          memberStatusModel.find({
            teamName: teamName,
            fullName: fullName,
            shortName: shortName
          }, function (err, memberStatusRecord) {
            console.log(" >>>>> member status record >>>> ");
            console.log(memberStatusRecord);
              callback(memberStatusRecord);
          });
      }

      var getMemberStatusByTeam = function (teamName, callback) {
          memberStatusModel.find({
            teamName: teamName
          }, function (err, memberStatusByTeamRecords) {
              callback(memberStatusByTeamRecords);
          });
      }


      return {
          saveMemberStatus: saveMemberStatus,
          getMemberStatusRecords : getMemberStatusRecords,
          getMemberStatusByTeam: getMemberStatusByTeam
      }

  }