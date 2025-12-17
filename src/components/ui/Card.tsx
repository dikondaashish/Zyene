import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover ? 'hover:-translate-y-1 hover:shadow-card-hover' : '';
  
  return (
    <div className={`bg-white rounded-xl shadow-card transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
