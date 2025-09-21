import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  "[ 0.000000] Portfolio OS 6.1.0-terminal (root@localhost) #1 SMP",
  "[ 0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=/dev/sda1 ro quiet splash",
  "[ 0.000000] KERNEL supported cpus:",
  "[ 0.000000]   Intel GenuineIntel",
  "[ 0.000000]   AMD AuthenticAMD",
  "[ 0.001234] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
  "[ 0.001456] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'",
  "[ 0.001789] x86/fpu: xstate_offset[2]: 576, xstate_sizes[2]: 256",
  "[ 0.002123] BIOS-provided physical RAM map:",
  "[ 0.002456] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable",
  "[ 0.002789] BIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved",
  "[ 0.003123] Memory: 16384MB available",
  "[ 0.003456] CPU: Intel Core i7 @ 3.2GHz detected",
  "[ 0.003789] Portfolio system initializing...",
  "[ 0.004123] Loading user profile data...",
  "[ 0.004456] Scanning for projects...",
  "[ 0.004789] Skills database loaded successfully",
  "[ 0.005123] Contact information verified",
  "[ 0.005456] Terminal UI ready",
  "[ 0.005789] System boot complete. Welcome to PortfolioOS!",
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine < bootMessages.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, bootMessages[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, Math.random() * 200 + 100); // Random delay between 100-300ms

      return () => clearTimeout(timer);
    } else {
      // Boot complete, wait a moment then transition to menu
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="ascii-art mb-8 text-center">
{`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗  ██████╗ ███████╗
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗██╔═══██╗██╔════╝
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║██║   ██║███████╗
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║██║   ██║╚════██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝╚██████╔╝███████║
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝
                                     by [Retroz]
`}
      </div>
      
      <div className="boot-text space-y-1">
        {visibleLines.map((line, index) => (
          <div key={index} className="animate-fade-in">
            {line}
          </div>
        ))}
        {currentLine < bootMessages.length && (
          <div className="cursor-line"></div>
        )}
      </div>
      
      {currentLine >= bootMessages.length && (
        <div className="mt-4 boot-text animate-fade-in">
          <div>Press any key to continue...</div>
          <div className="cursor-line mt-2"></div>
        </div>
      )}
    </div>
  );
};