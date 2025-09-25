export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Rust", level: 40, label: "LEARNING" },
        { name: "Assembly", level: 0, label: "LEARNING" },
        { name: "HTML", level: 70},
        { name: "CSS", level: 30},      ]
    },
    {
      category: "Frameworks & libraries", 
      skills: [
        { name: "Django", level: 75 },
        { name: "Selenium", level: 80 },
        { name: "Pyautogui", level: 80},
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Godot", level: 65 },
        { name: "Git", level: 40, label: "LEARNING" },
        { name: "Linux", level: 50, label: "LEARNING" },
        { name: "Vscode", level: 75 },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "SQlite", level: 60 },


      ]
    },
  ];

  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="max-w-4xl mx-auto">
        <div className="ascii-arts mb-8">
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
                           
                          </div>
                        </div>
                        
                        <div className="w-16 text-right text-muted-foreground">
                        {skill.label ?? (
                            skill.level >= 90 ? 'EXPERT' : 
                            skill.level >= 80 ? 'ADVANCED' : 
                            skill.level >= 70 ? 'PROFICIENT' :
                            skill.level >= 50 ? 'INTERMEDIATE' : "BEGINNER"
                          
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <br></br>
          <div className="animate-fade-in">
            <span className="text-secondary">$</span> cat skills-note.txt
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