import { useState, useEffect } from 'react';

interface MenuOption {
  id: string;
  label: string;
  description: string;
}

interface TerminalMenuProps {
  onSelect: (optionId: string) => void;
}

const menuOptions: MenuOption[] = [
  { id: 'about', label: 'About', description: 'Personal information and background' },
  { id: 'projects', label: 'Projects', description: 'Featured development projects' },
  { id: 'skills', label: 'Skills', description: 'Technical skills and expertise' },
  { id: 'contact', label: 'Contact', description: 'Get in touch information' },
  { id: 'reboot', label: 'Reboot', description: 'Restart the system' },
];

export const TerminalMenu = ({ onSelect }: TerminalMenuProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : menuOptions.length - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => prev < menuOptions.length - 1 ? prev + 1 : 0);
          break;
        case 'Enter':
          event.preventDefault();
          onSelect(menuOptions[selectedIndex].id);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedIndex, onSelect]);

  return (
    <div className="terminal-window min-h-screen p-8 scanlines">
      <div className="ascii-art text-center mb-8">
{`
╔══════════════════════════════════════════════════════════════════════════════╗
║                              PORTFOLIO BOOTLOADER                            ║
║                                  Version 1.0                                 ║
╚══════════════════════════════════════════════════════════════════════════════╝
`}
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="boot-text mb-4">
          Use ↑↓ arrow keys to select an option, then press ENTER to boot:
        </div>
        
        <div className="space-y-2">
          {menuOptions.map((option, index) => (
            <div
              key={option.id}
              className={`menu-item ${index === selectedIndex ? 'selected' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono">
                  {index === selectedIndex ? '► ' : '  '}
                  {option.label}
                </span>
                <span className="text-muted-foreground text-sm">
                  {option.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 boot-text">
          <div className="flex items-center">
            <span>Selected: {menuOptions[selectedIndex].label}</span>
            <div className="cursor-line ml-2"></div>
          </div>
        </div>
        
        <div className="mt-4 text-muted-foreground boot-text">
          System uptime: {new Date().toLocaleTimeString()} | Memory: 16GB | CPU: i7-3200MHz
        </div>
      </div>
    </div>
  );
};