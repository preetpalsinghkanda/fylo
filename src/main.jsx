import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error" role="alert">
          <div className="app-error__panel">
            <img src="/favicon.svg" alt="" />
            <h1>Fylo couldn’t load</h1>
            <p>Please refresh the page and try again.</p>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

const rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </StrictMode>,
)
