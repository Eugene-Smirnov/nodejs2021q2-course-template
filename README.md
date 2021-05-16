# Eugene Smirnov express-REST service

## Installing NPM modules

```
npm i
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Methods

- User (/users route)
   - GET /users - get all users (remove password from response)
   - GET /users/:userId - get the user by id (ex. “/users/123”) (remove password from response)
   - POST /users - create user
   - PUT /users/:userId - update user
   - DELETE /users/:userId - delete user
- Board (/boards route)
   - GET /boards - get all boards
   - GET /boards/:boardId - get the board by id
   - POST /boards - create board
   - PUT /boards/:boardId - update board
   - DELETE /boards/:boardId - delete board
- Task (boards/:boardId/tasks route)
   - GET boards/:boardId/tasks - get all tasks
   - GET boards/:boardId/tasks/:taskId - get the task by id
   - POST boards/:boardId/tasks - create task
   - PUT boards/:boardId/tasks/:taskId - update task
   - DELETE boards/:boardId/tasks/:taskId - delete task

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
