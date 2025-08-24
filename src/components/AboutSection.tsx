import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, User, Code, Heart } from 'lucide-react';

export const AboutSection = () => {
  const handleResumeDownload = () => {
    // Create a sample resume download - in real app this would link to actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume path
    link.download = 'Alex_Johnson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and my passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - About content */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">Who I Am</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate software developer with 1+ years of experience creating 
                    web applications and solving complex problems. I am a certified Web developer by Apna College and have been continuously learning and adapting to new technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">What I Do</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in full-stack web development, with expertise in React, JavaScript, Node.js, 
                    and modern JavaScript frameworks. I enjoy creating responsive, accessible, 
                    and performant applications that provide excellent user experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">What I Love</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond coding, I'm passionate about open-source contributions, mentoring 
                    fellow developers, and staying updated with the latest tech trends. I believe 
                    in writing clean, maintainable code and following best practices.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Stats and Resume */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-secondary border-border/50 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-secondary border-border/50 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-secondary border-border/50 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-secondary border-border/50 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </CardContent>
                </Card>
              </div>

              {/* Resume Download */}
              <Card className="bg-gradient-primary border-0 text-white hover-glow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Download My Resume</h3>
                  <p className="text-white/80 mb-6">
                    Get a detailed overview of my experience, skills, and education
                  </p>
                  <Button 
                    onClick={handleResumeDownload}
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 transition-smooth font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};