# Shipping MVP

A full-stack shipping application with Next.js frontend and FastAPI backend.

## Project Structure

```
shipping-mvp/
├── frontend/           # Next.js frontend application
│   ├── src/           # Frontend source code
│   ├── public/        # Static files
│   └── package.json   # Frontend dependencies
└── backend/           # FastAPI backend application
    ├── app/           # Backend source code
    │   ├── models/    # Data models
    │   ├── routes/    # API routes
    │   └── config/    # Configuration
    └── requirements.txt # Backend dependencies
```

## Technology Stack

### Frontend
- Next.js 15.1
- TypeScript
- TailwindCSS
- React Query
- Zod for validation

### Backend
- FastAPI
- MongoDB with Beanie ODM
- Pydantic for validation
- Motor for async MongoDB

## Setup

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Environment Variables

#### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### Backend (.env)
```
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=shipping_mvp
API_HOST=0.0.0.0
API_PORT=8000
CORS_ORIGINS=http://localhost:3000
```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Features

- Create shipments with address and package details
- Validate addresses and package information
- Store shipment data in MongoDB
- RESTful API with async operations
- Type-safe frontend and backend
- Modern, responsive UI

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 