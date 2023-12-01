## Movie DB

A frontend interface for TMDB API that allows you to browse the most popular movies and add them to a favorites list. The project is build with React, Context API + localStorage, JavaScript and CSS.

## Project Screen Shots
| | | | |
|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|
| <img width="1680" alt="Screenshot 2023-12-01 at 17 34 59" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/fc3088e0-e04b-445e-bb20-dd503f6def14"> Browse Movies| <img width="1679" alt="Screenshot 2023-12-01 at 17 36 08" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/7789f2a1-b69b-49f7-b881-e7090b463219"> Loading state|<img width="1680" alt="Screenshot 2023-12-01 at 17 38 44" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/862e5ab3-59ec-4cf5-852b-6fa4a10a5f10"> No results||
|<img width="1680" alt="Screenshot 2023-12-01 at 17 40 52" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/5ef3f92b-f032-45d3-bc5b-a5329c2e9402"> Add to favorites toast confiramtion| <img width="1679" alt="Screenshot 2023-12-01 at 17 44 12" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/0fcbeb92-eb7d-4f87-a1d3-9fc97aadd204"> Invalid API key| <img width="486" alt="Screenshot 2023-12-01 at 17 49 44" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/07bf696d-6521-4d20-a4df-bbe28d457254"> Mobile view 1 | <img width="487" alt="Screenshot 2023-12-01 at 17 50 10" src="https://github.com/cristian-ungureanu/Movie-DB/assets/9929553/d5bbf0c2-f1cb-43cb-9bee-d2bc65916900"> Mobile view2|

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

____

### Update

After receiving valuable feedback, I have diligently addressed various aspects to enhance the overall user experience and functionality of the project. Here are the key improvements:

1. Pagination: The pagination now accurately reflects user selections through query parameters, ensuring that users do not lose their choices upon page reload.
2. Configurable API Endpoint: I have replaced the hardcoded API endpoint with a reference to a variable, sourced from a configuration file. This enhances flexibility and maintainability.
3. CSS Code Refactoring: The CSS code has undergone significant refactoring. I used sass to better organize the code and I introduced variables for easier customization of the user interface, resulting in a more organized and maintainable styling structure.
4. Mobile Design Enhancements: The mobile design has been improved on multiple fronts. Pagination is now conveniently positioned at the bottom, eliminating the need for users to scroll to access this functionality along with page numbers. Additionally, I have streamlined the mobile interface by reducing the number of clicks required to access the 'Add to Favorites' option, making it more user-friendly.
5. Category Implementation: I have added the missing category implementation, enriching the project with a crucial organizational feature.

These enhancements collectively contribute to a more polished and user-friendly project. Your feedback has been instrumental in refining the application, and I appreciate the opportunity to incorporate these improvements. Please feel free to explore the updated features and share any further insights or suggestions.








