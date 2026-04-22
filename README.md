# useFetch React Hook

A production-ready custom React hook for fetching data with TypeScript support, automatic caching, error handling, and request cancellation.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

## 🚀 Features

- ✅ **TypeScript Support** - Fully typed with generics for type safety
- ✅ **Loading States** - Built-in loading state management
- ✅ **Error Handling** - Comprehensive error catching and reporting
- ✅ **Smart Caching** - Automatic in-memory caching with expiration
- ✅ **Request Cancellation** - Aborts in-flight requests on unmount
- ✅ **Manual Refetch** - Programmatic refetching capability
- ✅ **Conditional Fetching** - Fetch only when needed
- ✅ **Callback Hooks** - onSuccess and onError callbacks
- ✅ **Zero Dependencies** - Only uses React hooks

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/use-fetch-hook.git

# Navigate to project directory
cd use-fetch-hook

# Install dependencies
npm install

🎯 Usage
Basic Example
typescript
import { useFetch } from './hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const { data, loading, error } = useFetch<User>(
    `https://api.example.com/users/${userId}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{data?.name}</div>;
}
With Caching and Callbacks


# Start development server
npm start
