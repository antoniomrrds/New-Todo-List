
type Tag = {
    name: string;
    color: string;
  };

type Task = {
    id: number;
    title: string;
    avatar?: string; // Tornou opcional
    description: string;
    image?: string; // Tornou opcional
    expired: boolean;
    isCompleted: boolean;
    expirationDate: string | null;
    idTag: number | null;
    idCategory: number | null;
    status: number;
    createdAt: string;
    updatedAt: string;
    createdAtFormatted: string;
    updatedAtFormatted: string;
    categories?: string[];
    tags: Tag[];
    creator: string;
  };


export const value: Task[] = Array.from({ length: 23 }).map((_, i) => ({
    id: i,
    title: `Ant Design asdasdasdasdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaPart asda sdasd ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description: 'Ant Designasdas dasdasdasdasd, a design language for background applications.',
    image: '',
    expired: i % 5 === 0,
    isCompleted: i % 4 === 0,
    expirationDate: i % 3 === 0 ? null : new Date(Date.now() + (i % 5 === 0 ? -1 : 1) * 24 * 60 * 60 * 1000).toLocaleDateString(),
    idTag: null,
    idCategory: null,
    status: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdAtFormatted: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    updatedAtFormatted: new Date().toLocaleDateString(),
    categories: [i % 2 === 0 ? 'Categoria A' : 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E', 'Categoria F'],
    tags: [
      { name: `Tag ${i}`, color: i % 2 === 0 ? '#ff4d4f' : '#52c41a' },
      { name: `Tag ${i + 1}`, color: '#ffa940' },
      { name: `Super Long Tag Name ${i + 2}`, color: '#1890ff' },
      { name: `Another Tag ${i + 3}`, color: '#8c7ae6' },
      { name: `Final Tag ${i + 4}`, color: '#44bd32' },
    ],
    creator: `Usuário asadasasdasdasdasdas ${i}`,
  }));
  export const exampleTasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      expired: false,
      isCompleted: false,
      expirationDate: '2023-12-31',
      idTag: 1,
      idCategory: 1,
      status: 1,
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
      createdAtFormatted: '01/01/2023',
      updatedAtFormatted: '01/01/2023',
      categories: [],
      tags: [],
      creator: 'Creator 1',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      expired: true,
      isCompleted: true,
      expirationDate: null,
      idTag: 2,
      idCategory: 2,
      status: 2,
      createdAt: '2023-02-01T00:00:00Z',
      updatedAt: '2023-02-01T00:00:00Z',
      createdAtFormatted: '01/02/2023',
      updatedAtFormatted: '01/02/2023',
      categories: ['Category 2'],
      tags: [{ name: 'Tag 2', color: '#52c41a' }],
      creator: 'Creator 2',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      expired: false,
      isCompleted: false,
      expirationDate: '2023-11-30',
      idTag: 3,
      idCategory: 3,
      status: 3,
      createdAt: '2023-03-01T00:00:00Z',
      updatedAt: '2023-03-01T00:00:00Z',
      createdAtFormatted: '01/03/2023',
      updatedAtFormatted: '01/03/2023',
      categories: ['Category 3'],
      tags: [{ name: 'Tag 3', color: '#1890ff' }],
      creator: 'Creator 3',
    },
  ];
