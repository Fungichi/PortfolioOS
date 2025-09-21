export const ProjectsSection = () => {
  const projects = [
    {
      name: "PortfolioOS",
      status: "ACTIVE",
      tech: "Lovable, Vite, typescript, html, css, js",
      description: "A personal website made with Lovable",
      link: "https://github.com/Fungichi/PortfolioOS",
    },
    {
      name: "Chrobit", 
      status: "COMPLETED",
      tech: "Python curses library",
      description: "Highly customisable binary clock in the terminal",
      link: "https://github.com/Fungichi/Chrobit",
    },
    {
      name: "Noyevon",
      status: "COMPLETED", 
      tech: "Python, subprocesses, sys libraries",
      description: "A script to switch off VeyonService the second it comes online",
      link: "https://github.com/Fungichi/Noyevon",
    },
    {
      name: "Discord bot",
      status: "COMPLETED",
      tech: "python, sqlite3, discord",
      description: "A discord bot to give or take someone's aura",
      link: "https://github.com/Fungichi/Discordbot",
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
              <div>GIT</div>
            </div>
            
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 py-2 hover:bg-muted transition-colors">
                <div className="text-foreground">{project.name.toLowerCase().replace(/\s+/g, '-')}.service</div>
                <div className="text-primary">loaded</div>
                <div className={project.status === 'ACTIVE' ? 'text-primary' : 'text-secondary'}>
                  {project.status.toLowerCase()}
                </div>
                <div className="text-muted-foreground"><a href={project.link} target="_blank">link</a></div>
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
                  <div><span className="text-accent">"link":</span> <a target="_blank" href={project.link}>{project.link}</a></div>
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