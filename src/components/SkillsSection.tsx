export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
      ]
    },
    {
      category: "Frontend", 
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Django", level: 75 },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "MySQL", level: 70 },
      ]
    },
  ];

  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="max-w-4xl mx-auto">
        <div className="ascii-art mb-8">
{`
╔══════════════════════════════════════════════════════════════════════════════╗
║                                   SKILLS                                     ║
╚══════════════════════════════════════════════════════════════════════════════╝
`}
        </div>
        
        <div className="boot-text space-y-4">
          <div className="animate-fade-in">
            <span className="text-secondary">$</span> top -b -n1 | grep -E "PID|skills"
          </div>
          
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <div className="text-secondary border-b border-primary pb-1">
                  // {category.category.toUpperCase()} PROCESSES
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-4 text-muted-foreground">{skillIndex + 1}</div>
                        <div className="w-32">{skill.name}</div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-64 bg-muted h-4 relative">
                          <div 
                            className="bg-primary h-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs">
                            {skill.level}%
                          </div>
                        </div>
                        
                        <div className="w-16 text-right text-muted-foreground">
                          {skill.level >= 90 ? 'EXPERT' : 
                           skill.level >= 80 ? 'ADVANCED' : 
                           skill.level >= 70 ? 'PROFICIENT' : 'LEARNING'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <span className="text-secondary">$</span> neofetch
          </div>
          
          <div className="pl-4 grid grid-cols-2 gap-8 mt-4">
            <div className="ascii-art text-xs">
{`
       _____ 
      /     \\
     | () () |
      \\  ^  /
       |||||
       |||||
`}
            </div>
            <div className="space-y-1 text-sm">
              <div><span className="text-accent">OS:</span> DeveloperOS 2024</div>
              <div><span className="text-accent">Kernel:</span> Brain v2.0</div>
              <div><span className="text-accent">Uptime:</span> {Math.floor(Math.random() * 1000) + 5000} hours</div>
              <div><span className="text-accent">Shell:</span> creativity/bash</div>
              <div><span className="text-accent">IDE:</span> VS Code, NeoVim</div>
              <div><span className="text-accent">Coffee:</span> 100% dependency</div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-secondary">user@portfolio:~/skills$</span>
            <div className="cursor-line ml-2"></div>
          </div>
        </div>
        
        <div className="mt-8 text-muted-foreground boot-text text-center">
          Press ESC to return to main menu
        </div>
      </div>
    </div>
  );
};