# Velora - Business Management System

A modern React-based business management system for handling sales, inventory, and customer management.

## Features

### 🏠 Dashboard
- Business overview with key metrics
- Sales summary and statistics
- Quick access to all modules

### 📋 Master Data Management
- **Item Master**: Manage products with pricing, tax, and MRP
- **Customer Master**: Customer database with contact information

### 💼 Transaction Management
- **Sales Entry**: Multi-item invoice creation with auto-calculations
- Real-time price and tax calculations
- Customer and item auto-fetch functionality

### 📊 Reports
- **Sales Report**: Comprehensive sales analytics
- Date range filtering
- Customer and item-wise reporting
- Export to PDF and Excel

### 👥 User Management
- User account creation and management
- Active/Inactive user status
- Role-based access control ready

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Material-UI (MUI)
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# or
npm start
```

### Build
```bash
npm run build
```

## Project Structure

```
src/
├── pages/velora/           # Main application pages
│   ├── dashboard/          # Dashboard components
│   ├── master/            # Master data components
│   ├── transactions/      # Transaction components
│   ├── reports/           # Report components
│   └── users/             # User management
├── components/            # Reusable components
├── api/                   # API integration
└── firebase/              # Authentication
```

## Key Features Implementation

### Multi-Item Sales Entry
- Dynamic item addition/removal
- Auto-fetch item details by code
- Real-time calculations (subtotal, tax, discount, total)
- Customer auto-complete by phone

### Master Data Validation
- Duplicate prevention (phone, email)
- Form validation with error messages
- Search and filter functionality

### Responsive Design
- Mobile-friendly interface
- Material-UI components
- Consistent design system

## Development Guidelines

- Follow TypeScript best practices
- Use Material-UI components consistently
- Implement proper error handling
- Add form validation for all inputs
- Maintain responsive design principles

## License

Private - Velora Business Management System