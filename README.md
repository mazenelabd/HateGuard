# HateGuard Frontend

This is the third layer of a three-layer product:
1. [Machine learning layer](https://github.com/mazenelabd/hateguard-machine-learning) or Data science layer.
2. [Back-end layer](https://github.com/mazenelabd/hateguard-api).
3. Front-end layer, this repository.

To run this layer, you do not have to rebuild the model in the first layer you can start from the [second layer](https://github.com/mazenelabd/hateguard-api).

1. Make sure that the API is running from the previous layer then open another Command Prompt window

2- Make sure that you have Node and npm installed on your machine
```
Node -v
```
```
npm -v
```
3. If it is not installed on your machine or if you have a Node version lower than 14.6.0 please go to https://nodejs.org/en to install Node.js

4. Go to the project directory
```
cd where-the-project-is-located-on-your-machine
```
5. Install the required packages
```
npm install
```
6. Create ".env.local" file that includes:
```
EMAIL_USER=YOUREMAIL@DOMAIN.COM
EMAIL_PASSWORD=THE_EMAIL_PASSWORD

API_BASE_URL=http://127.0.0.1:5000/
SECRET='YOUR SECRET KEY'
```
6. Build the Next.js application
```
npm run build
```
7. start the application
```
npm start
```
8. Go to: "http://localhost:3000" in your browser.

Now the project is running.
