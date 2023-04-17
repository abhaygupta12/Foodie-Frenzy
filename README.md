<h1>Foodie Frenzy</h1>
<p>Foodie Frenzy is a web application that provides users with a wide range of restaurant options based on their location, cuisine preference, and budget. The application also allows users to view restaurant details, menus, and place orders. The main objective of this application is to provide a convenient and user-friendly platform for foodies to discover and order their favorite food and drinks from the best restaurants according to selected city. The application aims to simplify the process of finding and ordering food, making it a hassle-free experience for users.</p>


 

<h2>Project Description</h2>

<p>Foodie Frenzy is a full-stack web application that allows users to search for and explore various restaurants and cuisines, read reviews and ratings, and place orders for delivery or pickup. The app is built using React.js for the frontend, Node.js and Express for the backend, and MongoDB for the database.</p>

The frontend of the application is built using ReactJS, which provides a fast and responsive user interface. The backend of the application is built using Node.js and Express, which provides a scalable and robust server-side infrastructure.

The application uses a REST API to communicate between the frontend and backend. The API is built using Express and provides endpoints for retrieving restaurant menus, submitting orders.
<h2>Languages and Tech Stack Showcased in the Application</h2>
<ul>
  <h3>1.Frontend:</h3>
  <li>ReactJS</li>
  <li>HTML/CSS/JavaScript</li><br>
 <h3>2.Backend:</h3>
 <li>Node.js</li>
 <li>Express.js</li>
 <li>MongoDB</li>
 <li>Mongoose.js</li>
</ul>
<h2>3.All REST API Endpoints which has implemented using Node.js and Express.js in this application.</h2>
<p>
GET /location - To get the list of all cities<br>
GET /restro - To get the list of all restaurants<br>
GET /restro?state_id={id} - To get the list of restaurants in a specific city<br>
GET /mealtype - To get the list of all meal types<br>
GET /restro?meal_id={id}&state_id={id} - To get the list of restaurants based on meal type and city<br>
GET /restro?meal_id={id} - To get the list of restaurants based on meal type<br>
GET /restro?state_id={id} - To get the list of restaurants in a specific city<br>
GET /filter/{id}?cuisine={id}&lcost={value}&hcost={value} - To get the list of restaurants based on filters like cuisine, cost.<br>
GET /detail/{id} - To get the details of a specific restaurant<br>
GET /menu/{id} - To get the menu of a specific restaurant<br>
POST /orders - To place an order<br>
GET /orders - To get the list of all orders<br>
</p>
<h2>Features</h2>

<ul>
  <li>Search for restaurants and cuisines by location or keyword</li>
  <li>View restaurant details, including photos, menu items, and reviews</li>
  <li>Place orders for delivery or pickup</li>
  <li>View order history and status</li>
</ul>


<h2>Future Work</h2>
<ul>
<li>Login & Authentication for Create and manage user accounts</li>
Foodie Frenzy will also provide a secure authentication system for users, which allows them to create accounts and securely manage their personal information.
<li>Payment Gateway</li>
</ul>
<h1>Project View</h1>
<h3>Home Page </h3>
  <img src = "./Project View/Home Page.png">
<h3>Quick Search Page</h3>
  <img src = "./Project View/Quick search page.png">
<h3>Listing Page</h3>
  <img src = "./Project View/Listing Page.png">
<h3>Listing Menu Page</h3>
  <img src = "./Project View/Listing Page-2.png">
<h3>Detail for Resturant Page</h3>
  <img src = "./Project View/detail_particular_resturant.png">
<h3>Add item from Resturant Page</h3>
  <img src ="./Project View/Add item.png">
  
<p>Discover the best food & drinks that are perfect for foodies everywhere.</p>
<p>Foodie Frenzy is a comprehensive food discovery platform that caters to foodies everywhere. With a vast collection of restaurants, cafes, and bars, our app discover the best food and drinks that satisfy your taste buds and share your experiences with like-minded food lovers. From breakfast to dinner and everything in between, Foodie Frenzy has got you covered.<p>
























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
