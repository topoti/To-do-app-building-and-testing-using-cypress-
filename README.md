# To-do-app-building-and-testing-using-cypress

ToDo list is a simple web application to save Your daily tasks in order not to miss anything.

####  Features: 
  - Add new task
  - Mark task as completed / uncompleted
  - Edit task
  - Delete single task
  - Delete completed tasks
  - Delete all tasks
  
#### Technologies used:
  - HTML
  - CSS
  - JavaScript
### Steps of installing cypress
step-1 go to CMD from that folder

step-2 run command npm init

if npm don't work then, run yarn init

if yarn not installed then run npm install --global yarn

step-3 Then run code . it will take you into VS code screen

step-4 here you can see a package.json file

go to that file and add this line

"scripts": {

"test": "echo \"Error: no test specified\" && exit 1",

"cypress:open": "cypress open"

},

step-5 Go to CMD and run npm install cypress --save-dev

for yarn run yarn add cypress

step-6 It will install cypress on your project then you can run your project by

run this command npx cypress open , yarn start
