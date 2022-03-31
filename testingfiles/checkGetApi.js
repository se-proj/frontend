function checkGetApi(url , noOfTestCases, method, schema) {
    var clinets = [];
    schema = schema.trim();
    for (var i = 0; i < noOfTestCases; i++) {
        {
            var firstattribute = schema.split(":")[0];
            firstattribute = firstattribute.substring(1, firstattribute.length - 1);
            firstattribute = firstattribute.trim().substring(1, firstattribute.length - 1);
            // console.log(firstattribute);
            var firstattributetype = schema.split(":")[1].split(",")[0];
            firstattributetype = firstattributetype.trim();
            firstattributetype = firstattributetype.substring(1, firstattributetype.length - 1);
            // console.log(firstattributetype);
            var secondattribute = schema.split(":")[1].split(",")[1];
            secondattribute = secondattribute.trim();
            secondattribute = secondattribute.substring(1, secondattribute.length - 1);
            // console.log(secondattribute);
            var secondattributetype = schema.split(":")[2].split(",")[0];
            secondattributetype = secondattributetype.trim();
            secondattributetype = secondattributetype.substring(1, secondattributetype.length - 1).trim();
            secondattributetype = secondattributetype.substring(0, secondattributetype.length - 1);
            // console.log(secondattributetype);
            var client = {};
            if (firstattributetype == "string") {
                var randomstring = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                client[firstattribute] = randomstring;
            } else if (firstattributetype == "number") {
                var randomnumber = Math.floor(Math.random() * 100);
                client[firstattribute] = randomnumber;
            } else if (firstattributetype == "boolean") {
                var randomboolean = Math.random() >= 0.5;
                client[firstattribute] = randomboolean;
            }
            if (secondattributetype == "string") {
                var randomstring = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                client[secondattribute] = randomstring;
            }
            else if (secondattributetype == "number") {
                var randomnumber = Math.floor(Math.random() * 100);
                client[secondattribute] = randomnumber;
            }
            else if (secondattributetype == "boolean") {
                var randomboolean = Math.random() >= 0.5;
                client[secondattribute] = randomboolean;
            }
            clinets.push(client);
        }
    }
    // console.log(clinets);
    for (var i = 0; i < clinets.length; i++) {
        request(url, {
            method: method,
            json: clinets[i]
        }, function (error, response, body) {
            try {
                expect(response.statusCode).to.equal(200);
                console.log("Test case passed");
            }
            catch (err) {
                console.log("Test case failed");
            }
        });
    }
}
