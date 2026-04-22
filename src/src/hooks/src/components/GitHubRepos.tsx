import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  homepage: string | null;
  private: boolean;
}

interface GitHubRepoResponse extends Array<Repository> {}

const GitHubRepos: React.FC<{ username: string }> = ({ username }) => {
  const [currentUsername, setCurrentUsername] = useState(username);
  const [inputUsername, setInputUsername] = useState(username);

  const {
    data: repos,
    loading,
    error,
    refetch,
  } = useFetch<GitHubRepoResponse>(
    currentUsername ? `https://api.github.com/users/${currentUsername}/repos?sort=updated&per_page=100` : null,
    {
      cacheDuration: 5 * 60 * 1000,
      onError: (err) => console.error('Failed to fetch repos:', err),
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      setCurrentUsername(inputUsername.trim());
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Repositories</h3>
          <p className="text-red-600">{error.message}</p>
          <button
            onClick={() => refetch()}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {currentUsername}'s GitHub Repositories
        </h1>
        <p className="text-gray-600">
          {repos?.length || 0} repositories found
        </p>
        <button
          onClick={() => refetch()}
          className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          ↻ Refresh
        </button>
      </div>

      {repos && repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors truncate"
                  >
                    {repo.name}
                  </a>
                  {repo.private && (
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      Private
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {repo.description || 'No description provided'}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-700">{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">⭐</span>
                    <span className="text-gray-700">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">🍴</span>
                    <span className="text-gray-700">{repo.forks_count}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </div>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-blue-600 hover:text-blue-800"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No repositories found</p>
        </div>
      )}
    </div>
  );
};

export default GitHubRepos;
