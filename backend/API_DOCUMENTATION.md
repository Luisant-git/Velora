# Velora Multi-Tenant Backend API

## Swagger Documentation

Once the server is running, you can access the interactive API documentation at:
- **Swagger UI**: http://localhost:3001/api

## Setup

1. Install dependencies:
```bash
npm install
```

2. Generate Prisma client:
```bash
npx prisma generate
```

3. Run database migrations:
```bash
npx prisma db push
```

4. Start the server:
```bash
npm run start:dev
```

## API Endpoints

### Admin APIs

#### 1. Admin Register
- **POST** `/admin/register`
- **Body:**
```json
{
  "email": "admin@example.com",
  "name": "Admin Name",
  "password": "password123",
  "isActive": true
}
```

#### 2. Admin Login
- **POST** `/admin/login`
- **Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

#### 3. Create Company (Admin only)
- **POST** `/admin/create-company`
- **Headers:** `Authorization: Bearer <admin_token>`
- **Body:**
```json
{
  "email": "company@example.com",
  "name": "Company Name",
  "password": "password123",
  "isActive": true
}
```

### Company APIs

#### 1. Company Login
- **POST** `/company/login`
- **Body:**
```json
{
  "email": "company@example.com",
  "password": "password123"
}
```

### Item Master APIs (Company only)

#### 2. Create Item
- **POST** `/company/items`
- **Headers:** `Authorization: Bearer <company_token>`
- **Body:**
```json
{
  "itemCode": "ITEM001",
  "itemName": "Sample Item",
  "tax": 18.0,
  "sellingRate": 100.0,
  "mrp": 120.0
}
```

#### 3. Get All Items
- **GET** `/company/items`
- **Headers:** `Authorization: Bearer <company_token>`

#### 4. Get Item by ID
- **GET** `/company/items/:id`
- **Headers:** `Authorization: Bearer <company_token>`

#### 5. Update Item
- **PUT** `/company/items/:id`
- **Headers:** `Authorization: Bearer <company_token>`
- **Body:**
```json
{
  "itemName": "Updated Item Name",
  "sellingRate": 110.0
}
```

#### 6. Delete Item
- **DELETE** `/company/items/:id`
- **Headers:** `Authorization: Bearer <company_token>`

### Customer Master APIs (Company only)

#### 7. Create Customer
- **POST** `/company/customers`
- **Headers:** `Authorization: Bearer <company_token>`
- **Body:**
```json
{
  "name": "Customer Name",
  "phone": "1234567890",
  "email": "customer@example.com"
}
```

#### 8. Get All Customers
- **GET** `/company/customers`
- **Headers:** `Authorization: Bearer <company_token>`

#### 9. Get Customer by ID
- **GET** `/company/customers/:id`
- **Headers:** `Authorization: Bearer <company_token>`

#### 10. Update Customer
- **PUT** `/company/customers/:id`
- **Headers:** `Authorization: Bearer <company_token>`
- **Body:**
```json
{
  "name": "Updated Customer Name",
  "phone": "9876543210"
}
```

#### 11. Delete Customer
- **DELETE** `/company/customers/:id`
- **Headers:** `Authorization: Bearer <company_token>`

### Sales APIs (Company only)

#### 12. Create Sale Entry
- **POST** `/company/sales`
- **Headers:** `Authorization: Bearer <company_token>`
- **Body:**
```json
{
  "customerId": "customer_id_here",
  "items": [
    {
      "itemId": "item_id_here",
      "quantity": 2
    }
  ],
  "discount": 10.0,
  "totalAmount": 200.0
}
```

#### 13. Get Sales Report
- **GET** `/company/sales`
- **Headers:** `Authorization: Bearer <company_token>`

## Multi-Tenancy

Each company gets its own database when created by an admin. The system automatically:
1. Creates a unique database name
2. Sets up the database schema
3. Routes company requests to their specific database

## Authentication

- Admin and Company tokens are JWT-based
- Tokens expire in 24 hours
- Include `Authorization: Bearer <token>` header for protected routes