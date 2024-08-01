# E-Commerce Product Inventory Management

A simple Node.js application to manage product inventory using MongoDB. This allows you to create, list, delete, and update product quantities (perform CRUD operations).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

This project utilizes the following technologies and libraries:

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **body-parser**
- **dotenv**
- **mongoose-sequence**

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/ecommerce-inventory.git
   cd ecommerce-inventory
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Run the following command to install the required dependencies:

   ```bash
    npm install
   ```

## Environment Variables
Create a `.env` file in the root directory of your project with the following content:

    ```bash
    MONGO_URI = yourmongodburl
    PORT = 3000
    ```

## USAGE

1. Start the Server

   ```bash
   node server.js
   ```

2. Verify the Server

Open your browser and navigate to `http://localhost:3000` or use Postman to interact with the API.

## API Endpoints

1. API Endpoints

- URL: `/api/products/create`
- Method: `POST`
- Request Body:

  ```json
  {
    "name": "laptop",
    "quantity": 10
  }

  ```

- Response:
  ```json
  {
    "data": {
      "product": {
        "_id": "product-id",
        "name": "laptop",
        "quantity": 10
      }
    }
  }
  ```

2. List All Products

- URL: `/api/products`
- Method: `GET`
- Response:

  ```json
  {
    "data": {
      "products": [
        {
          "_id": "product-id",
          "name": "laptop",
          "quantity": 10
        },
        {
          "_id": "product-id",
          "name": "camera",
          "quantity": 5
        }
      ]
    }
  }
  ```

3. Delete a Product

- URL: `/api/products/:id`
- Method: `DELETE`
- Response:

  ```json {
  "data":
  {
      "message": "Product deleted"
  }
  ```

4. Update Product Quantity

- URL: `/api/products/:id/update_quantity?number=10`
- Method: `POST`
- Response:

  ```json
  {
    "data": {
      "product": {
        "_id": "product-id",
        "name": "laptop",
        "quantity": 20
      },
      "message": "Updated successfully"
    }
  }
  ```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
