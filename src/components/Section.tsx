import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight glow-text">{title}</h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
};
