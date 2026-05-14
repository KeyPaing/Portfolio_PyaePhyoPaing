import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const { profile } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={profile.avatar} 
                alt={profile.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zinc-900 rounded-2xl -z-10 rotate-12" />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 glow-text">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-sky-400 font-mono mb-6">
                &gt; {profile.title}
              </p>
              <p className="max-w-xl text-lg text-slate-400 mb-8 leading-relaxed">
                {profile.bio}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-sky-500" />
                  <span>{profile.email}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {profile.socials.map((social) => (
                  <Button key={social.name} variant="outline" size="lg" asChild className="rounded-full border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-400 transition-all">
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <social.icon className="w-4 h-4" />
                      {social.name}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-20 w-1/3 h-1/3 bg-sky-500/10 rounded-full blur-[120px] opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-20 w-1/4 h-1/4 bg-teal-500/10 rounded-full blur-[120px] opacity-30 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};
