import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('Book Review API (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    let bookId: number;

    it('/books (POST)', async () => {
        const response = await request(app.getHttpServer())
            .post('/books')
            .send({ title: 'Test Book', author: 'Test Author' });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Book');

        bookId = response.body.id;
    });

    it('/books (GET)', async () => {
        const response = await request(app.getHttpServer()).get('/books');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('/books/:id/reviews (POST)', async () => {
        const response = await request(app.getHttpServer())
            .post(`/books/${bookId}/reviews`)
            .send({ rating: 4, comment: 'Yaxşı kitab idi' });

        expect(response.status).toBe(201);
        expect(response.body.rating).toBe(4);
    });

    it('/books/:id (GET) with average rating', async () => {
        const response = await request(app.getHttpServer()).get(`/books/${bookId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('averageRating');
        expect(response.body.reviews.length).toBeGreaterThan(0);
    });

    it('/books (GET) filter by rating > 3 (manual test)', async () => {
        const response = await request(app.getHttpServer()).get('/books');
        expect(response.status).toBe(200);
        expect((response.body as any[]).some((book: any) => book.averageRating >= 4)).toBeTruthy();
    });
});
