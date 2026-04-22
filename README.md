# useFetch - Production React Hook for Data Fetching

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A type-safe React hook for data fetching with caching, error handling, and request cancellation**

[Features](#features) • [Installation](#installation) • [API](#api-reference) • [Examples](#examples) • [License](#license)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Source Code](#source-code)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

`useFetch` is a production-ready custom React hook that solves common data fetching challenges. Built with TypeScript, it provides automatic caching, loading states, error handling, and request cancellation out of the box.

**Key Benefits:**
- Zero external dependencies
- Full TypeScript support with generics
- Intelligent caching with TTL
- Race condition safe
- Simple, predictable API

---

## Features

| Feature | Description |
|---------|-------------|
| **TypeScript** | Full generic support for type safety |
| **Caching** | In-memory cache with configurable TTL |
| **Loading States** | Built-in loading state management |
| **Error Handling** | Comprehensive error catching |
| **Request Cancellation** | Aborts in-flight requests on unmount |
| **Conditional Fetching** | Fetch only when needed |
| **Manual Refetch** | Programmatic refresh capability |
| **Callbacks** | onSuccess and onError hooks |

---

## Installation

```bash
# Clone repository
git clone https://github.com/yourusername/use-fetch-hook.git
cd use-fetch-hook

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
