import styled from "styled-components";

interface BadgeProps {
  type: "primary" | "secondary";
}

const Badge = styled.div<BadgeProps>`
  color: ${({ theme, type }) => theme.badge[type].color};
  background-color: ${({ theme, type }) => theme.badge[type].backgroundColor};
  text-align: center;
  padding: 8px;
  margin: 8px 0;
`;

export default Badge;
