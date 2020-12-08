// Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

// The first name will come from the month, and the last name will come from the last digit of the date:

// Month -> first name

// January -> "The Evil"
// February -> "The Vile"
// March -> "The Cruel"
// April -> "The Trashy"
// May -> "The Despicable"
// June -> "The Embarrassing"
// July -> "The Disreputable"
// August -> "The Atrocious"
// September -> "The Twirling"
// October -> "The Orange"
// November -> "The Terrifying"
// December -> "The Awkward"
// Last digit of date -> last name

// 0 -> "Mustache"
// 1 -> "Pickle"
// 2 -> "Hood Ornament"
// 3 -> "Raisin"
// 4 -> "Recycling Bin"
// 5 -> "Potato"
// 6 -> "Tomato"
// 7 -> "House Cat"
// 8 -> "Teaspoon"
// 9 -> "Laundry Basket"
// The returned value should be a string in the form of "First Name Last Name".

// For example, a birthday of November 18 would return "The Terrifying Teaspoon"

function getVillainName(birthday) {
  let Month = birthday.getMonth() //May
  let Day = birthday.getDate() + ''
  Day = Day.slice(-1)//3

  let m = ["Evil", "Vile", "Cruel", "Trashy", "Despicable", "Embarrassing", "Disreputable", "Atrocious", "Twirling", "Orange", "Terrifying", "Awkward"];
  let d = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  //split up the sring month and day.

    return 'The ' +  m[Month] + ' ' + d[Day]
  }


//may 3
console.log(getVillainName(new Date("May 3")))
console.log(getVillainName(new Date("March 3")))
console.log(getVillainName(new Date("January 1")))  //, "The Despicable Raisin", "Expected result: The Despicable Raisin; Your result: "+getVillainName(new Date("May 13")) );
