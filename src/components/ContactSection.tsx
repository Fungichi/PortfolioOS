export const ContactSection = () => {
  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="max-w-4xl mx-auto">
        <div className="ascii-art mb-8">
{`
╔══════════════════════════════════════════════════════════════════════════════╗
║                                  CONTACT                                     ║
╚══════════════════════════════════════════════════════════════════════════════╝
`}
        </div>
        
        <div className="boot-text space-y-4">
          <div className="animate-fade-in">
            <span className="text-secondary">$</span> ping -c 4 contact.local
          </div>
          
          <div className="pl-4 space-y-1">
            <div>PING contact.local (127.0.0.1) 56(84) bytes of data.</div>
            <div>64 bytes from contact.local (127.0.0.1): icmp_seq=1 ttl=64 time=0.042 ms</div>
            <div>64 bytes from contact.local (127.0.0.1): icmp_seq=2 ttl=64 time=0.039 ms</div>
            <div>64 bytes from contact.local (127.0.0.1): icmp_seq=3 ttl=64 time=0.041 ms</div>
            <div>64 bytes from contact.local (127.0.0.1): icmp_seq=4 ttl=64 time=0.038 ms</div>
            <div className="mt-2 text-primary">--- contact.local ping statistics ---</div>
            <div>4 packets transmitted, 4 received, 0% packet loss</div>
            <div>Connection established successfully!</div>
          </div>
          
          <div className="mt-8">
            <span className="text-secondary">$</span> cat /etc/contact.conf
          </div>
          
          <div className="pl-4 space-y-4 mt-4">
            <div className="border border-primary p-6 bg-card">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="text-accent mb-2"># Socials</div>
                  <div className="space-y-2">
                 
                    <div className="flex items-center">
                      <span className="text-muted-foreground w-12">github=</span>
                      <span>https://github.com/Fungichi</span>
                    </div>
                  </div>
                </div>
                
    
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <span className="text-secondary">$</span> curl -X POST /api/contact -H "Content-Type: application/json"
          </div>
          
          <div className="pl-4 mt-2">
            <div className="text-primary">HTTP/1.1 200 OK</div>
            <div className="text-muted-foreground">Server: ContactOS/1.0</div>
            <div className="text-muted-foreground">Content-Type: application/json</div>
            <div className="mt-2">
              {"{"}<br />
              &nbsp;&nbsp;"status": "ready",<br />
              &nbsp;&nbsp;"message": "Always open to interesting opportunities!",<br />
              &nbsp;&nbsp;"response_time": "&lt; 24 hours",<br />
              &nbsp;&nbsp;"availability": "open"<br />
              {"}"}
            </div>
          </div>
          
          <div className="mt-8 text-center p-4 border border-secondary bg-muted">
            <div className="text-secondary font-bold">📧 Ready to collaborate?</div>
            <div className="mt-2 text-sm">Feel free to reach out via any of the channels above!</div>
          </div>
          
          <div className="mt-8 flex items-center">
            <span className="text-secondary">user@portfolio:~/contact$</span>
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