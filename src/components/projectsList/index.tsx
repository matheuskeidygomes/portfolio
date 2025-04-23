import ProjectsCard from '../projectsCard'
import { useState, useCallback } from 'react'
import { useScrollLock } from '../../hooks/useScrollLock'
import { projects } from '../../utils/projects';
import Modal from '../projectsModal';
import { useLanguage } from '../../hooks/useLanguage';

export default function ProjectsList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { language } = useLanguage();
  useScrollLock(modalOpen);

  const handleModalOpen = useCallback((index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setSelectedIndex(0);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row gap-5 justify-center items-center w-[90%] pb-10 z-9">
      {modalOpen && <Modal onClose={handleModalClose} project={projects[language][selectedIndex]} />}

      {projects[language].map((project) => (
        <ProjectsCard
          key={project.id}
          image={project.images[0]}
          title={project.title}
          description={project.description}
          setModalOpen={() => handleModalOpen(project.id)}
        />
      ))}
    </div>
  );
}
