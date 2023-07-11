"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var exec = require('node:child_process').exec;
/* Get Input from console and display required excercise */
rl.question('Enter Question Number in Between (1) to (45) ==> ', function (answer) {
    switch (answer.toLowerCase()) {
        case '1':
            /* Exercise 1 */
            /* Problem Defenation:
            Install and check Node.js, TypeScript and VS Code on your computer.
            */
            /* Solution of Problem */
            // run the `code --v` command using exec to check the version of VS Code or not
            exec('code --v ', function (err, output) {
                // once the command has completed, the callback function is called
                if (err) {
                    // log and return if we encounter an error
                    console.error("could not execute command: ", err);
                    return;
                }
                // log the output received from the command
                console.log("Visual Studio Code is installed");
                console.log("Output: \n", output);
            });
            // run the `node -v` command using exec to check the version of Node JS installed or Not
            exec('node -v ', function (err, output) {
                // once the command has completed, the callback function is called
                if (err) {
                    // log and return if we encounter an error
                    console.error("could not execute command: ", err);
                    return;
                }
                // log the output received from the command
                console.log("Node Js is installed");
                console.log("Output: \n", output);
            });
            // run the `tsc -v` command using exec to check the version of Tupe Script installed or not
            exec('tsc -v ', function (err, output) {
                // once the command has completed, the callback function is called
                if (err) {
                    // log and return if we encounter an error
                    console.error("could not execute command: ", err);
                    return;
                }
                // log the output received from the command
                console.log("TypeScript is installed");
                console.log("Output: \n", output);
            });
            break;
        case '2':
            /* Exercise 2 */
            /* Problem Defenation:
                Personal Message: Store a person’s name in a variable,
                and print a message to that person. Your message should be simple,
                such as, “Hello Eric, would you like to learn some Python today?”
            */
            /* Solution of Problem */
            var personName = "Fawwad";
            console.log("Hello ".concat(personName, ", would you like to solve some PIAIC assingment today?"));
            break;
        case '3':
            /* Exercise 3 */
            /* Problem Defenation:
                Name Cases: Store a person’s name in a variable,
                and then print that person’s name in
                lowercase, uppercase, and titlecase.
            */
            /* Solution of Problem */
            var pName = "Fawwad";
            // Convert to lowercase
            var lowercaseName = pName.toLowerCase();
            console.log("Lowercase Name: ".concat(lowercaseName));
            // Convert to uppercase
            var uppercaseName = pName.toUpperCase();
            console.log("Uppercase Name: ".concat(uppercaseName));
            // Convert to titlecase
            var titlecaseName = pName.charAt(0).toUpperCase() + pName.slice(1).toLowerCase();
            console.log("Titlecase Name: ".concat(titlecaseName));
            break;
        case '4':
            // List of famous quotes and their authors
            var quotes = [
                { quote: "I do not believe in taking the right decision, I take a decision and make it right.", author: "Quaid e Azam" },
                { quote: " The storm in the West made Muslims Muslims. Pearls are produced in abundance from the very buffeting of the sea", author: "Allama Iqbal" },
            ];
            // Select a quote 1 
            var selectedQuote = quotes[0];
            // Print the quote and its author
            console.log("\n ".concat(selectedQuote.author, " once said,\n \"").concat(selectedQuote.quote, "\""));
            // Select a quote 2 
            var selectedQuote2 = quotes[1];
            // Print the quote and its author2
            console.log("\n".concat(selectedQuote2.author, " once said,\n \"").concat(selectedQuote2.quote, "\""));
            break;
        case '5':
            /* Exercise 5 */
            /* Problem Defenation:
               Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
               in a variable called famous_person. Then compose your message and store it in a
               new variable called message. Print your message.
            */
            /* Solution of Problem */
            var famous_person = "Sir Zia Khan";
            var message = "The famous person is ".concat(famous_person, ".");
            console.log(message);
            break;
        case '6':
            /* Exercise 6 */
            /* Problem Defenation:
              Stripping Names: Store a person’s name, and include some whitespace characters
              at the beginning and end of the name. Make sure you use each character combination,
              "\t" and "\n", at least once. Print the name once, so the whitespace around
              the name is displayed. Then print the name after striping the white spaces.
           */
            /* Solution of Problem */
            var nameWithWhitespace = "\t   John Doe  \n";
            console.log("Name with whitespace: \"".concat(nameWithWhitespace, "\""));
            var nameStripped = nameWithWhitespace.trim();
            console.log("Name stripped of whitespace: \"".concat(nameStripped, "\""));
            break;
        case '7':
            /* Exercise 7 */
            /* Problem Defenation:
               Number Eight: Write addition, subtraction, multiplication, and division operations
               that each result in the number 8. Be sure to enclose your operations
               in print statements to see the results.
            */
            /* Solution of Problem */
            console.log("Addition: " + (5 + 3));
            console.log("Subtraction: " + (15 - 7));
            console.log("Multiplication: " + (4 * 2));
            console.log("Division: " + (16 / 2));
            break;
        case '8':
            /* Exercise 8 */
            /* Problem Defenation:
            You should create four lines that look like this:
            console.log(5 + 3)
            Your output should simply be four lines with the number 8 appearing once on each line.
               
            */
            /* Solution of Problem */
            break;
        case '9':
            /* Exercise 9 */
            /* Problem Defenation:

            Favorite Number: Store your favorite number in a variable.
             Then, using that variable, create a message that reveals your favorite number.
             Print that message.
               
            */
            var favoriteNumber = 42;
            var msg = "My favorite number is ".concat(favoriteNumber, ".");
            console.log(msg);
            /* Solution of Problem */
            break;
        case '10':
            /* Exercise 10 */
            /* Problem Defenation:
            Adding Comments: Choose two of the programs you’ve written, and add at least one comment
            to each. If you don’t have anything specific to write because your programs are too
            simple at this point, just add your name and the current date at the top of
            each program file. Then write one sentence describing what the program does.
             */
            /* Solution of Problem */
            // Author: Jane Smith
            // Date: 2023-07-09
            // Description: This program checks if a number is positive or negative.
            var number = -7;
            var newmsg = void 0;
            if (number >= 0) {
                newmsg = "The number is positive.";
            }
            else {
                newmsg = "The number is negative.";
            }
            console.log(newmsg);
            break;
        case '11':
            /* Exercise 11 */
            /* Problem Defenation:
            Names: Store the names of a few of your friends in a array called names.
            Print each person’s name by accessing each element in the list, one at a time.
               
            */
            /* Solution of Problem */
            var names = ["Imran Khan", "Nawaz Sharif", "Bilawal Bhutto", "Altaf Hussain", "Arif Alvi"];
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                console.log(name_1);
            }
            break;
        case '12':
            /* Exercise 12 */
            /* Problem Defenation:
               Greetings: Start with the array you used in Exercise 11,
               but instead of just printing each person’s name, print a message to them.
               The text of each message should be the same, but each message should be
               personalized with the person’s name.
            */
            /* Solution of Problem */
            var names2 = ["Imran Khan", "Nawaz Sharif", "Bilawal Bhutto", "Altaf Hussain", "Arif Alvi"];
            var message2 = "Hello, ";
            for (var _a = 0, names2_1 = names2; _a < names2_1.length; _a++) {
                var name2 = names2_1[_a];
                console.log(message2 + name2 + "!");
            }
            break;
        case '13':
            /* Exercise 13 */
            /* Problem Defenation:
               Your Own Array: Think of your favorite mode of transportation, such as a motorcycle
                or a car, and make a list that stores several examples.
                Use your list to print a series of statements about these items,
                 such as “I would like to own a Honda motorcycle.”

            */
            /* Solution of Problem */
            var transportation = ["motorcycle", "car", "bicycle", "train", "boat"];
            for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
                var mode = transportation_1[_b];
                console.log("I would like to own a " + mode + ".");
            }
            break;
        case '14':
            /* Exercise 14 */
            /* Problem Defenation:
            Guest List: If you could invite anyone, living or deceased, to dinner,
            who would you invite? Make a list that includes at least three people
            you’d like to invite to dinner. Then use your list to print a message to each person,
            inviting them to dinner.
            */
            /* Solution of Problem */
            var guests = ["Mr. Zia Khan", "Mr. Danial Nagori", "Mr. Arif Alvi"];
            for (var _c = 0, guests_1 = guests; _c < guests_1.length; _c++) {
                var guest = guests_1[_c];
                console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
            }
            break;
        case '15':
            /* Exercise 15 */
            /* Problem Defenation:
            Changing Guest List: You just heard that one of your guests can’t make the dinner,
            so you need to send out a new set of invitations. You’ll have to think of someone
            else to invite.
            • Start with your program from Exercise 14. Add a print statement at the end of
              your program stating the name of the guest who can’t make it.
            • Modify your list, replacing the name of the guest who can’t make it
              with the name of the new person you are inviting.
            • Print a second set of invitation messages, one for each person
              who is still in your list.
               
            */
            /* Solution of Problem */
            var guests2 = ["Mr. Zia Khan", "Mr. Danial Nagori", "Mr. Arif Alvi"];
            var unableToAttend = "Mr. Arif Alvi";
            var newInvitee = "Syed Asif Ali Zardari";
            console.log(unableToAttend + " can't make it to the dinner.");
            var indexOfUnableToAttend = guests2.indexOf(unableToAttend);
            if (indexOfUnableToAttend !== -1) {
                guests2[indexOfUnableToAttend] = newInvitee;
            }
            for (var _d = 0, guests2_1 = guests2; _d < guests2_1.length; _d++) {
                var guest = guests2_1[_d];
                console.log("Dear " + guest + ", you are cordially invited to dinner. Please join us on Saturday evening.");
            }
            break;
        case '16':
            /* Exercise 16 */
            /* Problem Defenation:
               More Guests: You just found a bigger dinner table, so now more space is available.
               Think of three more guests to invite to dinner.
                • Start with your program from Exercise 15. Add a print statement to the
                  end of your program informing people that you found a bigger dinner table.
                • Add one new guest to the beginning of your array.
                • Add one new guest to the middle of your array.
                • Use append() to add one new guest to the end of your list.
                • Print a new set of invitation messages, one for each person in your list.
            */
            /* Solution of Problem */
            var guests4 = ["Mr. Zia Khan", "Mr. Danial Nagori", "Mr. Arif Alvi"];
            var unableToAttend4 = "Mr. Arif Alvi";
            var newInvitee4 = "Syed Asif Ali Zardari";
            console.log(unableToAttend4 + " can't make it to the dinner.");
            var indexOfUnableToAttend4 = guests4.indexOf(unableToAttend4);
            if (indexOfUnableToAttend4 !== -1) {
                guests4.splice(indexOfUnableToAttend4, 1, newInvitee4);
            }
            for (var _e = 0, guests4_1 = guests4; _e < guests4_1.length; _e++) {
                var guest4 = guests4_1[_e];
                console.log("Dear " + guest4 + ", you are cordially invited to dinner. Please join us on Saturday evening.");
            }
            break;
        case '17':
            /* Exercise 17 */
            /* Problem Defenation:
               Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
               for the dinner, and you have space for only two guests.
                • Start with your program from Exercise 16. Add a new line that prints a message
                  saying that you can invite only two people for dinner.
                • Remove guests from your list one at a time until only two names remain in your list.
                  Each time you pop a name from your list, print a message to that person
                  letting them know you’re sorry you can’t invite them to dinner.
                • Print a message to each of the two people still on your list,
                  letting them know they’re still invited.
                • Remove the last two names from your list, so you have an empty list.
                  Print your list to make sure you actually have an empty list at the
                  end of your program.
            */
            /* Solution of Problem */
            var guests5 = ["Arif Alvi", "Kamran Tesori", "Baleeg Ur Rehman"];
            var maxGuests = 2;
            console.log("Apologies, but we can only invite " + maxGuests + " people for dinner.");
            while (guests5.length > maxGuests) {
                var removedGuest = guests5.pop();
                console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner.");
            }
            for (var _f = 0, guests5_1 = guests5; _f < guests5_1.length; _f++) {
                var guest = guests5_1[_f];
                console.log("Dear " + guest + ", you are still invited to dinner.");
            }
            console.log("Final guest list: " + guests5);
            break;
        case '18':
            /* Exercise 18 */
            /* Problem Defenation:
               Seeing the World: Think of at least five places in the world you’d like to visit.
                • Store the locations in a array. Make sure the array is not in alphabetical order.
                • Print your array in its original order.
                • Print your array in alphabetical order without modifying the actual list.
                • Show that your array is still in its original order by printing it.
                • Print your array in reverse alphabetical order without changing the
                  order of the original list.
                • Show that your array is still in its original order by printing it again.
                • Reverse the order of your list. Print the array to show that its order has changed.
                • Reverse the order of your list again. Print the list to show it’s back
                  to its original order.
                • Sort your array so it’s stored in alphabetical order.
                  Print the array to show that its order has been changed.
                • Sort to change your array so it’s stored in reverse alphabetical order.
                  Print the list to show that its order has changed.
            */
            /* Solution of Problem */
            var placesToVisit = ["Karachi", "Lahore", "Peshawar", "Quatta", "Muzaffarabad"];
            console.log("Original order:", placesToVisit);
            console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
            console.log("Original order (still intact):", placesToVisit);
            console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
            console.log("Original order (still intact):", placesToVisit);
            placesToVisit.reverse();
            console.log("Reversed order:", placesToVisit);
            placesToVisit.reverse();
            console.log("Back to original order:", placesToVisit);
            console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
            console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
            break;
        case '19':
            /* Exercise 19 */
            /* Problem Defenation:
                Working with one of the programs from Exercises 14 through 18,
                 print a message indicating the number of people you are inviting to dinner.
            */
            /* Solution of Problem */
            var guests6 = ["Gen Musharaf", "Gen Bajwa", "Gen Raheel Shareef", "Gen Zia", "Gen Ayub Khan"];
            var numGuests = guests6.length;
            console.log("You are inviting " + numGuests + " people to dinner.");
            break;
        case '20':
            /* Exercise 20 */
            /* Problem Defenation:
               Think of something you could store in a array. For example,
                you could make a list of mountains, rivers, countries, cities, languages,
                or anything else you’d like. Write a program that creates a list containing
                these items.
            */
            /* Solution of Problem */
            var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Matterhorn", "Denali"];
            console.log(mountains);
            break;
        case '21':
            // Create country objects
            var usa = {
                name: "Pakistan",
                capital: "Islamabad",
                population: 331002651,
            };
            var canada = {
                name: "Canada",
                capital: "Ottawa",
                population: 37742154,
            };
            var australia = {
                name: "Australia",
                capital: "Canberra",
                population: 25788216,
            };
            // Print the country objects
            console.log(usa);
            console.log(canada);
            console.log(australia);
            break;
        case '22':
            /* Exercise 22 */
            /* Problem Defenation:
             Intentional Error: If you haven’t received an array index error in one of your programs yet,
              try to make one happen. Change an index in one of your programs to produce an index error.
               Make sure you correct the error before closing the program.
            */
            /* Solution of Problem */
            var numbers = [1, 2, 3, 4, 5];
            // Intentionally accessing an invalid index
            console.log(numbers[10]); // This will produce an index error
            // Correcting the error
            console.log(numbers[2]); // Accessing a valid index
            // Closing the program
            console.log("Program finished successfully.");
            break;
        case '23':
            /* Exercise 23 */
            /* Problem Defenation:
               Conditional Tests: Write a series of conditional tests. Print a statement describing
               each test and your prediction for the results of each test. Your code should look
               something like this:
                    let car = 'subaru';
                    console.log("Is car == 'subaru'? I predict True.")
                    console.log(car == 'subaru')
                • Look closely at your results, and make sure you understand why each line evaluates to
                  True or False.
                • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests
                  evaluate to False.
            */
            /* Solution of Problem */
            var num = 7;
            console.log("Is number equal to 7? I predict True.");
            console.log(num === 7);
            console.log("Is number not equal to 5? I predict True.");
            console.log(num !== 5);
            console.log("Is number greater than 3? I predict True.");
            console.log(num > 3);
            console.log("Is number less than or equal to 10? I predict True.");
            console.log(num = 10);
            console.log("Is number multiplied by 2 equal to 14? I predict True.");
            console.log(num * 2 === 14);
            console.log("Is number divided by 3 equal to 2? I predict False.");
            console.log(num / 3 === 2);
            console.log("Is number greater than 10? I predict False.");
            console.log(num > 10);
            console.log("Is number not equal to 7? I predict False.");
            console.log(num !== 7);
            console.log("Is number less than 5? I predict False.");
            console.log(num < 5);
            console.log("Is number modulo 2 equal to 0? I predict False.");
            console.log(num % 2 === 0);
            break;
        case '24':
            /* Exercise 24 */
            /* Problem Defenation:
               More Conditional Tests: You don’t have to limit the number of tests you create to 10.
               If you want to try more comparisons, write more tests. Have at least one True and
               one False result for each of the following:
                • Tests for equality and inequality with strings
                • Tests using the lower case function
                • Numerical tests involving equality and inequality, greater than and less than,
                  greater than or equal to, and less than or equal to
                • Tests using "and" and "or" operators
                • Test whether an item is in a array
                • Test whether an item is not in a array
            */
            /* Solution of Problem */
            var string1 = 'hello';
            var string2 = 'world';
            var number1 = 5;
            var number2 = 10;
            var array = [1, 2, 3, 4, 5];
            // Tests for equality and inequality with strings
            console.log("Is string1 equal to string2? I predict False.");
            console.log(string1 === string2);
            console.log("Is string1 not equal to string2? I predict True.");
            console.log(string1 !== string2);
            // Tests using the lowercase function
            console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
            console.log(string1.toLowerCase() === 'hello');
            console.log("Is string2 in lowercase not equal to 'WORLD'? I predict True.");
            console.log(string2.toLowerCase() !== 'WORLD');
            // Numerical tests
            console.log("Is number1 less than number2? I predict True.");
            console.log(number1 < number2);
            console.log("Is number2 greater than or equal to number1? I predict True.");
            console.log(number2 >= number1);
            console.log("Is number1 plus number2 equal to 15? I predict True.");
            console.log(number1 + number2 === 15);
            console.log("Is number2 multiplied by 2 not equal to 20? I predict False.");
            console.log(number2 * 2 !== 20);
            // Tests using "and" and "or" operators
            console.log("Is number1 less than 3 and number2 greater than 8? I predict False.");
            console.log(number1 < 3 && number2 > 8);
            console.log("Is number1 less than 3 or number2 greater than 8? I predict True.");
            console.log(number1 < 3 || number2 > 8);
            // Test whether an item is in an array
            console.log("Is 3 present in the array? I predict True.");
            console.log(array.includes(3));
            console.log("Is 6 not present in the array? I predict True.");
            console.log(!array.includes(6));
            break;
        case '25':
            /* Exercise 25 */
            /* Problem Defenation:
               Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
                alien_color and assign it a value of 'green', 'yellow', or 'red'.
                • Write an if statement to test whether the alien’s color is green.
                  If it is, print a message that the player just earned 5 points.
                • Write one version of this program that passes the if test and another that fails.
                  (The version that fails will have no output.)
            */
            /* Solution of Problem */
            // Passing version
            var alien_color = 'green';
            if (alien_color === 'green') {
                console.log("Congratulations! You just earned 5 points.");
            }
            // Failing version
            alien_color = 'red';
            if (alien_color === 'green') {
                console.log("Congratulations! You just earned 5 points.");
            }
            break;
        case '26':
            /* Exercise 26 */
            /* Problem Defenation:
               Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an
               if-else chain.
                • If the alien’s color is green, print a statement that the player just earned 5 points
                  for shooting the alien.
                • If the alien’s color isn’t green, print a statement that the player just
                  earned 10 points.
                • Write one version of this program that runs the if block and another that runs
                  the else block.
            */
            // Version 1: Alien color is green
            var alien_color2 = 'green';
            if (alien_color2 === 'green') {
                console.log("Congratulations! You just earned 5 points for shooting the alien.");
            }
            else {
                console.log("Congratulations! You just earned 10 points for shooting the alien.");
            }
            // Version 2: Alien color is not green
            alien_color2 = 'red';
            if (alien_color2 === 'green') {
                console.log("Congratulations! You just earned 5 points for shooting the alien.");
            }
            else {
                console.log("Congratulations! You just earned 10 points for shooting the alien.");
            }
            /* Solution of Problem */
            break;
        case '27':
            /* Exercise 27 */
            /* Problem Defenation:
               Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
                • If the alien is green, print a message that the player earned 5 points.
                • If the alien is yellow, print a message that the player earned 10 points.
                • If the alien is red, print a message that the player earned 15 points.
                • Write three versions of this program, making sure each message is printed for the
                  appropriate color alien.
            */
            /* Solution of Problem */
            // Version 1: Alien color is green
            var alien_color3 = 'green';
            if (alien_color3 === 'green') {
                console.log("Congratulations! You just earned 5 points.");
            }
            else if (alien_color3 === 'yellow') {
                console.log("Congratulations! You just earned 10 points.");
            }
            else if (alien_color3 === 'red') {
                console.log("Congratulations! You just earned 15 points.");
            }
            // Version 2: Alien color is yellow
            alien_color3 = 'yellow';
            if (alien_color3 === 'green') {
                console.log("Congratulations! You just earned 5 points.");
            }
            else if (alien_color3 === 'yellow') {
                console.log("Congratulations! You just earned 10 points.");
            }
            else if (alien_color3 === 'red') {
                console.log("Congratulations! You just earned 15 points.");
            }
            // Version 3: Alien color is red
            alien_color = 'red';
            if (alien_color3 === 'green') {
                console.log("Congratulations! You just earned 5 points.");
            }
            else if (alien_color3 === 'yellow') {
                console.log("Congratulations! You just earned 10 points.");
            }
            else if (alien_color3 === 'red') {
                console.log("Congratulations! You just earned 15 points.");
            }
            break;
        case '28':
            /* Exercise 28 */
            /* Problem Defenation:
               Stages of Life: Write an if-else chain that determines a person’s stage of life.
               Set a value for the variable age, and then:
                • If the person is less than 2 years old, print a message that the person is a baby.
                • If the person is at least 2 years old but less than 4, print a message that
                  the person is a toddler.
                • If the person is at least 4 years old but less than 13, print a message that
                  the person is a kid.
                • If the person is at least 13 years old but less than 20, print a message that
                  the person is a teenager.
                • If the person is at least 20 years old but less than 65, print a message that
                  the person is an adult.
                • If the person is age 65 or older, print a message that the person is an elder.
            */
            /* Solution of Problem */
            var age = 30;
            if (age < 2) {
                console.log("The person is a baby.");
            }
            else if (age >= 2 && age < 4) {
                console.log("The person is a toddler.");
            }
            else if (age >= 4 && age < 13) {
                console.log("The person is a kid.");
            }
            else if (age >= 13 && age < 20) {
                console.log("The person is a teenager.");
            }
            else if (age >= 20 && age < 65) {
                console.log("The person is an adult.");
            }
            else {
                console.log("The person is an elder.");
            }
            break;
        case '29':
            /* Exercise 29 */
            /* Problem Defenation:
               Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
               if statements that check for certain fruits in your array.
               • Make a array of your three favorite fruits and call it favorite_fruits.
               • Write five if statements. Each should check whether a certain kind of fruit is in your array.
                 If the fruit is in your array, the if block should print a statement, such as You really
                 like bananas!
            */
            /* Solution of Problem */
            var favorite_fruits = ['banana', 'apple', 'strawberry'];
            if (favorite_fruits.includes('banana')) {
                console.log("You really like bananas!");
            }
            if (favorite_fruits.includes('apple')) {
                console.log("You really like apples!");
            }
            if (favorite_fruits.includes('strawberry')) {
                console.log("You really like strawberries!");
            }
            if (favorite_fruits.includes('mango')) {
                console.log("You really like mangoes!");
            }
            if (favorite_fruits.includes('orange')) {
                console.log("You really like oranges!");
            }
            break;
        case '30':
            /* Exercise 30 */
            /* Problem Defenation:
                Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine
                you are writing code that will print a greeting to each user after they log in to a website.
                Loop through the array, and print a greeting to each user:
                • If the username is 'admin', print a special greeting, such as Hello admin, would you like to
                  see a status report?
                • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
               
            */
            /* Solution of Problem */
            var usernames = ['admin', 'Eric', 'John', 'Jane', 'Sarah'];
            for (var i = 0; i < usernames.length; i++) {
                if (usernames[i] === 'admin') {
                    console.log("Hello admin, would you like to see a status report?");
                }
                else {
                    console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
                }
            }
            break;
        case '31':
            /* Exercise 31 */
            /* Problem Defenation:
                No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
                • If the list is empty, print the message We need to find some users!
                • Remove all of the usernames from your array, and make sure the correct message is printed.
            */
            /* Solution of Problem */
            var usernames1 = ['admin', 'Eric', 'John', 'Jane', 'Sarah'];
            if (usernames1.length === 0) {
                console.log("We need to find some users!");
            }
            else {
                for (var i = 0; i < usernames1.length; i++) {
                    if (usernames1[i] === 'admin') {
                        console.log("Hello admin, would you like to see a status report?");
                    }
                    else {
                        console.log("Hello ".concat(usernames1[i], ", thank you for logging in again."));
                    }
                }
            }
            // Empty the array
            usernames1 = [];
            if (usernames1.length === 0) {
                console.log("We need to find some users!");
            }
            else {
                for (var i = 0; i < usernames1.length; i++) {
                    if (usernames1[i] === 'admin') {
                        console.log("Hello admin, would you like to see a status report?");
                    }
                    else {
                        console.log("Hello ".concat(usernames1[i], ", thank you for logging in again."));
                    }
                }
            }
            break;
        case '32':
            /* Exercise 32 */
            /* Problem Defenation:
                Checking Usernames: Do the following to create a program that simulates how websites ensure that
                everyone has a unique username.
                • Make a list of five or more usernames called current_users.
                • Make another list of five usernames called new_users. Make sure one or two of the
                  new usernames are also in the current_users list.
                • Loop through the new_users list to see if each new username has already been used.
                  If it has, print a message that the person will need to enter a new username.
                   If a username has not been used, print a message saying that the username is available.
                • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
                  accepted.
            */
            /* Solution of Problem */
            var current_users = ['John', 'Jane', 'Eric', 'Sarah', 'Mike'];
            var new_users = ['Mike', 'Alex', 'Sarah', 'Kate', 'Tom'];
            for (var i = 0; i < new_users.length; i++) {
                var newUserLowerCase = new_users[i].toLowerCase();
                if (current_users.map(function (user) { return user.toLowerCase(); }).includes(newUserLowerCase)) {
                    console.log("The username '".concat(new_users[i], "' is already taken. Please enter a new username."));
                }
                else {
                    console.log("The username '".concat(new_users[i], "' is available."));
                }
            }
            break;
        case '33':
            /* Exercise 33 */
            /* Problem Defenation:
                Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
                Most ordinal numbers end in th, except 1, 2, and 3.
                • Store the numbers 1 through 9 in a array.
                • Loop through the array.
                • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
                  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a
                  separate line.
            */
            /* Solution of Problem */
            var numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (var i = 0; i < numbers4.length; i++) {
                var number4 = numbers4[i];
                if (number4 === 1) {
                    console.log("".concat(number4, "st"));
                }
                else if (number4 === 2) {
                    console.log("".concat(number4, "nd"));
                }
                else if (number4 === 3) {
                    console.log("".concat(number4, "rd"));
                }
                else {
                    console.log("".concat(number4, "th"));
                }
            }
            break;
        case '34':
            /* Exercise 34 */
            /* Problem Defenation:
                Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
                and then use a for loop to print the name of each pizza.
                •Modify your for loop to print a sentence using the name of the pizza instead of printing just
                 the name of the pizza. For each pizza you should have one line of output containing a simple
                 statement like I like pepperoni pizza.
                •Add a line at the end of your program, outside the for loop, that states how much you like pizza.
                 The output should consist of three or more lines about the kinds of pizza you like and then an
                 additional sentence, such as I really love pizza!
            */
            /* Solution of Problem */
            var favorite_pizzas = ['Pepperoni', 'Margherita', 'Hawaiian'];
            for (var i = 0; i < favorite_pizzas.length; i++) {
                var pizza = favorite_pizzas[i];
                console.log("I like ".concat(pizza, " pizza."));
            }
            console.log("Pizza is one of my favorite foods!");
            break;
        case '35':
            /* Exercise 35 */
            /* Problem Defenation:
               Animals: Think of at least three different animals that have a common characteristic.
               Store the names of these animals in a list, and then use a for loop to print out the name of
               each animal. • Modify your program to print a statement about each animal,
               such as A dog would make a great pet. • Add a line at the end of your program stating what these
               animals have in common. You could print a sentence such as Any of these animals would make a
               great pet!
            */
            /* Solution of Problem */
            var animals = ['Dog', 'Cat', 'Rabbit'];
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i];
                console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
            }
            console.log("These animals are all commonly kept as pets!");
            break;
        case '36':
            /* Exercise 36 */
            /* Problem Defenation:
               T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
               should be printed on the shirt. The function should print a sentence summarizing the size of the
               shirt and the message printed on it. Call the function.
            */
            /* Solution of Problem */
            // Note Function is defined in last of code
            make_shirt("L", "Hello World!");
            break;
        case '37':
            /* Exercise 37 */
            /* Problem Defenation:
               Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
               message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
               message, and a shirt of any size with a different message.
            */
            /* Solution of Problem */
            make_shirt2(); // Large shirt with default message
            make_shirt2("medium"); // Medium shirt with default message
            make_shirt2("small", "Hello World!"); // Small shirt with a custom message
            break;
        case '38':
            /* Exercise 38 */
            /* Problem Defenation:
               Cities: Write a function called describe_city() that accepts the name of a city and its country.
               The function should print a simple sentence, such as Karachi is in Pakistan.
               Give the parameter for the country a default value. Call your function for three different cities,
               at least one of which is not in the default country.
            */
            /* Solution of Problem */
            // Note: describe_city Function is defined at the last of programme
            describe_city("London", "United Kindom"); // Custom country
            describe_city("Pakistan"); // Default country
            describe_city("Sydney", "Australia"); // Custom country
            break;
        case '39':
            /* Exercise 39 */
            /* Problem Defenation:
               City Names: Write a function called city_country() that takes in the name of a city and its country.
               The function should return a string formatted like this:
                "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value
                that’s returned.
            */
            /* Solution of Problem */
            // Note: function city_country is defined at the end of programme
            console.log(city_country("Lahore", "Pakistan"));
            console.log(city_country("New York", "United States"));
            console.log(city_country("Sydney", "Australia"));
            break;
        case '40':
            /* Exercise 40 */
            /* Problem Defenation:
               Cars: Write a function that stores information about a car in a Object.
                The function should always receive a manufacturer and a model name.
                It should then accept an arbitrary number of keyword arguments.
                Call the function with the required information and two other name-value pairs,
                such as a color or an optional feature.Print the Object that’s returned to make sure
                all the information was stored correctly.
                 
            */
            /* Solution of Problem */
            console.log("Question is not understand properly");
            break;
        case '41':
            /* Exercise 41 */
            /* Problem Defenation:
             Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
             which prints the name of each magician in the array.
            */
            /* Solution of Problem */
            // Note: function show_magicians function is defined at the end of programme
            var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
            show_magicians(magician_names);
            break;
        case '42':
            /* Exercise 42 */
            /* Problem Defenation:
               Great Magicians: Start with a copy of your program from Exercise 39. Write a function
               called make_great() that modifies the array of magicians by adding the phrase the Great to
               each magician’s name. Call show_magicians() to see that the list has actually been modified.
            */
            /* Solution of Problem */
            var magician_names6 = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
            make_great(magician_names6);
            show_magicians2(magician_names6);
            break;
        case '43':
            /* Exercise 43 */
            /* Problem Defenation:
               Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
               with a copy of the array of magicians’ names. Because the original array will be unchanged,
               return the new array and store it in a separate array. Call show_magicians() with each array
               to show that you have one array of the original names and one array with the Great added to
               each magician’s name.
            */
            /* Solution of Problem */
            console.log("Question is not understand properly");
            break;
        case '44':
            /* Exercise 44 */
            /* Problem Defenation:
               Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
               The function should have one parameter that collects as many items as the function call provides,
               and it should print a summary of the sandwich that is being ordered. Call the function three times,
               using a different number of arguments each time.
            */
            /* Solution of Problem */
            // Note:  function order_sandwich defined in the end of programme
            order_sandwich("Turkey", "Lettuce", "Tomato"); // Sandwich with three items
            order_sandwich("Ham", "Cheese"); // Sandwich with two items
            order_sandwich("Peanut Butter", "Jelly", "Banana", "Honey"); // Sandwich with four items
            break;
        case '45':
            /* Exercise 45 */
            /* Problem Defenation:
               Cars: Write a function that stores information about a car in a Object.
               The function should always receive a manufacturer and a model name.
               It should then accept an arbitrary number of keyword arguments.
               Call the function with the required information and two other name-value pairs,
                such as a color or an optional feature. Print the Object that’s returned to make sure
                all the information was stored correctly.
            */
            /* Solution of Problem */
            console.log("Question is not understand properly");
            break;
        default:
            console.log('Invalid Number!');
    }
    rl.close();
});
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\""));
}
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\""));
}
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
function describe_city(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians2(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("- Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("- Bread\n");
}
