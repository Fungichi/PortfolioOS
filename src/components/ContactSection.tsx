import React, { useState, useEffect } from "react";

export const ContactSection = () => {
  const webpages = [
    {
      title: "Example",
      description: "Here i am going to post the things i find interesting on the internet",
      link: "https://example.com",
    },
    {
      title: "Piet",
      description: "The greatest visual esolang out there",
      link: "https://nl.wikipedia.org/wiki/Piet_(programmeertaal)",
    },
    {
      title: "github",
      description: "I found this fantastic binary clock in the terminal ;)",
      link: "https://github.com/Fungichi/Chrobit",
    },
  ];

  const commands = [
    {
      cmd: "ping -c 4 junk.yard",
      output: [
        "PING junk.yard (8.8.8.8) 56(84) bytes of data.",
        "64 bytes junk.yard (8.8.8.8): icmp_seq=1 ttl=64 time=0.042 ms",
        "64 bytes junk.yard (8.8.8.8): icmp_seq=2 ttl=64 time=0.039 ms",
        "64 bytes junk.yard (8.8.8.8): icmp_seq=3 ttl=64 time=0.041 ms",
        "64 bytes junk.yard (8.8.8.8): icmp_seq=4 ttl=64 time=0.038 ms",
        "--- junk.yard ping statistics ---",
        "4 packets transmitted, 4 received, 0% packet loss",
        "Connection established successfully!",
      ],
    },
    {
      cmd: "curl junk.yard",
      output: [], // will be filled dynamically
    },
  ];

  const [typedCommand, setTypedCommand] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [webIndex, setWebIndex] = useState(0);

  const currentCommand = commands[currentCommandIndex];

  // Type the command character by character
  useEffect(() => {
    if (typedCommand.length < currentCommand.cmd.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(currentCommand.cmd.slice(0, typedCommand.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand, currentCommand]);

  // Reveal output line by line
  useEffect(() => {
    if (
      typedCommand === currentCommand.cmd &&
      currentLineIndex < currentCommand.output.length
    ) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Move to the next command after finishing output
    if (
      typedCommand === currentCommand.cmd &&
      currentLineIndex === currentCommand.output.length &&
      currentCommandIndex < commands.length - 1
    ) {
      const timeout = setTimeout(() => {
        setCurrentCommandIndex(currentCommandIndex + 1);
        setTypedCommand("");
        setCurrentLineIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand, currentLineIndex, currentCommand, currentCommandIndex]);

  // Every 3s cycle through webpages for the last command
  useEffect(() => {
    if (currentCommandIndex === commands.length - 1) {
      const interval = setInterval(() => {
        setWebIndex((prev) => (prev + 1) % webpages.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [currentCommandIndex, webpages.length]);

  // Build the dynamic output for the last command
  const dynamicOutput =
    currentCommandIndex === commands.length - 1
      ? [
          `<title>${webpages[webIndex].title}</title>`,
          `<meta name="description" content="${webpages[webIndex].description}">`,
          `<a href="${webpages[webIndex].link}">link</a>`,
        ]
      : currentCommand.output.slice(0, currentLineIndex);
      function highlight(line) {
        return line.split(/(<\/?title>|<meta|<a|>|<\/a>)/g).map((part, idx) => {
          if (part === "<title>" || part === "</title>") {
            return <span key={idx} className="text-purple-400">{part}</span>;
          }
          if (part === "<meta" || part === "<a" || part === ">" || part === "</a>") {
            return <span key={idx} className="text-purple-400">{part}</span>;
          }
          return part;
        });
      }
      
  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="max-w-4xl mx-auto">
        <div className="ascii-art mb-8">
          {`
╔══════════════════════════════════════════════════════════════════════════════╗
║                               Junkyard                                       ║
╚══════════════════════════════════════════════════════════════════════════════╝
`}
        </div>

        <div className="boot-text space-y-4">
          {/* Already executed commands */}
          {commands.slice(0, currentCommandIndex).map((command, idx) => (
            <div key={idx}>
              <div className="flex items-center">
                <span className="text-secondary">$</span>
                <span className="ml-2">{command.cmd}</span>
              </div>
              <div className="pl-4 space-y-1">
                {command.output.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          {/* Currently typing command */}
          <div className="flex items-center">
            <span className="text-secondary">$</span>
            <span className="ml-2">{typedCommand}</span>
            {typedCommand.length < currentCommand.cmd.length && (
              <span className="cursor-line ml-1"></span>
            )}
          </div>

          {/* Current command output */}
          {dynamicOutput.map((line, i) => (
            <div key={i}>{highlight(line)}</div>
          ))}


          {/* Final prompt */}
          {currentCommandIndex === commands.length - 1 &&
            currentLineIndex === currentCommand.output.length && (
              <div className="mt-8 flex items-center">
                <span className="text-secondary">
                  user@portfolio:~/Junkyard$
                </span>
                
                <div className="cursor-line ml-2"></div>
              </div>
            )}
        </div>

        <div className="mt-8 text-muted-foreground boot-text text-center">
          Press ESC to return to main menu
        </div>
      </div>
    </div>
  );
};
