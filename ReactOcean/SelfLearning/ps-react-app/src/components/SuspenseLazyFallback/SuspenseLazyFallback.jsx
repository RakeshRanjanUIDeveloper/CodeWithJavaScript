import React, { lazy, Suspense, useState } from "react";
import Home from "./Home";
import Spinner from "./Spinner";
import ErrorBoundary from "../ErrorBoundaryWithSuspense/ErrorBoundary";

const Profile = lazy(() => import("./Profile"));
const Analytics = lazy(() => import("./Analytics"));

const SuspenseLazyFallback = () => {
  const [activeTab, setActiveTab] = useState("home");
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "profile":
        return (
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Profile />
            </Suspense>
          </ErrorBoundary>
        );
      case "analytics":
        return (
          <Suspense fallback={<Spinner />}>
            <Analytics />
          </Suspense>
        );
      default:
        return <Home />;
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 React Suspense Demo App</h1>
      <nav style={{ marginBottom: "16px" }}>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("analytics")}>Analytics</button>
      </nav>
      <hr />
      {renderContent()}
    </div>
  );
};

export default SuspenseLazyFallback;
