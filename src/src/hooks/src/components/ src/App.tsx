import React from 'react';
import GitHubRepos from './components/GitHubRepos';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <GitHubRepos username="vercel" />
    </div>
  );
}

export default App;
