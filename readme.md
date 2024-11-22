# Book Review Web App

## Overview
This web application allows users to browse, review, and rate books. It includes functionalities for managing user reviews, updating or deleting them, and securing operations using token-based authentication. The app was built as part of an interview task, showcasing practical use of modern web development technologies and design patterns.


![Book Review Web App](https://i.imgur.com/z0LIbIw.png)
---

## Features
### Core Features
1. **View Book Details**: Users can view detailed information about individual books.
2. **Add Reviews**: Users can write reviews, rate books, and submit them.
3. **Edit Reviews**: Users can update their previously submitted reviews.
4. **Delete Reviews**: Users can delete their reviews if needed.
5. **Authentication**: Secure access to review management using Bearer Token-based authentication.

### Additional Features
- **Responsive Design**: The web app is mobile-friendly, ensuring usability across devices.
- **Error Handling**: Meaningful error messages for failed operations like authentication, invalid inputs, or server errors.
- **Local State Management**: Updates the user interface dynamically after actions like adding or deleting reviews.

---

## Technologies Used
### Frontend
- **React.js**: For building the interactive user interface.
- **TypeScript**: Provides static typing for safer and more predictable code.
- **Next.js**: For server-side rendering and efficient routing.
- **Tailwind CSS**: For styling the user interface with minimal custom CSS. and responsive design.

### Backend
- **Spring Boot**: To create RESTful APIs and manage business logic.
- **Java**: The primary programming language for backend development.
- **MySQL**: For storing data, including books, reviews, and users.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.

### Development Tools
- **Postman**: For testing RESTful APIs.
- **Node.js**: For managing the frontend project dependencies.
- **Visual Studio Code**: The primary IDE for development.
- **IntelliJ IDEA**: For developing the Spring Boot backend.

---

## Preview
### Landing Page
![Landing Page](https://i.imgur.com/z0LIbIw.png)

### Browse Books
![Browse Books](https://i.imgur.com/OVxItYq_d.webp?maxwidth=760&fidelity=grand)

### View Book Details
![View Book Details](https://i.imgur.com/Paj9u7H.png)

### Add Review
![Add Review](https://i.imgur.com/xoYPQxI.png)

### Owned Reviews
![Owned Reviews](https://i.imgur.com/FYPSQ6A.png)

### Login Page
![Login Page](https://i.imgur.com/JaQ39xt.png)


## Installation
### Prerequisites
1. Node.js and npm installed on your machine.
2. Java and Maven for the backend server.
3. A running MySQL server with a database named `book_review`.

### Steps to Run Locally
#### Backend
1. Clone the repository.
2. Import `book_review.sql` into your MySQL database.
3. Set up a `application.properties` file with your database credentials:
   ```properties
   spring.datasource.url=jdbc:mariadb://localhost:3306/book_review
   spring.datasource.username=your_username
   spring.datasource.password=your_password
    ```
4. Run the Spring Boot application.
5. The backend server will start at `http://localhost:8080`.
6. You can test the APIs using Postman.
7. The backend server is now ready to serve requests.
8. Note: The frontend is already configured to make requests to `http://localhost:8080`.

