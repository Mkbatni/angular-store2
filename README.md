## after downloading this project:
 1. npm install       <-- should download all the dependencies. 
 2. ng serve -o       <--- will automaticly opens and runs the application on : http://localhost:4200/
 
 ## features:
 ### login page:
 1. autogaurd has been used so no one can access the dashboard from navbar or the url. only the users with the specific access can access the dashboards after login.
 2. lockout: users with invalid username or password will have 3 tries until they unable to login to the website. User can click on the unlock button to start over.
 
 there are 3 types of users that can login to the site and proceed to dashboard without needing to sign up:
 ---------------
 admin:    username: admin | password: 123         <--  will have access to crud and sort | filter functions
 employe:  username: emp   | password: 123         <--- will have access to rdu and sort | filter functions
 user:     username: user  | password: 123         <--- will have access to cr and sort | fileter functions
 ----------------
 ### Sign up page:
 normal user can sign up
 ----------------
 ### Dashboard: 
 
### create: duplicate book name is not allowed.
### update: books name and/or books author can be modified.
### delete: it will delete the selected book.
### sort: sorts are available based on books name or author.
