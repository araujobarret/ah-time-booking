import { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const LoadingIndicator: FunctionComponent = () => (
  <Wrapper>
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="https://www.w3.org/2000/svg"
      stroke="#2565CB"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".15" cx="18" cy="18" r="18" stroke="#555" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </Wrapper>
);

export default LoadingIndicator;
