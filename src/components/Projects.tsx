import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[450px] w-full cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Card className="h-full overflow-hidden border-none shadow-sm bg-slate-900/50 backdrop-blur-sm border border-white/5 flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
            <CardHeader className="flex-none">
              <div className="flex items-center gap-3 mb-2">
                <project.icon className="w-5 h-5 text-sky-400" />
                <CardTitle className="text-xl text-slate-100">{project.title}</CardTitle>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">Summary</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {project.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-3">Skills Gained</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="rounded-md font-mono text-[10px] border-sky-500/30 text-sky-400 uppercase tracking-tighter">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-sky-500 font-mono italic animate-pulse">Click to view responsibilities</p>
            </CardContent>
          </Card>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Card className="h-full overflow-hidden border-none shadow-xl bg-slate-900 backdrop-blur-xl border border-sky-500/30 flex flex-col">
            <CardHeader className="border-b border-white/5 bg-white/5">
              <CardTitle className="text-xl text-sky-400 flex items-center gap-2">
                <project.icon className="w-5 h-5" />
                Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6 flex-1">
              <ul className="space-y-4">
                {project.responsibilities.map((resp: string, i: number) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <span className="text-sky-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <div className="p-4 bg-white/5 text-center">
              <p className="text-xs text-slate-500 font-mono">Click to return</p>
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} project={project} index={index} />
      ))}
    </div>
  );
};
