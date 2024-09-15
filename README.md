#Fruit.Ai

Fruit.AI is a web application designed to provide users with smart, healthy choices related to fruits. The platform offers various features including a chatbot for instant assistance, a translator for multi-language support, an FAQ section for fruit-related queries, and an "About Us" page to learn more about the mission of Fruit.AI.

#Features
AI Chat: Confidential, 24/7 chatbot assistance for fruit-related questions and tips.
Instant Translator: Translate fruit facts and tips across different languages.
FAQs: Quickly find answers to common fruit-related queries.
About Us: Learn about the mission and vision of Fruit.AI.
#Technologies
Frontend: React
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT
File Uploads: Multer
#Getting Started
Prerequisites
Node.js (>=14.x)
MongoDB (>=4.x)
npm or yarn
#Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/fruit-ai.git
cd fruit-ai
Install backend dependencies:

bash
Copy code
cd backend
npm install
or if using Yarn:

bash
Copy code
yarn install
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
or if using Yarn:

bash
Copy code
yarn install
Set up environment variables:

Create a .env file in the backend directory and add the following:

env
Copy code
MONGO_URI=mongodb://localhost:27017/fruitdb
PORT=5000
Adjust MONGO_URI to match your MongoDB connection string.

Create the uploads directory:

bash
Copy code
cd backend
mkdir uploads
Running the Application
Start the backend server:

bash
Copy code
cd backend
npm start
or if using Yarn:

bash
Copy code
yarn start
The backend server will run on http://localhost:5000 by default.

Start the frontend development server:

bash
Copy code
cd ../frontend
npm start
or if using Yarn:

bash
Copy code
yarn start
The frontend application will run on http://localhost:3000 by default.

API Endpoints
Create FAQ

POST /api/faqs
Request Body:
question (string, required)
answer (string, required)
image (file, optional)
Response: 201 Created with the newly created FAQ object
Get All FAQs

GET /api/faqs
Response: 200 OK with an array of FAQ objects
Get FAQ by ID

GET /api/faqs/:id
Response: 200 OK with the FAQ object, or 404 Not Found if FAQ does not exist
Update FAQ

PUT /api/faqs/:id
Request Body:
question (string, optional)
answer (string, optional)
image (file, optional)
Response: 200 OK with the updated FAQ object, or 404 Not Found if FAQ does not exist
Delete FAQ

DELETE /api/faqs/:id
Response: 200 OK with a success message, or 404 Not Found if FAQ does not exist
Frontend Routes
Home: /home - Landing page showcasing features and navigation links.
Chatbot: /chatbot - Access the AI chatbot.
Translator: /translator - Use the instant translator feature.
FAQs: /faq - View the list of FAQs.
About Us: /about - Learn more about Fruit.AI.
Contributing
Contributions are welcome! Please follow these guidelines:

Fork the repository.
Create a new branch for each feature or fix.
Ensure your code is well-tested.
Submit a pull request with a clear description of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.
