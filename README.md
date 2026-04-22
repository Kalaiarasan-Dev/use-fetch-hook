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

const { data, loading, error, refetch } = useFetch<User>(
  'https://api.example.com/users/123',
  {
    cacheDuration: 10 * 60 * 1000, // Cache for 10 minutes
    onSuccess: (data) => console.log('Data loaded:', data),
    onError: (error) => console.error('Failed to load:', error),
  }
);
Conditional Fetching
typescript
const { data } = useFetch<User>(
  shouldFetch ? 'https://api.example.com/users/123' : null,
  { enabled: shouldFetch }
);
🔧 API Reference
useFetch<T>(url, options)
Parameters
Parameter	Type	Description
url	string | null	The API endpoint to fetch from
options	UseFetchOptions	Configuration options (optional)
Options
Option	Type	Default	Description
cacheDuration	number	300000 (5 min)	Cache duration in milliseconds
enabled	boolean	true	Auto-fetch when component mounts
onSuccess	(data: T) => void	undefined	Callback on successful fetch
onError	(error: Error) => void	undefined	Callback on fetch error
Return Value
Property	Type	Description
data	T | null	Fetched data
loading	boolean	Loading state indicator
error	Error | null	Error object if fetch failed
refetch	() => Promise<void>	Manually trigger a new fetch
🎨 Example Application
This repository includes a complete example that displays GitHub repositories in a responsive grid layout using Tailwind CSS.

Features of the Example
🔍 Search - Search for any GitHub user's repositories

📱 Responsive - Works on mobile, tablet, and desktop

🎨 Modern UI - Clean card design with Tailwind CSS

⚡ Performance - Caching reduces API calls

🔄 Refresh - Manual refresh button

⭐ Repository Stats - Stars, forks, language, and update date

Running the Example
bash
npm start
Then open http://localhost:3000 to view the application.

🧠 How It Works
Caching Strategy
The hook implements an in-memory cache with time-based expiration:

typescript
const cache = new Map<string, CacheItem<T>>();

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}
Each successful response is cached with an expiration timestamp

Subsequent requests check the cache before making network calls

Cache is cleared when data expires or page is refreshed

Request Cancellation
Uses the AbortController API to cancel pending requests:

Cancels requests when component unmounts

Cancels previous requests when new ones are made

Prevents memory leaks and race conditions

Type Safety
The hook is fully generic, allowing you to specify the expected data type:

typescript
const { data } = useFetch<User[]>('/api/users');
// data is typed as User[] | null
📁 Project Structure
text
use-fetch-hook/
├── src/
│   ├── hooks/
│   │   └── useFetch.ts          # Main hook implementation
│   ├── components/
│   │   └── GitHubRepos.tsx      # Example component
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Tailwind imports
│   └── index.tsx                 # Application entry point
├── public/
│   └── index.html                # HTML template
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
└── README.md                     # Documentation
🛠️ Built With
React 18 - UI Framework

TypeScript - Type Safety

Tailwind CSS - Styling

GitHub API - Data Source

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📧 Contact
Your Name - @yourtwitter - email@example.com

Project Link: https://github.com/yourusername/use-fetch-hook

🙏 Acknowledgments
React team for the amazing hooks API

GitHub for providing the free API

Tailwind CSS for the utility-first CSS framework

⚡ Performance Tips
Adjust Cache Duration: Set appropriate cacheDuration based on how frequently your data changes

Conditional Fetching: Use the enabled option to prevent unnecessary API calls

Manual Refetch: Use refetch() only when user explicitly requests fresh data

Type Your Data: Always provide TypeScript interfaces for better IDE support and type safety

🐛 Common Issues
Rate Limiting
GitHub API has rate limits for unauthenticated requests (60 requests per hour). For production apps, consider adding authentication:

typescript
const { data } = useFetch('https://api.github.com/user/repos', {
  // Add your GitHub token in headers
});
CORS Issues
If you're developing locally and facing CORS issues, consider using a proxy or CORS-enabled browser extension.

Made with ❤️ by [Your Name]

text

## Additional Files (Optional)

### LICENSE
```markdown
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Deployment Instructions
Deploy to Vercel
bash
npm install -g vercel
vercel
Deploy to Netlify
bash
npm run build
# Drag and drop the 'build' folder to Netlify
Build for Production
bash
npm run build
The build artifacts will be stored in the build/ directory.
