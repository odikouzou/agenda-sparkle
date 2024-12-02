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
    speakers: [
      {
        id: "s3",
        name: "Emma Davis",
        role: "UX Design Lead",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      }
    ],
    feedback: []
  }
];