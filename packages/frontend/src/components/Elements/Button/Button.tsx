import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variants = {
  primary: "bg-blue-600 text-white",
  danger: "bg-red-600 text-white",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${variants[variant]} ${sizes[size]}  border border-gray-300 rounded  hover:opacity-80 ${className}`}
    >
      {isLoading ? <div>loading...</div> : <>{children}</>}
    </button>
  );
};
