import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { TrustStatsSection } from './components/home/TrustStatsSection';
import { FeaturedProjects } from './components/home/FeaturedProjects';
import { MeetDesignerSection } from './components/home/MeetDesignerSection';
import { ServicesSection } from './components/home/ServicesSection';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { BeforeAfterSection } from './components/home/BeforeAfterSection';
import { ProcessSection } from './components/home/ProcessSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { InstagramSection } from './components/home/InstagramSection';
import { LeadQualifierSection } from './components/home/LeadQualifierSection';
import { ProjectCaseStudyModal } from './components/modals/ProjectCaseStudyModal';
import { LeadModal } from './components/modals/LeadModal';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';

// Subviews
import { ProjectsView } from './components/views/ProjectsView';
import { ServicesView } from './components/views/ServicesView';
import { ProcessView } from './components/views/ProcessView';
import { AboutView } from './components/views/AboutView';
import { JournalView } from './components/views/JournalView';
import { ContactView } from './components/views/ContactView';

import { Project, Service } from './types';

export function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [leadModalOpen, setLeadModalOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleNavigate = (view: string) => {
    setActiveView(view);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleSelectService = (_service: Service) => {
    setActiveView('services');
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects-section');
    if (el && activeView === 'home') {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveView('projects');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-charcoal font-sans selection:bg-bronze/20 selection:text-charcoal">
      
      {/* Navigation Header */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenLeadModal={() => setLeadModalOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            {/* 01. Hero Section (Option B conversion headline + dual CTAs) */}
            <HeroSection
              onExploreProjects={handleExploreProjects}
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 02. Trust / Stats */}
            <TrustStatsSection />

            {/* 03. Featured Projects Portfolio (Clickable Case Studies) */}
            <FeaturedProjects
              onSelectProject={handleSelectProject}
              onViewAllProjects={() => setActiveView('projects')}
            />

            {/* 04. Meet the Designer & Studio Story */}
            <MeetDesignerSection
              onLearnMore={() => setActiveView('about')}
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 05. Core Services */}
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 06. Why Clients Choose Us */}
            <WhyChooseUs
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 07. Interactive Before -> After Transformation Slider */}
            <BeforeAfterSection
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 08. 5-Step Execution Roadmap */}
            <ProcessSection
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 09. Verified Testimonials */}
            <TestimonialsSection />

            {/* 10. Instagram Social Proof */}
            <InstagramSection />

            {/* 11. Multi-Step Interactive Budget Qualification Engine */}
            <LeadQualifierSection />
          </>
        )}

        {activeView === 'projects' && (
          <ProjectsView
            onSelectProject={handleSelectProject}
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activeView === 'services' && (
          <ServicesView
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activeView === 'process' && (
          <ProcessView
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activeView === 'about' && (
          <AboutView
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activeView === 'journal' && (
          <JournalView
            onOpenLeadModal={() => setLeadModalOpen(true)}
          />
        )}

        {activeView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLeadModal={() => setLeadModalOpen(true)}
      />

      {/* Case Study Detail Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLeadModal={() => setLeadModalOpen(true)}
      />

      {/* Quick Consultation Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
      />

      {/* Smart Floating WhatsApp Action */}
      <WhatsAppWidget activeView={activeView} />

    </div>
  );
}

export default App;
