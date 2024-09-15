# Fruit.AI

Fruit.AI is a comprehensive web application designed to provide users with intelligent, healthy choices related to fruits. It features a variety of functionalities including a chatbot for instant support, a translator for multi-language capabilities, a detailed FAQ section, and an "About Us" page to learn more about our mission.

## Features

- **AI Chat:** 24/7 confidential chatbot assistance for fruit-related questions and tips.
- **Instant Translator:** Translate fruit facts and tips across multiple languages.
- **FAQs:** Find quick answers to common fruit-related queries.
- **About Us:** Discover the mission and vision of Fruit.AI.

## Technologies

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **File Uploads:** Multer

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MongoDB (>=4.x)
- npm or Yarn

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/fruit-ai.git
    cd fruit-ai
    ```

2. **Install Backend Dependencies:**

    ```bash
    cd backend
    npm install
    ```

    Or, if using Yarn:

    ```bash
    yarn install
    ```

3. **Install Frontend Dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

    Or, if using Yarn:

    ```bash
    yarn install
    ```

4. **Set Up Environment Variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGO_URI=mongodb://localhost:27017/fruit
    PORT=3000
    ```

    Adjust `MONGO_URI` to match your MongoDB connection string.

5. **Create the Uploads Directory:**

    ```bash
    cd backend
    mkdir uploads
    ```

### Running the Application

1. **Start the Backend Server:**

    ```bash
    cd backend
    npm start
    ```

    Or, if using Yarn:

    ```bash
    yarn start
    ```

    The backend server will run on [http://localhost:5000](http://localhost:5000) by default.

2. **Start the Frontend Development Server:**

    ```bash
    cd ../frontend
    npm start
    ```

    Or, if using Yarn:

    ```bash
    yarn start
    ```

    The frontend application will run on [http://localhost:3000](http://localhost:3000) by default.

## API Endpoints

- **Create FAQ**

    - **Endpoint:** `POST /api/faqs`
    - **Request Body:**
      - `question` (string, required)
      - `answer` (string, required)
      - `image` (file, optional)
    - **Response:** 201 Created with the newly created FAQ object

- **Get All FAQs**

    - **Endpoint:** `GET /api/faqs`
    - **Response:** 200 OK with an array of FAQ objects

- **Get FAQ by ID**

    - **Endpoint:** `GET /api/faqs/:id`
    - **Response:** 200 OK with the FAQ object, or 404 Not Found if FAQ does not exist

- **Update FAQ**

    - **Endpoint:** `PUT /api/faqs/:id`
    - **Request Body:**
      - `question` (string, optional)
      - `answer` (string, optional)
      - `image` (file, optional)
    - **Response:** 200 OK with the updated FAQ object, or 404 Not Found if FAQ does not exist

- **Delete FAQ**

    - **Endpoint:** `DELETE /api/faqs/:id`
    - **Response:** 200 OK with a success message, or 404 Not Found if FAQ does not exist

## Frontend Routes

- **Home:** `/home` - Landing page showcasing features and navigation links.
- **Chatbot:** `/chatbot` - Access the AI chatbot.
- **Translator:** `/translator` - Use the instant translator feature.
- **FAQs:** `/faq` - View the list of FAQs.
- **About Us:** `/about` - Learn more about Fruit.AI.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for each feature or fix.
3. Ensure your code is well-tested.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
