import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string; // Optional section title
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, title }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="font-serif text-3xl md:text-4xl text-textMain mb-12 border-l-4 border-primary pl-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};