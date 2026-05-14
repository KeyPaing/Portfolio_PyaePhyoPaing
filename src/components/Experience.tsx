import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Experience = () => {
  return (
    <div className="space-y-8">
      {portfolioData.experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-900/50 backdrop-blur-sm border border-white/5">
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="p-3 bg-sky-500/10 rounded-xl">
                <exp.icon className="w-6 h-6 text-sky-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <CardTitle className="text-xl text-slate-100">{exp.role}</CardTitle>
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 font-medium mt-1">{exp.company}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-md font-normal bg-slate-800 text-sky-300 border-none">
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

export const Education = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {portfolioData.education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full border-none shadow-sm bg-slate-900/50 backdrop-blur-sm border border-white/5">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-teal-500/10 rounded-xl">
                <edu.icon className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <CardTitle className="text-lg text-slate-100">{edu.institution}</CardTitle>
                <p className="text-xs font-mono text-teal-400">{edu.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-slate-200 mb-2">{edu.degree}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{edu.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
