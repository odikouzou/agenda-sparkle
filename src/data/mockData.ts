import { Session } from "../types/agenda";

export const mockSessions: Session[] = [
  {
    id: "1",
    title: "Opening Keynote",
    description: "Join us for an inspiring opening keynote about the future of technology.",
    startTime: "2024-04-15T09:00:00",
    endTime: "2024-04-15T10:00:00",
    room: "Main Hall",
    theme: "purple",
    isPlenary: true,
    difficultyLevel: "beginner",
    category: "general",
    speakers: [
      {
        id: "s1",
        name: "Sarah Johnson",
        role: "Chief Technology Officer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      }
    ],
    feedback: []
  },
  {
    id: "2",
    title: "Building Scalable Applications",
    description: "Learn best practices for building applications that can scale to millions of users.",
    startTime: "2024-04-15T10:30:00",
    endTime: "2024-04-15T11:30:00",
    room: "Room A",
    theme: "orange",
    isPlenary: false,
    difficultyLevel: "advanced",
    category: "development",
    speakers: [
      {
        id: "s2",
        name: "Michael Chen",
        role: "Senior Software Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      }
    ],
    feedback: []
  },
  {
    id: "3",
    title: "Design Systems Workshop",
    description: "Hands-on workshop about creating and maintaining design systems.",
    startTime: "2024-04-15T10:30:00",
    endTime: "2024-04-15T11:30:00",
    room: "Room B",
    theme: "blue",
    isPlenary: false,
    difficultyLevel: "intermediate",
    category: "design",
    speakers: [
      {
        id: "s3",
        name: "Emma Davis",
        role: "UX Design Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      }
    ],
    feedback: []
  },
  {
    id: "4",
    title: "AI in Modern Applications",
    description: "Explore how to integrate AI capabilities into your applications.",
    startTime: "2024-04-15T13:00:00",
    endTime: "2024-04-15T14:00:00",
    room: "Room C",
    theme: "peach",
    isPlenary: false,
    difficultyLevel: "intermediate",
    category: "development",
    speakers: [
      {
        id: "s4",
        name: "David Kim",
        role: "AI Research Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      }
    ],
    feedback: []
  },
  {
    id: "5",
    title: "DevOps Best Practices",
    description: "Learn about CI/CD pipelines and modern DevOps practices.",
    startTime: "2024-04-15T13:00:00",
    endTime: "2024-04-15T14:00:00",
    room: "Room D",
    theme: "purple",
    isPlenary: false,
    difficultyLevel: "advanced",
    category: "devops",
    speakers: [
      {
        id: "s5",
        name: "Alice Wong",
        role: "DevOps Engineer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      }
    ],
    feedback: []
  },
  {
    id: "6",
    title: "Business Strategy Workshop",
    description: "Strategic planning for tech leaders.",
    startTime: "2024-04-15T13:00:00",
    endTime: "2024-04-15T14:00:00",
    room: "Room B",
    theme: "blue",
    isPlenary: false,
    difficultyLevel: "intermediate",
    category: "business",
    speakers: [
      {
        id: "s6",
        name: "James Wilson",
        role: "VP of Engineering",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      }
    ],
    feedback: []
  },
  {
    id: "7",
    title: "Closing Keynote",
    description: "Wrap up the day with insights into the future of software development.",
    startTime: "2024-04-15T16:00:00",
    endTime: "2024-04-15T17:00:00",
    room: "Main Hall",
    theme: "blue",
    isPlenary: true,
    difficultyLevel: "beginner",
    category: "general",
    speakers: [
      {
        id: "s7",
        name: "Robert Taylor",
        role: "CTO",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      }
    ],
    feedback: []
  }
];

export const buildingPlan = {
  floors: [
    {
      id: 1,
      name: "Ground Floor",
      rooms: [
        { id: "main-hall", name: "Main Hall", capacity: 500, coordinates: { x: 100, y: 100, width: 200, height: 150 } },
        { id: "room-a", name: "Room A", capacity: 100, coordinates: { x: 350, y: 100, width: 100, height: 80 } },
      ]
    },
    {
      id: 2,
      name: "First Floor",
      rooms: [
        { id: "room-b", name: "Room B", capacity: 80, coordinates: { x: 100, y: 100, width: 100, height: 80 } },
        { id: "room-c", name: "Room C", capacity: 80, coordinates: { x: 250, y: 100, width: 100, height: 80 } },
        { id: "room-d", name: "Room D", capacity: 120, coordinates: { x: 400, y: 100, width: 120, height: 100 } },
      ]
    }
  ]
};