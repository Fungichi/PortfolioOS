export const AboutSection = () => {
  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="max-w-4xl mx-auto">
        <div className="ascii-art mb-8">
{`
╔══════════════════════════════════════════════════════════════════════════════╗
║                                    ABOUT                                     ║
╚══════════════════════════════════════════════════════════════════════════════╝
`}
        </div>
        
        <div className="boot-text space-y-4">
          <div className="animate-fade-in">
            <span className="text-secondary">$</span> whoami
          </div>
          
          <div className="pl-4 space-y-2">
            <div>Name: [Your Name]</div>
            <div>Role: Full Stack Developer</div>
            <div>Location: [Your City, Country]</div>
            <div>Shell: /bin/bash</div>
            <div>Uptime: [Years] years in development</div>
          </div>
          
          <div className="mt-6">
            <span className="text-secondary">$</span> cat biography.txt
          </div>
          
          <div className="pl-4 leading-relaxed">
            Passionate developer with expertise in modern web technologies.
            I enjoy building scalable applications and exploring new frameworks.
            When not coding, you can find me contributing to open source projects
            or learning about emerging technologies.
          </div>
          
          <div className="mt-6">
            <span className="text-secondary">$</span> ls -la interests/
          </div>
          
          <div className="pl-4 font-mono text-sm">
            <div>drwxr-xr-x  2 user user 4096 Jan  1 00:00 .</div>
            <div>drwxr-xr-x  3 user user 4096 Jan  1 00:00 ..</div>
            <div>-rw-r--r--  1 user user   42 Jan  1 00:00 web-development</div>
            <div>-rw-r--r--  1 user user   37 Jan  1 00:00 open-source</div>
            <div>-rw-r--r--  1 user user   29 Jan  1 00:00 automation</div>
            <div>-rw-r--r--  1 user user   33 Jan  1 00:00 machine-learning</div>
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-secondary">user@portfolio:~$</span>
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