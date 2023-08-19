# GSynergy React Interview Application - Movies Browser

This is a simple movie browser application with which has infinite scroll feature and search bar to search the movies of user's choice. The details of the movie is shown in movie details page which will appear on the movie card click in the movie listing page.

## Deployment Link : [Movies Browser](https://gsiv-23-rishabh-sharma.vercel.app)

To run and test the application, follow these steps:

1. Clone this repository: "git clone https://github.com/RISHABHsharm/GSIV23_Rishabh_Sharma.git"
2. Navigate to the project folder: "cd GSIV23_Rishabh_Sharma"
3. Install dependencies: "yarn install"
4. Run the app locally: "yarn run dev"
5. Open your browser and go to: "http://localhost:5173"
6. Test the app locally: "yarn run test"

# Features

- **Search bar**: The application has search bar which will show list of movies which matches the user Input and upon canceling the input, the upcoming list of movies will be shown. The search is optimized by using debounce so that the api calls could be fewer and user can get better experience.

- **Infinite Scroll**: The application has used "react-infinite-scroll-component" to show list of movies as we scroll down the window, also added customer loader that appears when the application is fetching more movies from the api.

- **State Management and API calls**: The application has used Redux toolkit for the state management, and also used Axios to handle api calls. "redux-logger" is used to help tracking the state during development process.

- **Design Implementation and Responsiveness**: The application is made responsive with the help of Material UI and it is implemented keeping in mind its reusability, maintainability, and testability.

# enhancements

- More unit test cases to be written to increase code coverage and reduce bugs in the code.
- theme of the website to be changed to make it more attractive and enchance user experience.
- Auto suggestion in the search bar to help user and also addition of comments in movie details page if possible.

## Feedback

I appreciate the opportunity to that is provided by GSynergy to develop this wonderful website. The one thing I want to add is to give specific API for the intregration that will help challenger a lot, because it took little more work to get the desired API for the use
