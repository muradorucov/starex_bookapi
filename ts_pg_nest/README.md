#  Book Review API


## Technologies

- Node.js
- TypeScript
- NestJS
- PostgreSQL
- NeonDB
- TypeORM
- Jest + Supertest
- Swagger (OpenAPI)

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
DB_NAME=book
DB_USER=neondb_owner
DB_PASSWORD=npg_Oc5QLajGKv9b
DB_HOST=ep-muddy-star-a9a0yc81-pooler.gwc.azure.neon.tech
DB_PORT=5432
DB_SSL=true
PORT=3000
```

### 4. Run Server

```bash
npm run start:dev

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

## Swagger Documentation
Link => [http://localhost:3000/api](http://localhost:3000/api)

Through Swagger documentation, you can:
- Test the API endpoints
- View DTO schemas
- Easily manage input parameters

## E2E Testing

### To run the tests:

```bash
npm run test:e2e
```

### The tests cover the following functionalities:
- Creating a book
- Listing all books and retrieving by ID
- Adding a review to a book
- Calculating average rating
- Filtering by rating (?ratingMin=...)


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
POST /books/2/reviews
Content-Type: application/json

{
  "rating": 5,
  "comment": "Möhtəşəm əsər!"
}
```
