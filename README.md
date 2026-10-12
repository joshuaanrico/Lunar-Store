# Lunar Store

An online phone shop built with the MERN stack: browse products, view details, add to cart, and sign up or log in with a JWT-secured account.

University group project (Advanced Web Programming), Sumatra Institute of Technology, May 2020. Team of 3.

## Features

- Product list and product detail pages, with an "add to cart" modal
- Cart with quantity controls and totals
- Register, log in and profile page, backed by an Express API
- Passwords hashed with bcrypt; sessions use JSON Web Tokens

## Stack

| Part | Tech |
|---|---|
| Frontend | React 16 (Create React App), React Router 5, Context API, Bootstrap 4, Axios |
| Backend | Node.js, Express, MongoDB with Mongoose, bcrypt, jsonwebtoken |

## My part

I was the main contributor (29 of 55 commits, not counting merges). I built the whole backend (Express API, MongoDB user model, register and login with bcrypt and JWT), the login, register and profile pages, the landing page, product list and product details, and shared the cart and state logic with Febiola Agatha. Rana Diastri Zahrina built the product data and much of the styling.

## Run locally

Needs Node.js and a local MongoDB on port 27017.

```bash
# backend (from the repo root)
npm install
npm run dev          # Express API on http://localhost:5000

# frontend (second terminal)
cd lunar-store
npm install
npm start            # React app on http://localhost:3000
```

On Node 17 or later, start the frontend with `NODE_OPTIONS=--openssl-legacy-provider npm start` (Create React App 3 needs it).

Optional environment variables for the backend: `MONGO_URI` (defaults to a local database) and `SECRET_KEY` (JWT signing key, defaults to a dev value).

## Project structure

```
server.js           Express server (port 5000)
routes/Users.js     register, login, profile endpoints
models/User.js      Mongoose user model
lunar-store/        React frontend (Create React App)
```

## Note

Kept close to how it was submitted in 2020. Dependencies are old, so expect warnings when installing.
