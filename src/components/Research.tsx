import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export const Research = () => {
  return (
    <div className="space-y-4">
      {portfolioData.research.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="border-none shadow-sm group-hover:shadow-md bg-slate-900/50 backdrop-blur-sm border border-white/5 group-hover:bg-slate-800/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-100 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 italic text-sm">{item.publication}, {item.year}</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-sky-400 transition-colors" />
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export const Certifications = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-12">
      {portfolioData.certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl shadow-sm"
        >
          <div className="p-3 bg-amber-500/10 rounded-xl">
            <cert.icon className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-100">{cert.name}</p>
            <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
