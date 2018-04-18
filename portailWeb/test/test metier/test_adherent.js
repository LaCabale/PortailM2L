const Adherent = require('../../metier/Adherent');


const assert = require('assert');

    describe("test Getters", () =>{
        a1 = new Adherent("1","Kilo","Renne");

        it("getId", () =>{
            assert.equal(a1.id,1,'Verification de l id');
        });

        it("getUsername", () =>{
            assert.equal(a1.username,'Kilo','Verification du username');
        });

        it("getPassword", () =>{
            assert.equal(a1.password,'Renne','Verification du password');
        });
    });