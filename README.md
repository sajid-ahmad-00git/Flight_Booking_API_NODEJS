Flight Booking Backend - Sequelize Setup

This README explains how to set up the database and tables for the Flight Booking Backend using Sequelize and MySQL.

1️⃣ Install Dependencies

First, install Sequelize and the MySQL driver:

npm install sequelize mysql2

Then, install the Sequelize CLI:

npm install --save-dev sequelize-cli

2️⃣ Initialize Sequelize Project

Run:

npx sequelize-cli init

This creates the following folder structure:

config/ // Database configuration files
models/ // Sequelize models (used by developers)
migrations/ // Migration files (used to modify the database)
seeders/ // Seed files (for initial data)

3️⃣ Configure the Database

Edit config/config.json (or config/config.js) and add your database credentials:

{
"development": {
"username": "root",
"password": "password",
"database": "flight_Backend",
"host": "127.0.0.1",
"dialect": "mysql"
},
"test": {
"username": "root",
"password": null,
"database": "database_test",
"host": "127.0.0.1",
"dialect": "mysql"
},
"production": {
"username": "root",
"password": null,
"database": "database_production",
"host": "127.0.0.1",
"dialect": "mysql"
}
}

⚠️ Make sure to replace username, password, and database with your actual MySQL credentials.

4️⃣ Create the Database

Run:

npx sequelize-cli db:create

This will create the database specified in your configuration file.

5️⃣ Create a Model and Migration

Example: Airplane model with modelNumber (string) and capacity (integer):

npx sequelize-cli model:generate --name Airplane --attributes modelNumber:string,capacity:integer

This generates:

models/airplane.js → Sequelize model (used by developers)

migrations/YYYYMMDDHHMMSS-create-airplane.js → Migration file (used to create the table in the database)

You may customize both files to add validations, default values, or associations.

6️⃣ Run Migrations (Create Tables)

Run:

npx sequelize-cli db:migrate

This will create the Airplanes table in your database with the following columns:

id → Primary Key

modelNumber → String

capacity → Integer

createdAt → Timestamp

updatedAt → Timestamp

7️⃣ Optional: Seed Data

You can add initial data with seeders:

npx sequelize-cli seed:generate --name demo-airplane

Edit the seeder file and run:

npx sequelize-cli db:seed:all

8️⃣ Reset Database (Optional)

To undo all migrations:

npx sequelize-cli db:migrate:undo:all

To drop the database:

npx sequelize-cli db:drop
