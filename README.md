# ContactManagerApp
(i)Move to project directory and run command npm init
(ii)INSTALL all neccessary depndencies:
  npm install mongoose@5.9.6 express@4.16.4 express-handlebars@3.0.0 body-parser@1.18.3 handlebars/allow-prototype-access
  (iii)install nodemon
  (iv)For connecting local mongoDb-->goto mongodb bin folder
      then execute command mongod --dbpath path of the data folder of your pc for mongoDB
    (v)to see all the crud operations connect it to mongoCompass by creating database: Contact and collection: contacts
(vi) then start the app with command nodemon
Routes:
localhost:3000/contact
localhost:3000/contact/list
NOTE: Everytime you must add two contact numbers otherwise it will give error in insertion.
