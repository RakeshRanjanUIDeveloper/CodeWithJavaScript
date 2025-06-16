import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary';

const LazyComponent = lazy(() => import('./LazyComponent'));

const ErrorBoundaryWithSuspense = () => {
  return (
    <div>
        <h1>App with Suspense and Error Boundary</h1>
        <ErrorBoundary>
            <Suspense fallback={<div>Loading Component...</div>}>
                <LazyComponent />
            </Suspense>
        </ErrorBoundary>
    </div>
  )
}

export default ErrorBoundaryWithSuspense