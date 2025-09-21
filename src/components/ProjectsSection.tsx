export const ProjectsSection = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      status: "ACTIVE",
      tech: "React, Node.js, MongoDB",
      description: "Full-stack e-commerce solution with real-time inventory",
    },
    {
      name: "Task Management API", 
      status: "COMPLETED",
      tech: "Python, FastAPI, PostgreSQL",
      description: "RESTful API for project and task management",
    },
    {
      name: "Chat Application",
      status: "ACTIVE", 
      tech: "Next.js, Socket.io, Redis",
      description: "Real-time messaging with file sharing capabilities",
    },
    {
      name: "Data Visualization Dashboard",
      status: "COMPLETED",
      tech: "Vue.js, D3.js, Express",
      description: "Interactive dashboard for business analytics",
    },
  ];

  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="max-w-5xl mx-auto">
        <div className="ascii-art mb-8">
{`
╔══════════════════════════════════════════════════════════════════════════════╗
║                                  PROJECTS                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝
`}
        </div>
        
        <div className="boot-text space-y-4">
          <div className="animate-fade-in">
            <span className="text-secondary">$</span> systemctl list-units --type=service
          </div>
          
          <div className="mt-4">
            <div className="grid grid-cols-4 gap-4 pb-2 border-b border-primary text-secondary font-bold">
              <div>UNIT</div>
              <div>LOAD</div>
              <div>ACTIVE</div>
              <div>SUB</div>
            </div>
            
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 py-2 hover:bg-muted transition-colors">
                <div className="text-foreground">{project.name.toLowerCase().replace(/\s+/g, '-')}.service</div>
                <div className="text-primary">loaded</div>
                <div className={project.status === 'ACTIVE' ? 'text-primary' : 'text-secondary'}>
                  {project.status.toLowerCase()}
                </div>
                <div className="text-muted-foreground">running</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <span className="text-secondary">$</span> cat projects.json | jq '.'
          </div>
          
          <div className="pl-4 space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-primary p-4">
                <div className="text-secondary mb-2">// Project {index + 1}</div>
                <div className="space-y-1">
                  <div><span className="text-accent">"name":</span> "{project.name}",</div>
                  <div><span className="text-accent">"status":</span> "{project.status}",</div>
                  <div><span className="text-accent">"technologies":</span> "{project.tech}",</div>
                  <div><span className="text-accent">"description":</span> "{project.description}"</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-secondary">user@portfolio:~/projects$</span>
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