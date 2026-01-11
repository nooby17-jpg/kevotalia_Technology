import React from "react";
import "./../styles/errorBoundary.css";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("UI Crash:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-bg" />

          <div className="error-content">
            <span className="error-code">500</span>

            <h1>Something went wrong</h1>

            <p>
              Our system hit an unexpected issue.
              <br />
              Don’t worry — we’re already on it.
            </p>

            <div className="error-actions">
              <button className="btn-primary" onClick={this.handleReload}>
                Reload Page
              </button>

              <button className="btn-secondary" onClick={this.handleHome}>
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
