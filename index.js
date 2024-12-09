
// const fs = require("fs");

// // fs.writeFile("message.txt", "hello from Node.js", (err) =>{
// //     if (err) throw err;
// //     console.log("File created successfully");
// // });


// fs.readFile("./message.txt","utf8", (err, data) => {
    

//     if (err) throw err;
//     console.log(data);
// })

// var generateName = require('sillyname');

// import generateName from 'sillyname';
// var sillyName = generateName();

// console.log(`MY name is ${sillyName}`)




// import {randomSuperhero} from 'superheroes';


// console.log (`I am ${randomSuperhero()}`)



/* 
1. Use the inquirer  npm package to get user input.
2. Use the  qr-image npm package to turn the user entered URL into a QR code image.
3.Create a txt file to save the user in put using the native fs node module.
*/
// 1. Use the inquirer  npm package to get user input.
import inquirer from 'inquirer';
// 2. Use the  qr-image npm package to turn the user entered URL into a QR code image.
// var qr = require('qr-image');
import qr from 'qr-image';

import fs from 'fs';

inquirer
  .prompt([{ message: "Type in your URL: ", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  