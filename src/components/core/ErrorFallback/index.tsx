import { FunctionComponent } from "react";
import styled from "styled-components";
import { FallbackProps } from "react-error-boundary";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const ErrorFallback: FunctionComponent<FallbackProps> = ({ error }) => {
  console.warn(error);
  return (
    <Wrapper>
      <p>Sorry, something went wrong</p>
      <pre>{error.message}</pre>
    </Wrapper>
  );
};
export default ErrorFallback;
