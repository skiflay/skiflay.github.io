//https://www.geeksforgeeks.org/inheritance-in-java/  
// Java program to illustrate the
// concept of inheritance
//  exports.MountainBike = MountainBike ;
// base class
 const Bicycle = {
    // the Bicycle class has two fields
   gear: 1,
    speed: 0,
 
    // the Bicycle class has one constructor
      function( gear, speed){
        this.gear = gear;
        this.speed = speed;
      },
     // the Bicycle class has three methods
      applyBrake: function(decrement){
          return speed -= decrement;
      },

       speedUp: function(increment){
       return speed += increment;
    }
    } 

 
// derived class

const MountainBike= {
     __proto__: Bicycle,
    // the MountainBike subclass adds one more field
    gear:3,
    speed:2,
    seatHeight:1,
     
    // the MountainBike subclass has one constructor
    //  setSeatHeight: function( startHeight){
    //     // invoking base-class(Bicycle) constructor
    //     this.seatHeight = startHeight; 
    // },
 
    // the MountainBike subclass adds one more method
     setHeight: function(newValue){
        newValue = this.seatHeight;
    },
 
    // overriding toString() method
    // of Bicycle to print more info
    toString: function(){
        return (
            "No of gears are " + this.gear + "\n" + "speed of bicycle is " + this.speed 
            + "\nseat height is " + this.newValue
            )        
    }
}
 
// driver class

  console.log(MountainBike.toString(3, 100, 25));
        