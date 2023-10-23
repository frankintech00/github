# GitHub User Analytics

Developed by Frank Kelly, this application provides a comprehensive overview of a GitHub user's activity, including their repositories, followers, and various other statistics. It's built using React and showcases a variety of components and visualizations. This project is based on a video course by John Smigla.

## Features

- **User Search**: Search for any GitHub user to view their statistics.
- **Detailed User Overview**: View details like followers, following, public repos, and gists.
- **Visual Analytics**: Includes various charts like Bar3D, Column3D, Doughnut2D, and Pie3D to represent user data visually.
- **Followers List**: View a list of followers for the searched user.
- **Repository List**: View a list of repositories for the searched user.
- **Authentication**: Secure login mechanism.
- **Error Handling**: Dedicated error page for unforeseen issues.

## Components

The application is structured with the following main components:

- `App.js`: The main application file.
- `Navbar.jsx`: Navigation bar component.
- `Search.jsx`: Component to search for GitHub users.
- `User.jsx`: Component to display user details.
- `Repos.jsx`: Component to display user repositories.
- `Followers.jsx`: Component to display user followers.
- `InfoCards.jsx`: Component to display user statistics in card format.
- `Charts`: Contains various chart components like `Bar3D`, `Column3D`, `Doughnut2D`, and `Pie3D`.
- `context`: Contains the main context for the application.
- `pages`: Contains various pages like `DashBoard`, `Error`, `Login`, and `PrivateRoute`.

## Setup & Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Run the application using `npm start`.

## Contribution

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss the proposed change.

## License

This project is licensed under the MIT License.
