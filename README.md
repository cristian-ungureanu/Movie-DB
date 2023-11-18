## Movie DB

A frontend interface for TMDB API that allows you to browse the most popular movies and add them to a favorites list. The project is build with React, Context API + localStorage, JavaScript and CSS.

## Project Screen Shots
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1680" alt="Screenshot 2023-11-18 at 15 17 31" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/f1bd3c51-21e9-4142-b2ce-b623a337fb1c"> Browse Movies|  <img width="1677" alt="Screenshot 2023-11-18 at 15 19 32" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/4e834877-7b23-4701-a838-5f922ec19646"> Loading state|<img width="1680" alt="Screenshot 2023-11-18 at 15 20 13" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/4a46ea17-57a2-4ab2-9233-64e57c9931ed"> No results|
|<img width="1671" alt="Screenshot 2023-11-18 at 15 20 39" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/eaeff99b-7fb8-47be-b299-a8d33f73946b"> Add to favorites toast confiramtion|  <img width="1680" alt="Screenshot 2023-11-18 at 15 22 02" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/5d0ef460-c331-44a0-972d-a1b68a0f3887"> Invalid API key|<img width="491" alt="Screenshot 2023-11-18 at 15 32 04" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/f33849ec-c94d-42e8-9f9e-c61bac39d79c"> Mobile view
|

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. The project was developed using `npm v8.19.2` and `Node v18.12.1`.

Installation:

`npm ci` - installs project dependencies

To Build the project:

`npm run build` - creates a production build

To Start Server:

`npm run preview` - starts a local server for previewing the application

To Visit App:

`http://localhost:4173`

## Reflection

#### Context:
This project was undertaken as part of a junior front-end engineer exercise to demonstrate practical skills in handling real-life scenarios. The exercise aimed to assess the candidate's ability to work with documentation, fetch data from an API, handle errors, manage API limitations, and implement functionality with a comprehensive user interface.

#### Objective:
The goal was to build a movie explorer application using modern JavaScript (ES6 and beyond) and the TMDB API. The application needed to display movie thumbnails in a grid pattern, include a search field for dynamic re-rendering of the movie grid, and allow users to add movies to favorites with a dedicated favorites section. The exercise emphasized the importance of error handling, accessibility, and responsiveness.

#### Challenges and Learning Experience:
The project posed several challenges, making it an excellent learning experience. Implementing a meaningful error handling system and ensuring a clear, accessible search field required careful consideration. Additionally, managing state using React and the Context API, along with localStorage for favorites, presented opportunities for practical problem-solving and skill development. The exercise encouraged the exploration of various optional criteria, such as loading indicators, API pagination, and debounced search functionality, allowing for a deeper understanding of these concepts.

#### Unexpected Obstacles:
While implementing the project, unexpected obstacles included managing API limitations, especially when dealing with paginated calls. Additionally, refining the UI to be mobile-first and responsive across different resolutions required thorough testing and adjustment. Another challenge was to configure Vite to use a proxy to avoid all the console errors regarding cross-origin resource sharing. Vite also needed some configurations to acces environment variables.

#### Tools and Choices:
The project was implemented using React and the Context API for state management, while localStorage was employed to persist user favorites. CSS was written from scratch to ensure a custom and lightweight design, adhering to mobile-first principles and responsive practices.

#### Optional Features:
To showcase skills beyond the minimum criteria, the project includes optional features such as loading indicators, API paginated calls, and debounced search functionality. These enhancements demonstrate a commitment to delivering a more polished and user-friendly application.

Feel free to explore the project, provide feedback, and suggest improvements. Thank you for the opportunity to showcase my skills in this exercise!
