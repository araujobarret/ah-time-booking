import { FunctionComponent, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import ErrorFallback from "./components/core/ErrorFallback";
import LoadingIndicator from "./components/core/LoadingIndicator";
import HomeScreen from "./screens/Home";
import { theme } from "./theme";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingIndicator />}>
          <HomeScreen />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
