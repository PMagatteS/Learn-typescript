// Enums are data structures of constant length that hold a set of constant values.
// We can define them using the enum keyword
enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday, 
    Saturday,
    Sunday
  };
  
console.log(Week[3]);


// We can set the value of the first numeric enum and have it auto increment from that
enum Week2 {
    Monday= 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday, 
    Saturday,
    Sunday
  };

console.log(Week2.Sunday);


// They can also contain string as value 

enum FrenchWeek {
    Monday = "Lundi",
    Tuesday = "Mardi",
    Wednesday = "Mercredi",
    Thursday = "Jeudi",
    Friday = "Vendredi", 
    Saturday = "Samedi",
    Sunday = "Dimanche"
  };

console.log(FrenchWeek.Wednesday);
