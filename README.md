# eat-da-burger [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Links
- Deployed Link: https://infinite-anchorage-81486.herokuapp.com/

## Table of Contents
- [User Story](#user-story)
- [Business Context](#business-context)
- [How Eat Da Burger Works](#how-eat-da-burger-works)
- [Installation](#installation)
- [Webpage Screenshots](#webpage-screenshots)
- [Webpage Demo](#webpage-demo)
- [Questions](#questions)

## User Story
```
AS A burger lover
I WANT to add, devour, save my burgers
SO THAT I can keep track of burgers I love
```

## Business Context
A burger lover would benefit from being able to keep track of burgers they have eaten, burgers they want to eat, and burgers they have created. 

## How Eat Da Burger Works
Eat Da Burger utilizes handlebars, which is a simple templating language. Handlebars uses a template and an input object to generate HTML. Eat Da Burger also uses CRUD operations (Create, Read, Update, and Delete) which gives the application its functionality. Furthermore, there is a burger model that is used in the burgerController.js file, which is where the functions are defined. The controller also uses Object Relational Mapping (ORM), which is a technique that maps software objects to database tables. Having an ORM allows for developers to interact with objects without actually writing any database queries. In other words, ORM constructs and executes a database query "under the hood" when an object is undergoing a CRUD operation. 

## Installation
- In your terminal: 
    - Run `git clone` git@github.com:ktlnn/eat-da-burger.git
    - Run `npm install` OR `yarn install` to instal dependencies for Eat Da Burger
    - Run `node server` to start Eat Da Burger in your local browser
    - Enjoy!

## Webpage Screenshots
![eat-da-burger-screenshot](/public/assets/images/eat-da-burger-screenshot.png)

## Webpage Demo 
![eat-da-burger-demo](/public/assets/images/eat-da-burger-demo.gif)

## Questions
If you have any questions about this applicaiton, feel free to email: ktlnn.nguyen@gmail.com