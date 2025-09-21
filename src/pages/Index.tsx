import { useState, useEffect } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { TerminalMenu } from '@/components/TerminalMenu';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';

type AppState = 'booting' | 'menu' | 'about' | 'projects' | 'skills' | 'contact';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('booting');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && currentState !== 'booting' && currentState !== 'menu') {
        setCurrentState('menu');
      }
      
      // Allow any key to continue from boot screen
      if (currentState === 'booting' && event.key !== 'F5') {
        setCurrentState('menu');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentState]);

  const handleBootComplete = () => {
    setCurrentState('menu');
  };

  const handleMenuSelect = (optionId: string) => {
    if (optionId === 'reboot') {
      setCurrentState('booting');
    } else {
      setCurrentState(optionId as AppState);
    }
  };

  const renderContent = () => {
    switch (currentState) {
      case 'booting':
        return <BootSequence onComplete={handleBootComplete} />;
      case 'menu':
        return <TerminalMenu onSelect={handleMenuSelect} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <TerminalMenu onSelect={handleMenuSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-terminal overflow-hidden">
      {renderContent()}
    </div>
  );
};

export default Index;