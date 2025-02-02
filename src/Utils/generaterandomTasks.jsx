// src/assets/generaterandomTasks.js
const generateRandomTasks = () => {
  const randomTasks = [
    {
      id: Date.now(),
      title: 'Complete Project Proposal',
      assignee: 'John Doe',
      status: 'In Progress',
      startDate: '2023-10-01',
      endDate: '2023-10-05',
    },
    {
      id: Date.now() + 1,
      title: 'Design UI Mockups',
      assignee: 'Jane Smith',
      status: 'To Do',
      startDate: '2023-10-06',
      endDate: '2023-10-10',
    },
    {
      id: Date.now() + 2,
      title: 'Develop Backend API',
      assignee: 'Alice Johnson',
      status: 'Done',
      startDate: '2023-09-25',
      endDate: '2023-09-30',
    },
  ];
  return randomTasks;
};

export default generateRandomTasks;