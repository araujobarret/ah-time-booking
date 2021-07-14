import { FunctionComponent, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/core/ErrorFallback";
import LoadingIndicator from "./components/core/LoadingIndicator";
import HomeScreen from "./screens/Home";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingIndicator />}>
        <HomeScreen />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
