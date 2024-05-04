import { useState, useEffect } from 'react';
import { Button } from '@mantine/core';
import './earningsTable.scss';
import { Project, projects } from '../../lib/data';

const ProjectEarningsTable: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [data, setData] = useState<Project[]>([]); // Store project data

  useEffect(() => {
    setData([...projects]); // Copy project data from projectData.ts
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading data...</p>; // Display loading message

  return (
    <>
    <div style={{ height: '700px' }}>
    <table className="project-earnings-table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Earnings</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>${project.earnings.toFixed(2)}</td> {/* Format earnings to two decimals */}
            <td>
              <Button data-project-id={project.id}>See Details</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default ProjectEarningsTable;
