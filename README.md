#  Spam Message Classifier using MERN + Brain.js

This is a full-stack spam detection web app built with the MERN stack (MongoDB, Express, React, Node.js) and Brain.js (a neural network library in JavaScript). It allows users to classify messages as **spam** or **ham**, and supports user authentication.

---

##  Features

-  JWT-based user authentication (register/login)
-  Spam/ham classifier using Brain.js neural network
-  Trained model saved and loaded from a file (no retraining on each request)
-  MongoDB used to store training messages
-  React frontend with Bootstrap UI
-  Protected API routes for prediction and training

---

##  Tech Stack

- **Frontend**: React + Vite + Bootstrap
- **Backend**: Node.js + Express
- **Database**: MongoDB (with Mongoose)
- **Machine Learning**: Brain.js
- **Auth**: JWT (JSON Web Token)
