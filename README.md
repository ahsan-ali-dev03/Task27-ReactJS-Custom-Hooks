# React Custom Hook - useFetch

## Task 27 - ReactJS Custom Hook

This project demonstrates how to create and use a custom React hook named `useFetch` for fetching data from an API.

## Features

- Custom `useFetch` hook
- Accepts a URL parameter
- Fetches data using JavaScript Fetch API
- Handles loading state
- Handles error state
- Displays fetched user data
- Responsive user card layout

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Fetch API

## Custom Hook

The `useFetch` hook returns three values:

```js
const { data, loading, error } = useFetch(API_URL);