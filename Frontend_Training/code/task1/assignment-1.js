function printType(value) {
    console.log(value, "=>", typeof value);
  }
  printType("Hello"); 
  printType(100);       
  printType(true);             
  printType(undefined);        
  printType(null);             
  printType({ name: "Sakshi" });
  printType([1, 2, 3]);        
  printType(function () {});   
  