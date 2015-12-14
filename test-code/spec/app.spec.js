describe("Coach", function() {
  it("should recognize a valid program", function() { 
      var value = Coach.start("easy");
      expect(value).toBe(true);
  });
  it("should recognize an invalid program", function() {  
      var value = Coach.start("difficult");
      expect(value).toBe(false);
  });   
  it("should recognize an invalid activity", function() { 
      var value = Coach.track("tennis",1);
      expect(value).toBe(null);
  });  
  it("should calcolate burnt calories for a valid activity", function() { 
      var value = Coach.track("bike",2);
      expect(value).toBe(200);
  });  
  it("should return progress", function() { 
      var value = Coach.start("easy");
      Coach.track("walk",1);
      Coach.track("run",2);
      var value = Coach.checkProgress();
      expect(value).toBe(350*100/500);
  });  
    
});
