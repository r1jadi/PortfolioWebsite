import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center p-4 bg-red-50 text-red-900">
                    <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl border border-red-200">
                        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            ⚠️ Something went wrong
                        </h1>
                        <p className="mb-4 text-gray-700">The application crashed. Here is the error details:</p>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm font-mono mb-6">
                            <p className="font-bold text-red-400">{this.state.error && this.state.error.toString()}</p>
                            <pre className="mt-2 text-gray-400">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
