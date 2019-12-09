const read=require("./jsonRead");
     function updateData(fileName, id, updateKey, updateValue) {
        const fs = require('fs');
      
        fs.exists(fileName, function (exists) {
           
            if (exists) {
                console.log("yes file exists");
                let isIDexist=false;
                var jsonFileObject = read.readData(fileName);
                console.log(jsonFileObject);
                for (var index = 0; index < jsonFileObject.flightbookingDetails.length; index++) {
                    if (jsonFileObject.flightbookingDetails[index].userid == id) {
                      

                        switch (updateKey) {
                            case 'from':
                                jsonFileObject.flightbookingDetails[index].from = updateValue;
                                break;
                            case 'to':
                                jsonFileObject.flightbookingDetails[index].to = updateValue;
                                break;
                            case 'departureDate':
                                jsonFileObject.flightbookingDetails[index].departureDate = updateValue;
                                break;
                            case 'adult':
                                jsonFileObject.flightbookingDetails[index].adult = updateValue;
                                break;
                            case 'child':
                                jsonFileObject.flightbookingDetails[index].child = updateValue;
                                break;
                        }
                        let isIDexist=true;
                        break;
                    }
                }
                if(!isIDexist){
                    console.log("entered id is wrong");
                }
                else{
                    console.log(jsonFileObject);
                }
                let jsonFileString = JSON.stringify(jsonFileObject);

                fs.writeFile(fileName, jsonFileString, function (err) {
                    if (err) throw err;
                    console.log('data updated to file');
                   
                }
                );

            }
            else {
                console.log("file not exists");

            }
        });

    }
    module.exports={
        updateData
    }
