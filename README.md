# Product Management API

This is a Node.js and Express.js based API for managing products. The API allows users to create, restore, edit, and permanently delete products.

## Features

- **Create Product**: Create a new product with name, description, price, and an option to display on the homepage.
- **Restore Product**: Restore a previously removed product.
- **Edit Product**: Update product details such as name, description, price, and display status.
- **Delete Product Permanently**: Permanently delete a product from the database.






## API Endpoints

### Create a Product

- **URL**: `http://localhost:5000/api/products`
- **Method**: `POST`
- **Body**:
    ```json
    {
        "name": "Product Name",
        "description": "Product Description",
        "price": 1000,
        "displayOnHomePage": true
    }
    ```
- **Response**: 
    - `201 Created`: On success.
    - `400 Bad Request`: If name or price is missing.

### Restore a Product

- **URL**: `http://localhost:5000/api/products/:id/restore`
- **Method**: `PUT`
- **Body**: 
    ```json
    {
        "displayOnHomePage": true
    }
    ```
- **Response**: 
    - `200 OK`: On success.
    - `404 Not Found`: If product ID does not exist.

### Edit a Product

- **URL**: `http://localhost:5000/api/products/:id`
- **Method**: `PUT`
- **Body**:
    ```json
    {
        "name": "Updated Product Name",
        "description": "Updated Description",
        "price": 1200,
        "displayOnHomePage": false
    }
    ```
- **Response**: 
    - `200 OK`: On success.
    - `404 Not Found`: If product ID does not exist.

### Delete a Product Permanently

- **URL**: `http://localhost:5000/api/products/:id`
- **Method**: `DELETE`
- **Response**: 
    - `200 OK`: On success.
    - `404 Not Found`: If product ID does not exist.

## Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB running locally or on a cloud service like MongoDB Atlas.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/surajmendhe5573/remove-products
    cd product-management-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```



## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add your environment variables. Below is an example `.env` file:

**Example `.env` file:**
```env

PORT=5000
MONGO_URI=mongodb://localhost:27017/defaultdb
