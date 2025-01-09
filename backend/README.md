# Golang Backend API Documentation

---

## Users API

### 1. Token Verification
- **Endpoint:** `POST /v1/verify`
- **Description:** Validates the provided JWT token.
- **Headers:**  
  - `Authorization: Bearer <JWT>`  
- **Response:**
  - **200 OK:** Token is valid.
    ```json
    {
      "error": false,
      "message": "Token is valid"
    }
    ```
  - **401 Unauthorized:** Token is invalid or expired.
    ```json
    {
      "error": true,
      "message": "Invalid or expired token"
    }
    ```

---

### 2. User Registration
- **Endpoint:** `POST /v1/register`
- **Description:** Registers a new user and issues a JWT token.
- **Headers:**  
  - `Content-Type: application/json`  
- **Request Body:**
  ```json
  {
    "email": "test@gmail.com",
    "username": "imatest",
    "password": "this will be hashed later"
  }

### 3. User Login (Continued)
- **Response:**
  - **200 OK:** User successfully logged in. The JWT token is returned in the `Authorization` header.
    - **Headers:**
      ```
      Authorization: Bearer <JWT>
      ```
    - **Body:**
      ```json
      {
        "error": false,
        "message": "<JWT>"
      }
      ```
  - **401 Unauthorized:** Invalid username or password.
    ```json
    {
      "error": true,
      "message": "Invalid username or password"
    }
    ```
  - **400 Bad Request:** Missing or invalid input fields.
    ```json
    {
      "error": true,
      "message": "Invalid input data"
    }
    ```
### 4. Get User Closet
- **Endpoint:** `POST /v1/closet`
- **Description:** Fetches the list of items in the user's closet.
- **Headers:**  
  - `Content-Type: application/json`  
- **Request Body:**
  ```json
  {
    "username": "exampleUser"
  }
  ```
- **Response:**
  - **200 OK:** Successfully fetched the user's closet.
    ```json
    {
      "error": false,
      "message": "Success",
      "data": {
        "userItems": [
          {
            "ownerID": 1,
            "itemID": 1,
            "itemName": "Fancy Hat",
            "itemDescription": "A fancy hat with feathers",
            "creationDate": "2024-12-23T15:04:05Z",
            "price": 100
          },
          {
            "ownerID": 1,
            "itemID": 2,
            "itemName": "Elegant Coat",
            "itemDescription": "A stylish coat for winter",
            "creationDate": "2024-12-23T15:04:05Z",
            "price": 250
          }
        ]
      }
    }
    ```
  - **400 Bad Request:** Invalid request body (e.g., malformed JSON).
    ```json
    {
      "error": true,
      "message": "Invalid request"
    }
    ```
  - **401 Unauthorized:** Missing or empty username.
    ```json
    {
      "error": true,
      "message": "Username cannot be empty"
    }
    ```
  - **404 Not Found:** User does not exist.
    ```json
    {
      "error": true,
      "message": "User not found"
    }
    ```