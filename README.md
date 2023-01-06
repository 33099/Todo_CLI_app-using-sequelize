# Todo_CLI_app-using-sequelize


1) listTodos.js
When running this program from the command line, it should print to-dos from the database in the following format:

My Todo-list

Overdue
24. [ ] Submit assignment 2022-07-10


Due Today
25. [x] Pay rent
28. [ ] Service vehicle


Due Later
26. [ ] File taxes 2022-07-14
27. [ ] Call Acme Corp. 2022-07-14

2) addTodo.js

When running this program from the command line, it should accept title, due in days as command line argument for details of a new to-do, save it to the database, and print the new list of to-dos. You can add a todo using the command:

node addTodo.js --title="hello there" --dueInDays=2

3) completeTodo.js
Implement a class method markAsComplete on models/todo.js which takes a To-do ID, and sets its completed attribute to true. 

