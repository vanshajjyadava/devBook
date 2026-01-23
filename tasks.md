DAY 1:
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

DAY 2:
- Initialize git
- Create a git ignore file and add node_modules in it
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions eg. "/hello/1", "/", etc.
- Imp. note => THE ORDER OF THE ROUTES AND ROUTES HANDLERS MATTER A LOT.
- Explore routing and use of '?', '*', '()', '+' in the routes
- Use of REGEX in routes '/a/', '/.*fly$/'
- Reading the query params in the routes
- Reading the dynamic routes

DAY 3:
- Use Multiple route handlers
- Learn about next()
- next() and errors along with res.send()
- app.use("/route", [rh1, rh2], rh3, rh4, rh5) 
- REMEMBER: app.use is a "method-agnostic middleware"