import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

// Add proper theme typing
interface ThemeType {
  colors: {
    coffee: {
      light: string;
      medium: string;
      dark: string;
    };
  };
}

interface StyledButtonProps extends ButtonProps {
  theme: ThemeType;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  ${(props) => {
    switch (props.size) {
      case "small":
        return "padding: 8px 16px; font-size: 14px;";
      case "large":
        return "padding: 16px 32px; font-size: 18px;";
      default:
        return "padding: 12px 24px; font-size: 16px;";
    }
  }}

  ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: ${theme.colors.coffee.light};
          color: ${theme.colors.coffee.dark};
          border: none;
          &:hover:not(:disabled) {
            background-color: ${theme.colors.coffee.medium};
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.coffee.dark};
          color: ${theme.colors.coffee.light};
          border: 1px solid ${theme.colors.coffee.medium};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.coffee.medium};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${theme.colors.coffee.light};
          border: 2px solid ${theme.colors.coffee.light};
          &:hover:not(:disabled) {
            background-color: rgba(212, 165, 116, 0.1);
          }
        `;
      default:
        return `
          background-color: ${theme.colors.coffee.light};
          color: ${theme.colors.coffee.dark};
          border: none;
          &:hover:not(:disabled) {
            background-color: ${theme.colors.coffee.medium};
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `;
    }
  }}
`;
const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  type = "button",
  className,
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
