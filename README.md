# GreeNet

GreeNet is a modern web application built with Next.js that provides weather information and community features. The application uses MongoDB for data storage and implements secure authentication using NextAuth.js.

## Features

- 🌤️ Real-time weather information
- 📊 Weather forecasts and statistics
- 👥 User authentication (Email/Password and Google OAuth)
- 🔒 Secure password hashing
- 📱 Responsive design
- 🌙 Dark mode support

## Tech Stack

- **Frontend:**

  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - React Icons
  - Recharts (for weather charts)

- **Backend:**
  - Next.js API Routes
  - MongoDB with Mongoose
  - NextAuth.js for authentication
  - bcrypt for password hashing

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- MongoDB Atlas account
- Google OAuth credentials (for Google Sign-in)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
WEATHER_API_KEY=your_weather_api_key
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/greenet.git
cd greenet
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
greenet/
├── app/
│   ├── api/           # API routes
│   ├── dashboard/     # Dashboard pages
│   ├── login/         # Authentication pages
│   └── signup/        # Registration pages
├── components/        # React components
├── lib/              # Utility functions
├── models/           # MongoDB models
└── public/           # Static assets
```

## API Routes

- `/api/auth/signup` - User registration
- `/api/auth/[...nextauth]` - Authentication endpoints
- `/api/weather/current` - Current weather data
- `/api/weather/forecast` - Weather forecast data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Charts from [Recharts](https://recharts.org/)
