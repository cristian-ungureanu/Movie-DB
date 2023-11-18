## Movie DB

A frontend interface for TMDB API that allows you to browse the most popular movies and add them to a favorites list. The project is build with React, Context API + localStorage, JavaScript and CSS.

## Project Screen Shots

#### Example:

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. The project was build with npm v8.19.2 and Node v18.12.1.

Installation:

`npm ci` - installs project dependencies

To Build the project:

`npm run build` - creates a production build

To Start Server:

`npm run preview` - starts a local server for previewing the application

To Visit App:

`http://localhost:4173`

## Reflection

####Context:
This project was undertaken as part of a junior front-end engineer exercise to demonstrate practical skills in handling real-life scenarios. The exercise aimed to assess the candidate's ability to work with documentation, fetch data from an API, handle errors, manage API limitations, and implement functionality with a comprehensive user interface.

####Objective:
The goal was to build a movie explorer application using modern JavaScript (ES6 and beyond) and the TMDB API. The application needed to display movie thumbnails in a grid pattern, include a search field for dynamic re-rendering of the movie grid, and allow users to add movies to favorites with a dedicated favorites section. The exercise emphasized the importance of error handling, accessibility, and responsiveness.

####Challenges and Learning Experience:
The project posed several challenges, making it an excellent learning experience. Implementing a meaningful error handling system and ensuring a clear, accessible search field required careful consideration. Additionally, managing state using React and the Context API, along with localStorage for favorites, presented opportunities for practical problem-solving and skill development. The exercise encouraged the exploration of various optional criteria, such as loading indicators, API pagination, and debounced search functionality, allowing for a deeper understanding of these concepts.

####Unexpected Obstacles:
While implementing the project, unexpected obstacles included managing API limitations, especially when dealing with paginated calls. Additionally, refining the UI to be mobile-first and responsive across different resolutions required thorough testing and adjustment. Another challenge was to configure Vite to use a proxy to avoid all the console errors regarding cross-origin resource sharing. Vite also needed some configurations to acces environment variables.

####Tools and Choices:
The project was implemented using React and the Context API for state management, while localStorage was employed to persist user favorites. CSS was written from scratch to ensure a custom and lightweight design, adhering to mobile-first principles and responsive practices.

####Optional Features:
To showcase skills beyond the minimum criteria, the project includes optional features such as loading indicators, API paginated calls, and debounced search functionality. These enhancements demonstrate a commitment to delivering a more polished and user-friendly application.

Feel free to explore the project, provide feedback, and suggest improvements. Thank you for the opportunity to showcase my skills in this exercise!
