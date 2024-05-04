import React, { createContext, useState } from 'react';

const SelectedProjectContext = createContext(null);

const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <SelectedProjectContext.Provider value={{ selectedProject, handleProjectSelect }}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export { SelectedProjectContext, SelectedProjectProvider };
