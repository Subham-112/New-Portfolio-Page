import { Button } from '@/components/ui/button';
import { TypewriterEffect } from './TypewriterEffect';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/Profie.jpg';

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 -z-10" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-primary/20 shadow-glow hover-lift"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Subham Sahu</span>
          </h1>

          {/* Typewriter effect */}
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="text-muted-foreground mr-4">I'm a</span>
            <TypewriterEffect 
              words={['Programmer', 'Web Developer', 'Software Engineer']}
              typeSpeed={100}
              deleteSpeed={50}
              delayBetweenWords={2000}
            />
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly applications 
            that solve real-world problems. I love turning ideas into reality through code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-all duration-300 text-white font-semibold px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 hover:text-blue-500 transition-smooth px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-blue-500 hover-lift">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-blue-500 hover-lift">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-blue-500 hover-lift">
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNextSection}
              className="animate-bounce hover:bg-primary/10"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};