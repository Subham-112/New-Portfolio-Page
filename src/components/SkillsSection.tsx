import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Smartphone, Settings, Zap } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: <Globe className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: <Code className="w-6 h-6" />,
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Microservices'],
    color: 'text-green-500',
  },
  {
    id: 3,
    title: 'Database & Storage',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'AWS S3', 'Prisma'],
    color: 'text-purple-500',
  },
  {
    id: 4,
    title: 'Mobile Development',
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'PWA'],
    color: 'text-pink-500',
  },
  {
    id: 5,
    title: 'DevOps & Tools',
    icon: <Settings className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jenkins', 'Linux', 'Nginx', 'Vercel'],
    color: 'text-orange-500',
  },
  {
    id: 6,
    title: 'Other Skills',
    icon: <Zap className="w-6 h-6" />,
    skills: ['Agile', 'Scrum', 'Testing', 'Jest', 'Cypress', 'Figma', 'UI/UX Design'],
    color: 'text-cyan-500',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card 
                key={category.id} 
                className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover-lift"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${category.color} p-2 rounded-lg bg-primary/10`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-smooth text-xs py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-secondary border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Always <span className="gradient-text">Learning</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology evolves rapidly, and I'm committed to continuous learning and staying updated 
                  with the latest trends, frameworks, and best practices in software development. I believe 
                  in writing clean, efficient, and maintainable code that scales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};