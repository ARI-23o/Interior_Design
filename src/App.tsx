import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { TrustStatsSection } from './components/home/TrustStatsSection';
import { FeaturedProjects } from './components/home/FeaturedProjects';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { BeforeAfterSection } from './components/home/BeforeAfterSection';
import { ProcessSection } from './components/home/ProcessSection';
import { MeetDesignerSection } from './components/home/MeetDesignerSection';
import { ServicesSection } from './components/home/ServicesSection';
import { InstagramSection } from './components/home/InstagramSection';
import { LeadQualifierSection } from './components/home/LeadQualifierSection';
import { ProjectCaseStudyModal } from './components/modals/ProjectCaseStudyModal';
import { LeadModal } from './components/modals/LeadModal';
import { AdminDashboardModal } from './components/admin/AdminDashboardModal';
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
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  // Secret admin trigger via Ctrl+Shift+A or #admin in URL
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setAdminModalOpen((prev) => !prev);
      }
    };

    const checkHash = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setAdminModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', checkHash);
    checkHash();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

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
        onOpenAdminModal={() => setAdminModalOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            {/* 01. Hero Section (Timeless Interiors, Designed Around You) */}
            <HeroSection
              onExploreProjects={handleExploreProjects}
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 02. Featured Projects (The Star of the Website - Large Photography) */}
            <FeaturedProjects
              onSelectProject={handleSelectProject}
              onViewAllProjects={() => setActiveView('projects')}
            />

            {/* 03. Meet the Designer & Studio Story */}
            <MeetDesignerSection
              onLearnMore={() => setActiveView('about')}
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 05. Core Services Breakdown */}
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 06. Trust / Stats & Material Partners Strip */}
            <TrustStatsSection />

            {/* 07. Why Clients Choose Us */}
            <WhyChooseUs
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 08. 3-Phase Execution Proof & Before/After Slider */}
            <BeforeAfterSection
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 09. 5-Step Transparent Execution Roadmap (Auto-Scrollable with Flip) */}
            <ProcessSection
              onOpenLeadModal={() => setLeadModalOpen(true)}
            />

            {/* 10. Instagram Social Proof */}
            <InstagramSection />

            {/* 11. Project Enquiry Form (Tell Us About Your Project) */}
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
        onOpenAdminModal={() => setAdminModalOpen(true)}
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

      {/* Studio Enquiries Admin Dashboard Modal */}
      <AdminDashboardModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

      {/* Smart Floating WhatsApp Action */}
      <WhatsAppWidget activeView={activeView} />

    </div>
  );
}

export default App;
