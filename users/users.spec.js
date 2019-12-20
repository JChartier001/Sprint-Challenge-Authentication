const Users = require('./usersmodel.js');
const db = require("../database/dbConfig.js");

describe('Users Model', function() {
    beforeEach(async () => {
        await db('users').truncate();
    });
    describe("add", function() {
        it("should add new user to database", async function() {
         
          await Users.add({username: "Bernie", password:"pass" });
          await Users.add({username: "Dog", password:"pass" });
    
          
          const User = await db("users");
          expect(User).toHaveLength(2);
        });
      });
    });

    
