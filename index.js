const fs = require("fs")
const inquirer = require("inquirer")

inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "input",
        message: "Where are you located?",
        name: "location"
    },
    {
        type: "input",
        message: "Tell us about yourself in 1 or 2 sentences.",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your LinkedIn URL?",
        name: "linkedin"
    },
    {
        type: "input",
        message: "What is your GitHub URL?",
        name: "github"
    },
])
.then((response) => {
    console.log(response)
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
      let html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Node Transfer</title>
      </head>
      <body>
          <h1 style="text-align: center;">Hello! My name is ${response.username}.</h1>
          <div style="display:flex; align-items: center; flex-direction: column;">
              <p style="border: solid black 2px; padding: 10px;">I currently live in ${response.location}.</p>
              <p style="border: solid black 2px; padding: 10px;">${response.bio}</p>
          </div>
          <div>
              <ul style="display:flex; flex-direction: column; align-items: center;">
                  <li>${response.linkedin}</li>
                  <li>${response.github}</li>
              </ul>
          </div>
      </body>
      </html>`
      fs.appendFile("index.html", html, (err) =>
        err ? console.error(err) : console.log("Success!")
      )
  }
)