- Create a repository
- Intialize the repo
- Learn about node_modules, package.json and package-lock.json
- What are dependencies ?
- Learn about versions and difference between caret(^) and tilde(~)
- Install express.js
- Create a server
- Listen to port no. 7777
- Write request handlers for /test, /hello
- What is the use of "-g" while installing from npm ?
- Install nodemon globally (-g) and update the scripts inside package.json

- Initialize git
- Create a git ignore file and add node_modules in it
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions eg. "/hello/1", "/", etc.
- Imp. note => THE ORDER OF THE ROUTES AND ROUTES HANDLERS MATTER A LOT.
- Explore routing and use of '?', '\*', '()', '+' in the routes
- Use of REGEX in routes '/a/', '/.\*fly$/'
- Reading the query params in the routes
- Reading the dynamic routes

- Use Multiple route handlers
- Learn about next()
- next() and errors along with res.send()
- app.use("/route", [rh1, rh2], rh3, rh4, rh5)
- REMEMBER: app.use is a "method-agnostic middleware"
- What are middlewares?
- How express.js handles request behind the scene
- Difference between app.use and app.all
- What are status codes?
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for user routes, except for user/login
- Error handling using app.use("/", (err, req, res, next) => {});

- Create a free cluster on MongoDB off. website (Mongo ATLAS)
- Install mongoose (Object Data Modeling) ODM library
- Connect your application to the database "connection-url/databaseName"
- Call the connectDB() and connect to database before starting application on port no. 7777
- Create a userSchema and User model
- Create POST /signup API to add data to the database
- Push some documents using signup API from postman
- Handle error while working with database using try / catch

- Difference between json and js object
- Add express.json() middleware to the app.js
- Make your sign-up API dynamic => It should recieve data from the API using (req.body)
- Create API, GET user by email(/user)
- Create API, GET all the users(/feed)
- Create API, GET user by id

- Explore schematype options from the documentation
- Add required, unique, lowercase, min, minLength, trim to userSchema
- Add default in any schema property
- Create a custom validate function for gender
- Improve the DB schema by adding validations
- Add timestamps to the userSchema
- Install VALIDATOR - A library of string validators and sanitizers
- Add validator for various fields
- NEVER TRUST req.body

- Validate sign-up data in req
- Install bcrypt package
- Create password hash using brcypt.hash & save hash password in db
- Create login API
- Compare password using bcrypt.compare
- Throw errors if email or password is not valid

- Install cookie-parser
- Create GET /profile API and check if you get the cookies
- Install jsonwebtoken
- Create jwt in after successful login and use it in other API verification
- Create a userAuth middleware
- Use userAuth middleware in order to validate a user while accessing GET /profile API
- Create userSchema.method.getJWT() to generate jwt tokens
- Create userSchema.method.validatePassword to validate password entered by user

- Create a .md for all the required APIs
- Use express.Router()
- Create authRouter, profileRouter and requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit API 
- Create PATCH /profile/password API for changing existing password

