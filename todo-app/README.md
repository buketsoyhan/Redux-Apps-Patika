# Todo App

### Deployment of the project
https://todo-app-bs.surge.sh/
## Running the backend
After downloading the code, going to the api folder, first the necessary files are downloaded with the 
```bash
npm install
```
code, and then the server is run with the 
```bash
npm run server
```
## Running the frontend
First, go to the client folder. The dependencies of the project are downloaded with 
```bash
npm install
```
and then the client side is run with the 
```bash
npm start
```
## Deployment
The project is first built with the 
```bash
npm run build
```
Then the 
```bash
npm install -g surge
```
command is run.
Go to the folder with 
```bash
cd build
```
```bash
surge
```
The surge command is written and it deploys the project to the relevant link.
