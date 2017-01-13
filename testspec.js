
var notesapp = require("../notesApplication");
var expect = require('chai').expect;

describe ("The create function", function() {

     it("stores all note_content in the notelist", function() {
         var same = new notesapp("name");
         expect(same.create(1)).to.equal("Only strings are valid");
    });

     it('The create function should update notelist ', function() {
        var peter  = new notesapp('Peter John');
        expect(peter.create("My new string")).to.equal("This is a valid string");     
    }); 
});  
    
describe ("The get function", function() {

    it('should accept only an integer', function() {
      var peter  = new notesapp('Peter John');
      expect(peter.get_("1")).to.equal("This string is not valid");
  });

    it('The get function should return a notelist ', function() {
      var peter  = new notesapp('Peter John');
      peter.create("My new string");
      expect(peter.get_(0)).to.equal("My new string");     
  });
});

describe ("The search function", function() {

    it('should accept only a string', function() {
      var peter  = new notesapp('Peter John');
      expect(peter.search_("peter")).to.equal("This is a valid string");
  });


    it('The search function should return a notelist ', function() {
    var peter  = new notesapp('Peter John');
    peter.create("My new string");
    expect(peter.search_("123")).to.equal("This is a valid string");
  }); 
}); 

describe ("The delete function", function() {

    it('should accept only an integer', function() {
      var peter  = new notesapp('Peter John');
    expect(peter.delete_(2)).to.equal("This is a valid number");
  });

});

