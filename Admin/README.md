# Velora Admin

Admin panel for the Velora application providing comprehensive management capabilities for business operations.

## Features

### Master Data Management
- **Customer Management** - Add, edit, and manage customer information
- **Item Management** - Product catalog and inventory management
- **Party Management** - Supplier and vendor management
- **UOM Management** - Units of measurement configuration
- **Color Management** - Product color variants
- **Concern Management** - Business concern categories
- **Financial Year Management** - Accounting period setup

### Transaction Management
- **Purchase Entries** - Record and manage purchase transactions
- **Sale Entries** - Process and track sales transactions
- **Quotations** - Generate and manage price quotations

### System Management
- **Trash Management** - Recover or permanently delete records
- **User Authentication** - Secure access control
- **Data Import/Export** - Bulk data operations

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **UI Framework**: Material-UI (MUI) & React Bootstrap
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Forms**: Formik with Yup validation
- **Charts**: ApexCharts, Chart.js, ECharts
- **Authentication**: Firebase Auth with JWT
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
cd frontend
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

## Configuration

### Environment Variables
Create `.env` file in the frontend directory:
```
VITE_API_URL=your_api_url
VITE_FIREBASE_CONFIG=your_firebase_config
```

### Firebase Setup
Configure Firebase authentication and database settings in `src/firebase/`.

## Project Structure

```
Admin/
├── README.md
└── (admin-specific configurations)

frontend/
├── src/
│   ├── pages/view/master/     # Master data components
│   ├── pages/view/party/      # Party management
│   ├── pages/view/quotation/  # Quotation system
│   ├── components/            # Reusable UI components
│   ├── api/                   # API integration
│   └── contexts/              # React contexts
└── package.json
```

## Key Components

- **Master Data**: Customer, Item, UOM, Color, Concern management
- **Transactions**: Purchase/Sale entry forms with validation
- **Quotations**: Quote generation with print functionality
- **Trash Management**: Soft delete and recovery system

## Development Guidelines

- Follow TypeScript best practices
- Use Material-UI components for consistency
- Implement proper error handling
- Add form validation using Formik + Yup
- Maintain responsive design principles

## Support

For technical support or feature requests, contact the development team.