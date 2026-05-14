import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {portfolioData.skills.technical.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full border-none shadow-sm bg-slate-900/50 backdrop-blur-sm border border-white/5">
            <CardHeader>
              <CardTitle className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-md px-3 py-1 text-xs font-mono bg-slate-800 text-slate-300 border border-white/5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Languages = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-12">
      {portfolioData.skills.languages.map((lang, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/5"
        >
          <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-mono font-bold text-sm">
            {lang.name[0]}
          </div>
          <div>
            <p className="font-bold text-slate-100">{lang.name}</p>
            <p className="text-[10px] font-mono text-teal-500 uppercase tracking-widest">{lang.level}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
