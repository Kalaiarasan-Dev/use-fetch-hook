# useFetch - Production React Hook for Data Fetching

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@kalaiarasan/use-fetch-hook)](https://www.npmjs.com/package/@kalaiarasan/use-fetch-hook)

A type-safe React hook for data fetching with caching, error handling, and request cancellation.

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
- [Examples](#-examples)
- [Project Structure](#-project-structure)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

## 🔭 Overview

`useFetch` is a production-ready custom React hook that solves common data fetching challenges. Built with TypeScript, it provides automatic caching, loading states, error handling, and request cancellation out of the box.

### Key Benefits

- **Zero external dependencies** - Pure React implementation
- **Full TypeScript support** - Complete type safety with generics
- **Intelligent caching** - In-memory cache with configurable TTL
- **Race condition safe** - Automatic request cancellation
- **Simple, predictable API** - Easy to learn, powerful to use

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔷 **TypeScript** | Full generic support for type safety |
| 💾 **Caching** | In-memory cache with configurable TTL |
| ⏳ **Loading States** | Built-in loading state management |
| ⚠️ **Error Handling** | Comprehensive error catching |
| 🛑 **Request Cancellation** | Aborts in-flight requests on unmount |
| 🎯 **Conditional Fetching** | Fetch only when needed |
| 🔄 **Manual Refetch** | Programmatic refresh capability |
| 📞 **Callbacks** | `onSuccess` and `onError` hooks |
| ⏱️ **Timeout Support** | Configurable request timeout |
| 🔍 **Stale Detection** | Check if cached data is stale |

## 📦 Installation

```bash
# npm
npm install @kalaiarasan/use-fetch-hook

# yarn
yarn add @kalaiarasan/use-fetch-hook

# pnpm
pnpm add @kalaiarasan/use-fetch-hook
