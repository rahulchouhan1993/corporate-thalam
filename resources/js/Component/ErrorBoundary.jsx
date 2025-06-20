import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details to an error reporting service or console
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Customize the fallback UI
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
