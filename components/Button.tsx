import React from 'react';

// DEFINING PROPS
// Props are like arguments passed to a function.
// Here we define what configuration this Button accepts.
interface ButtonProps {
  children: React.ReactNode; // The text or content inside the button
  onClick?: () => void;      // Function to run when clicked (optional)
  variant?: 'primary' | 'secondary' | 'outline'; // Visual style
  href?: string;             // If provided, renders as a link <a> tag
  className?: string;        // Allow extra tailwind classes
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', // Default value
  href,
  className = ''
}) => {
  
  // Dynamic class generation based on 'variant' prop
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 ease-in-out cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-800 shadow-sm",
    secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300",
    outline: "border border-stone-300 text-textMain hover:border-primary hover:text-primary"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // RENDER LOGIC
  // If 'href' is provided, we return an <a> tag. Otherwise, a <button>.
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};