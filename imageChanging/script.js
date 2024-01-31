'use strict';

// //************* */
// /*challenge 3
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// */

// // const dolphinsScore = (96 + 108 + 89) / 3;
// // const koalasScore = (88 + 91 + 110) / 3;

// // const dolphinsScore = (97 + 112 + 101) / 3;
// // const koalasScore = (109 + 95 + 123) / 3;

// // console.log(
// //   `dolphins avrage score is ${dolphinsScore} and koala is ${koalasScore}`
// // );

// // if (dolphinsScore < 100 && koalasScore < 100) {
// //   console.log(`no winner`);
// // } else if (dolphinsScore === koalasScore) {
// //   console.log(`teams are draw`);
// // } else if (dolphinsScore > koalasScore) {
// //   console.log(`dolohine team is winner`);
// // } else {
// //   console.log(`koala team is winner`);
// // }
// //************* */
// // Coding Challenge #4

// // Steven wants to build a very simple tip calculator for whenever he goes eating in a
// // restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// // 300. If the value is different, the tip is 20%.
// // Your tasks:
// // 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// // this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// // start with an if/else statement, and then try to convert it to a ternary
// // operator!)
// // 2. Print a string to the console containing the bill value, the tip, and the final value
// // (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// // 316.25”
// // Test data:
// // § Data 1: Test for bill values 275, 40 and 430
// // Hints:
// // § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// // § Value X is between 50 and 300, if it's >= 50 && <= 300 �

// // const bill = 430;
// // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // console.log(`the tip is ${tip}`);

// /************************ */
// /************************ */

// // JavaScript Fundamentals – Part 2
// // Coding Challenge #1
// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// // gymnastics discipline, which works differently.
// // Each team competes 3 times, and then the average of the 3 scores is calculated (so
// // one average score per team).
// // A team only wins if it has at least double the average score of the other team.
// // Otherwise, no team wins!
// // Your tasks:
// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams
// // 3. Create a function 'checkWinner' that takes the average score of each team
// // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// // to the console, together with the victory points, according to the rule above.
// // Example: "Koalas win (30 vs. 13)"
// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// // Data 2
// // 5. Ignore draws this time
// // Test data:
// // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// // Hints:
// // § To calculate average of 3 values, add them all together and divide by 3
// // § To check if number A is at least double number B, check for A >= 2 * B.
// // Apply this to the team's average scores �

// // const calcAverage = (teamName, score1, score2, score3) => {
// //   teamAvrage = (score1 + score2 + score3) / 3;
// //   console.log(`average of ${teamName} is ${teamAvrage}`);
// //   return teamAvrage;
// // };
// // //Data 1
// // let avgDolphines = calcAverage("dolphinTeame", 44, 23, 71);
// // let avgKolas = calcAverage("koalaTeame", 65, 54, 49);

// // function checkWinner(avgDolphines, avgKolas) {
// //   if (avgDolphines >= avgKolas * 2) {
// //     console.log(`winner is Dolphine team (${avgDolphines} vs ${avgKolas})`);
// //   } else if (avgKolas >= avgDolphines * 2) {
// //     console.log(`winner is Koala team (${avgKolas} vs ${avgDolphines})`);
// //   } else {
// //     console.log("No Winner...");
// //   }
// // }

// // checkWinner(avgDolphines, avgKolas);
// // // //Data 2
// // avgDolphines = calcAverage("dolphinTeame", 85, 54, 41);
// // avgKolas = calcAverage("koalaTeame", 23, 34, 27);

// // checkWinner(avgDolphines, avgKolas);

// //************************* */
// //************************* */

// // Coding Challenge #2
// // Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// // the bill if the bill value is between 50 and 300, and if the value is different, the tip is  20%.
// // Your tasks:

// // 1. Write a function 'calcTip' that takes any bill value as an input and returns
// // the corresponding tip, calculated based on the rules above (you can check out
// // the code from first tip calculator challenge if you need to). Use the function
// // type you like the most. Test the function using a bill value of 100

// // 2. And now let's use arrays! So create an array 'bills' containing the test data
// // below
// // 3. Create an array 'tips' containing the tip value for each bill, calculated from
// // the function you created before
// // 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// // Test data: 125, 555 and 44
// // Hint: Remember that an array needs a value in each position, and that value can
// // actually be the returned value of a function! So you can just call a function as array
// // values (so don't store the tip values in separate variables first, but right in the new
// // array) �

// // const calcTip = (bills) => {
// //   return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// //   console.log(result);
// // };

// // //calcTip(125);
// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // //console.log(tips);
// // console.log(bills, tips);

// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(total);

// //mini object challenge

// // const jonas = {
// //   firstName: "jonas",
// //   lastName: "schmitman",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Mecheal", "joe", "bob"],
// //   driverLicense: false,

// //   calcAge: function () {
// //     this.age = 2037 - this.birthYear;
// //     return this.age;
// //   },
// //   getsummary: function () {
// //     return `${this.firstName} has ${this.age} years old ${
// //       this.job
// //     } and he has ${this.driverLicense ? "a" : "not"} driver Lisence`;
// //   },
// // };

// // console.log(jonas.calcAge());
// // console.log(jonas.age);
// // console.log(
// //   `${jonas.firstName} has ${jonas.friends.length} freinds ,and his best friend is ${jonas.friends[0]}`
// // );

// // console.log(jonas.getsummary());

// ////******************
// ///////********** */ */
// /*
// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall
// */
// // const mark = {
// //   fullName: "Mark Miller",
// //   mass: 78,
// //   height: 1.69,

// //   calcBMI: function () {
// //     this.bmi = this.mass / this.height ** 2;
// //     return this.bmi;
// //   },
// // };

// // const john = {
// //   fullName: "John Smith",
// //   mass: 92,
// //   height: 1.95,

// //   calcBMI: function () {
// //     this.bmi = this.mass / this.height ** 2;
// //     return this.bmi;
// //   },
// // };
// // console.log(john.calcBMI(), mark.calcBMI());

// // console.log(
// //   mark.bmi > john.bmi
// //     ? `Mark's BMI ${mark.bmi} is higher than John's ${john.bmi}`
// //     : `John's ${john.bmi} is higher than Mark's BMI ${mark.bmi}`
// // );

// //************************ */

// /***************** */
// /****Coding Challenge #4  */
// /***************** */
// /*

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// */

// // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // const tips = [];
// // const totals = [];

// // const calcTip = function (bills) {
// //   return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// // };

// // for (let i = 0; i < bills.length; i++) {
// //   const tip = calcTip(bills[i]);
// //   tips.push(tip);
// //   totals.push(tip + bills[i]);
// // }
// // //console.log(bills, tips, totals);

// // let sum = 0;
// // let avg = 0;
// // const calcAverage = function (arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   avg = sum / arr.length;
// // };
// // calcAverage(bills);
// // console.log(sum, avg);
// // calcAverage(tips);
// // console.log(sum, avg);
// // calcAverage(totals);
// // console.log(sum, avg);

// //********* */

// /*
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// */

// // let result;
// // // const temprature = [17, 21, 23];

// // const temprature = [12, 5, -5, 0, 4];

// // const printForecast = function (arr) {
// //   let str = '';
// //   for (let i = 0; i < arr.length; i++) {
// //     str += `${arr[i]} ºC in ${i + 1} days ... `;
// //   }
// //   console.log('...' + str);
// // };

// // printForecast(temprature);
// //********* */

// //********* */
// //********* */

// // Data needed for a later exercise
// /*
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:

// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// */
// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// /*
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// */

// // const [players1, players2] = game.players;
// //console.log(players1, players2);
// /*
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// */
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// /*
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// */
// // const allPlayers = players1.concat(players2);
// // console.log(allPlayers);

// /*
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// */

// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// /*
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// */
// //1
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;

// //better way:
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;

// // console.log(team1, draw, team2);

// /*
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// */

// // const printGoals = function (...players) {
// //   //let total = 0;
// //   //for (let i = 0; i < game.scored.length; i++) {
// //   //game.scored[i] == playerName[i] ? (total += 1) : 0;

// //   console.log(`${players.length} goals`);
// // };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// //printGoals(...game.scored);

// /*
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// */

// //team1 < team2 && console.log('team1 is the winner');

// /*
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// */

// /*
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// */
// // console.log(`-----Part 1-----`);

// // for (const [i, player] of game.scored.entries()) {
// //   console.log(`Goal ${i} :${player}`);
// // }

// /*
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// */
// // console.log(`------Part 2 ------`);
// // const odds = Object.values(game.odds);
// // let avg = 0;
// // for (const odd of odds) avg += odd;
// // avg /= odds.length;

// // console.log(avg);

// /*
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// Get the team names directly from the game object, don't hardcode them

// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

// team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',

// odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// */

// // console.log(`-----part 3-----`);

// // for (const [team, odd] of Object.entries(game.odds)) console.log(team, odd);

// // console.log(`Odd of victory ${team}:  ${odd}`);

// // const resName = Object.keys(game.scored);
// // const resValues = Object.values(game.scored);
// // // console.log(resName, resValues);
// // for (const x of resName) {
// //   console.log(`Goal ${x} :${resValues[x]}`);
// // }

// /*
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// */

// // console.log(`-----part 4-----`);

// // console.log(scorers);
// // console.log(game.scored);

// /* Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// */

// // const gameEvents = new Map([
// //   [17, '⚽ GOAL'],
// //   [36, '� Substitution'],
// //   [47, '⚽ GOAL'],
// //   [61, '� Substitution'],
// //   [64, '� Yellow card'],
// //   [69, '� Red card'],
// //   [70, '� Substitution'],
// //   [72, '� Substitution'],
// //   [76, '⚽ GOAL'],
// //   [80, '⚽ GOAL'],
// //   [92, '� Yellow card'],
// // ]);

// // /* 1 */
// // console.log(`---part 1----`);
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);
// // /*2*/

// // gameEvents.delete(64);
// // console.log(gameEvents);
// // /*3*/
// // const time = [...gameEvents.keys()].pop();
// // console.log(`An event happened, on
// // average, every ${time / gameEvents.size} minutes`);
// // /*4*/

// // for (const [min, event] of gameEvents) {
// //   const half = min < 46 ? 'FIRST' : 'SECOND';
// //   console.log(`[${half} HALF] ${min}: ${event}`);
// // }

// /********** */

// // const gameEvents = new Map([
// //   [17, '⚽ GOAL'],
// //   [36, '� Substitution'],
// //   [47, '⚽ GOAL'],
// //   [61, '� Substitution'],
// //   [64, '� Yellow card'],
// //   [69, '� Red card'],
// //   [70, '� Substitution'],
// //   [72, '� Substitution'],
// //   [76, '⚽ GOAL'],
// //   [80, '⚽ GOAL'],
// //   [92, '� Yellow card'],
// // ]);

// // /* 1 */
// // console.log(`---part 1----`);
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);
// // /*2*/

// // gameEvents.delete(64);
// // console.log(gameEvents);
// // /*3*/
// // const time = [...gameEvents.keys()].pop();
// // console.log(`An event happened, on
// // average, every ${time / gameEvents.size} minutes`);
// // /*4*/

// // for (const [min, event] of gameEvents) {
// //   const half = min < 46 ? 'FIRST' : 'SECOND';
// //   console.log(`[${half} HALF] ${min}: ${event}`);
// // }

// /*******
//  Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �

//  */
// // document.body.append(document.createElement('textarea'));
// // document.body.append(document.createElement('button'));

// // document.querySelector('button').addEventListener('click', function () {
// //   const text = document.querySelector('textarea').value;
// //   const rows = text.split('\n');
// //   for (const [i, row] of rows.entries()) {
// //     const [first, socund] = row.toLowerCase().trim().split('_');
// //     const output = `${first}${socund.replace(
// //       socund[0],
// //       socund[0].toUpperCase()
// //     )} `;

// //     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
// //   }
// // });

// /*
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// */

// /*
// Coding Challenge #1-133
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �
// GOOD LUCK �
//  const poll = {
//  question: "What is your favourite programming language?",
//  options: ["0: JavaScript", "1: Python", "2: Rust", "3:
//  C++"],
//  // This generates [0, 0, 0, 0]. More in the next section!
//  answers: new Array(4).fill(0),
//  }
//  */

// /* 1
//  1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// */

// // const poll = {
// //   question: 'What is your favourite programming language?',
// //   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
// //   // This generates [0, 0, 0, 0]. More in the next section!
// //   answers: new Array(4).fill(0),
// //   egisterNewAnswer() {
// //     const answer = Number(
// //       prompt(
// //         `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
// //       )
// //     );
// //     console.log(answer);
// //   },
// // };

// // poll.egisterNewAnswer();

// //poll.options.forEach((opt, i) => console.log(opt));

// /*************************/
// /* insert n specific place an array */
// // const insert = (arr, index, newItem) => [
// //   // part of the array before the specified index
// //   ...arr.slice(0, index),
// //   // inserted item
// //   newItem,
// //   // part of the array after the specified index
// //   ...arr.slice(index),
// // ];

// // const result = insert(poll.answers, val, 25);

// // console.log(result);

// /*
// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

//  */
// /* 1 */
// // (function () {
// //   const header = document.querySelector('h1');
// //   header.style.color = 'red';
// //   header.addEventListener('click', function () {
// //     header.style.color = 'blue';
// //   });
// // })();

// /*
// Working With Arrays
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far
// */

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];
// const juliaArr = [9, 16, 6, 8, 3];
// const kateArr = [10, 5, 6, 1, 4];

// const checkDogs = function (juliaArr, kateArr) {
//   //newJuliArr.pop(0);
//   const newJuliArr = juliaArr.slice();
//   newJuliArr.splice(-1);
//   newJuliArr.shift(0);
//   // or
//   //  newJuliArr.splice(0,1);
//   //  newJuliArr.splice(-2);
//   //or
//   //newJuliArr.slice(1,3);
//   return newJuliArr.concat(kateArr);
// };

// const displayDogs = function (arr) {
//   arr.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog no ${i + 1} is an adult ,and is ${dog} years old`);
//     } else {
//       console.log(`Dog no ${i + 1} is a puppy 🐶 ,and is ${dog} years old`);
//     }
//   });
// };

// const trueDogs = checkDogs(juliaArr, kateArr);
// console.log(checkDogs(juliaArr, kateArr));
// console.log(displayDogs(trueDogs));

/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
// const ages = [5, 2, 4, 1, 15, 8, 3];
// const ages = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);

//   const finaleAge = humanAges.filter(age => age >= 18);
//   console.log(finaleAge);

//   const avgAge =
//     finaleAge.reduce((acc, age) => acc + age, 0) / finaleAge.length;
//   console.log(avgAge);
// };

// //calcAverageHumanAge(ages);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

/*
Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little.
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �

Hints:
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion
*/
// //Test data:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// /* 1  */

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// /* 2  */
// const dogSarah = dogs.find(d => d.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating ${
//     dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little'
//   }`
// );

// /* 3  */
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// /* 4  */

// const str = `${ownersEatTooMuch.join(
//   ' and '
// )}'s dogs eat too much and ${ownersEatTooLittle.join(
//   ' and '
// )}'s dogs eat too little`;
// console.log(str);
// /* 5 */
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// /* 6 */
// const checkEatingOk = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOk));

// /* 7 */
// console.log(dogs.filter(checkEatingOk));

// /* 8 */
// const copyDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(copyDogs);

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 
*/

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bmw, mercedes);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

/*

Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK �
*/

// class CarlCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log((this.speed += 10));
//   }

//   break() {
//     console.log((this.speed -= 5));
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const ford = new CarlCl('Ford', 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.speedUS = 50;
// console.log(ford);

/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 
*/

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.break = function () {
//   console.log((this.speed -= 5));
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);

// /* 2 */
// tesla.chargeBattery(90);
// console.log(tesla);

// /* 3 */
// tesla.accelerate(20);
// console.log(tesla);
// tesla.chargeBattery(22);
// console.log(tesla);

/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 
*/

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.break = function () {
//   console.log((this.speed -= 5));
// };

// class EV extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//   }
// }

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);

// /* 2 */
// tesla.chargeBattery(90);
// console.log(tesla);

// /* 3 */
// tesla.accelerate(20);
// console.log(tesla);
// tesla.chargeBattery(22);
// console.log(tesla);

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/* 1 */
/*PART 1
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
*/
////////////////////////////
////////////////////////////
////////////////////////////
/*
Coding Challenge #2
For this challenge you will actually have to watch the video! Then, build the image 
loading functionality that I just showed you on the screen.
Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by 
yourself. Pretend you're working on your own �
PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input. 
This function returns a promise which creates a new image (use 
document.createElement('img')) and sets the .src attribute to the 
provided image path
2. When the image is done loading, append it to the DOM element with the 
'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image (listen for 
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution
PART 2
4. Consume the promise using .then and also add an error handler
5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier
6. After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that �)
7. After the second image has loaded, pause execution for 2 seconds again
8. After the 2 seconds have passed, hide the current image
Test data: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to “Fast 3G” in the dev tools Network tab, 
otherwise images load too fast
GOOD LUCK �
*/

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image Not Found'));
    });
  });
};

let curImg;

createImage('img/img-1.jpg')
  .then(img => {
    curImg = img;
    console.log('img 1');
    return wait(2);
  })
  .then(img => {
    curImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    curImg = img;
    console.log('img 2');
    return wait(2);
  })
  .then(img => {
    curImg.style.display = 'none';
  })
  .catch(err => console.log(err));
