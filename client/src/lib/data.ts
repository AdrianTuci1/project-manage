export interface CardData {
    image: string;
    title: string;
    openTasks: number;
    status: string;
    priority: string;
  }

export interface UserProps {
    name: string;
    email: string;
    imageUrl?: string; // Optional image URL
  }

export interface Project {
    name: string;
    earnings: number;
    id: number;
  }

export const cardData: CardData[] = [
    {
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Project 1',
      openTasks: 3,
      status: 'In Progress',
      priority: 'High',
    },
    {
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Project 2',
      openTasks: 0,
      status: 'Completed',
      priority: 'Medium',
    },
    {
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'User Interface Update',
      openTasks: 1,
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Performance Optimization',
      openTasks: 0,
      status: 'Completed',
      priority: 'Critical',
    },
    {
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Bug Report Triage',
      openTasks: 7,
      status: 'To Do',
      priority: 'High',
    },
    {
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Documentation Update',
      openTasks: 0,
      status: 'Completed',
      priority: 'Low',
    },

];

export const userData: UserProps[] = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl: 'https://picsum.photos/id/237/200/300', // Replace with your image URL
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    imageUrl: 'https://picsum.photos/id/180/200/300', // Replace with your image URL
  },
  {
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
  }, // No image provided, will use default
  {
    name: 'John Does',
    email: 'john.does@example.com',
    imageUrl: 'https://picsum.photos/id/200/200/300',
  },
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    imageUrl: 'https://picsum.photos/id/201/200/300',
  },
  {
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    imageUrl: 'https://picsum.photos/id/202/200/300',
  },
  {
    name: 'Sarah Lee',
    email: 'sarah.lee@example.com',
    imageUrl: 'https://picsum.photos/id/203/200/300',
  },
  {
    name: 'David Miller',
    email: 'david.miller@example.com',
    imageUrl: 'https://picsum.photos/id/204/200/300',
  },
  {
    name: 'Emily Garcia',
    email: 'emily.garcia@example.com',
    imageUrl: 'https://picsum.photos/id/205/200/300',
  },
  {
    name: 'Daniel Garcia',
    email: 'daniel.garcia@example.com',
    imageUrl: 'https://picsum.photos/id/206/200/300',
  },
  {
    name: 'Jennifer Lopez',
    email: 'jennifer.lopez@example.com',
    imageUrl: 'https://picsum.photos/id/207/200/300',
  },
  {
    name: 'Robert Williams',
    email: 'robert.williams@example.com',
    imageUrl: 'https://picsum.photos/id/208/200/300',
  },
  {
    name: 'Amanda Clark',
    email: 'amanda.clark@example.com',
    imageUrl: 'https://picsum.photos/id/209/200/300',
  },
];

export const projects: Project[] = [
  { name: 'Website Design', earnings: 1500, id: 1 },
  { name: 'Mobile App Development', earnings: 3000, id: 2 },
  { name: 'Search Engine Optimization (SEO)', earnings: 1200, id: 3 },
  { name: 'Content Marketing', earnings: 800, id: 4 },
  { name: 'E-commerce Development', earnings: 4500, id: 5 },
  { name: 'Social Media Marketing', earnings: 750, id: 6 },
  { name: 'Pay-Per-Click (PPC) Advertising', earnings: 1000, id: 7 },
  { name: 'Data Analytics', earnings: 2000, id: 8 },
  { name: 'Graphic Design', earnings: 900, id: 9 },
  { name: 'Video Editing', earnings: 1800, id: 10 },
  { name: 'User Interface (UI) / User Experience (UX) Design', earnings: 2500, id: 11 },
];

export interface Task {
  id: number; // Unique identifier for each task
  title: string;
  status: string; // e.g., "Open", "In Progress", "Completed"
  priority: string; // e.g., "High", "Medium", "Low"
  dueDate: Date; // Due date of the task
  assignedTo: string; // Person assigned to the task
}

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Website Design',
    status: 'Open',
    priority: 'High',
    dueDate: new Date('2024-05-10'),
    assignedTo: 'John Doe',
  },
  {
    id: 2,
    title: 'Develop Mobile App',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: new Date('2024-05-20'),
    assignedTo: 'Jane Smith',
  },
  {
    id: 3,
    title: 'Marketing Campaign',
    status: 'Open',
    priority: 'High',
    dueDate: new Date('2024-05-15'),
    assignedTo: 'Alice Jones',
  },
  {
    id: 4,
    title: 'Content Creation',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: new Date('2024-05-18'),
    assignedTo: 'David Lee',
  },
  {
    id: 12,
    title: 'Bug Fixing',
    status: 'Open',
    priority: 'High',
    dueDate: new Date('2024-05-22'),
    assignedTo: 'Emily Brown',
  },

{
  id: 13,
  title: 'Marketing Analysis',
  status: 'To Do',
  priority: 'Low',
  dueDate: new Date('2024-06-15'),
  assignedTo: 'Michael Johnson',
  },
  {
  id: 14,
  title: 'Database Design',
  status: 'In Progress',
  priority: 'Medium',
  dueDate: new Date('2024-05-28'),
  assignedTo: 'Sarah Garcia',
  },
  {
  id: 15,
  title: 'UI/UX Design',
  status: 'Open',
  priority: 'High',
  dueDate: new Date('2024-05-10'),
  assignedTo: 'Antonio Lopez',
  },
  {
  id: 16,
  title: 'Content Review',
  status: 'To Do',
  priority: 'Low',
  dueDate: new Date('2024-06-01'),
  assignedTo: 'Brenda Miller',
  },

];
