# Stack (and helpful libraries that worth mentioning)
* Node.js
* React
* Styled-components
* Mateiral-UI
* MongoDB
* mongoose
* Nest.js
* Swagger
* TypeScript
* Cypress


# How to run the app

1. execute `yarn install`
2. execute `yarn build:server`(the build creates some errors because of the UI code, but it still manage to create a dist folder for the server)
3. create a local mongodb database server on port `27017`(default) with admin database. make sure that the connection properties are `user: root` and `password: rootpassword`. Alternatively, you may edit the code to make it fit your kind of mongodb server credentials.
4. Now you may either execute `yarn start` or `yarn dev` which will start both the server and the client.

# How to test it

If you're not familiar with Cypress, after installing the node_modules, you'll have to execute `yarn cypress open`, afterward a small popup will be displayed, click on the `createUser.spec.js` file and the automatic test will start to play.

# Assumptions
1. I've assumed that I can rely on the fact that nothing wrong will happens during the communication between the server and the client, so if any error raises, it will only be because the user typed an invalid/taken email.
2. I've assumed that the user description is optional.
3. I've assumed that the client shouldn't be able to fetch the passwords from the server.
4. I've assumed that any encryption method that won't save the actual password or anything that resembles it to the db will be ok.
5. I've assumed that a single e2e test that adds a user and only checks no warning has been raised is good enough for this assignment.


# Final words
I had tons of fun during the implementation process. Hopefully, you'll experience the same while checking it :)
