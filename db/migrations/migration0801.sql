\c my_fav_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS reviews
(
  id SERIAL PRIMARY KEY,
  res_name VARCHAR(255),
  rating INTEGER,
  memo VARCHAR(255),
  user_id INT REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS restaurants
(
  id SERIAL PRIMARY KEY,
  res_name VARCHAR(255) REFERENCES reviews(res_name),
  category VARCHAR(255),
  address VARCHAR(255)
);