#  Book Review API


## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Install

### 1. Clone the repository

```bash
git clone https://github.com/muradorucov/starex_bookapi.git
cd book-review-api

```
### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file
Create a `.env` file and add the following values:

```
PORT = 3000
MONGO_PASS = GDtM33DsmWpqHnVk
MONGO_URI = mongodb+srv://orucowmurad:<password>@murad.crhn5gw.mongodb.net/
```

### 4. Run Server

```bash
npm start
```

## Endpoints
### Books

| Method | Endpoint       | Description                   |
|--------|----------------|-------------------------------|
| POST   | `/books`       | Create a new book             |
| GET    | `/books`       | Get all books                 |
| GET    | `/books/:id`   | Get a book and its reviews by ID |


**Filter and sort:**
| `GET /books?rating=3` – Get books with average rating of 3 and above |

### Reviews
| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/books/:id/reviews`  | Add a review to a book     |



## Example Request

### Create a Book

```http
POST /books
Content-Type: application/json

{
  "title": "1984",
  "author": "George Orwell"
}
```

### Create a Review


```http
POST /books/664a55aafab245a447c0a876/reviews
Content-Type: application/json

{
  "rating": 5,
  "comment": "Möhtəşəm əsər!"
}
```
