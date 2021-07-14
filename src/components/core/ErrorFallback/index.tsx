import { FunctionComponent } from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.warn(error);
  return (
    <div>
      <p>Sorry, something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
export default ErrorFallback;
