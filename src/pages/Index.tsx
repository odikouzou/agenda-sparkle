import { useState } from "react";
import { SessionCard } from "@/components/SessionCard";
import { SessionDialog } from "@/components/SessionDialog";
import { FloorPlan } from "@/components/FloorPlan";
import { mockSessions } from "@/data/mockData";
import { Session } from "@/types/agenda";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, LayoutTemplate } from "lucide-react";

const Index = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [personalSchedule, setPersonalSchedule] = useState<string[]>([]);
  const [showPersonalSchedule, setShowPersonalSchedule] = useState(false);
  const [showFloorPlan, setShowFloorPlan] = useState(false);

  const handleSessionClick = (session: Session) => {
    setSelectedSession(session);
  };

  const handleCloseDialog = () => {
    setSelectedSession(null);
  };

  const toggleScheduleSession = (sessionId: string) => {
    setPersonalSchedule((current) =>
      current.includes(sessionId)
        ? current.filter((id) => id !== sessionId)
        : [...current, sessionId]
    );
  };

  const displaySessions = showPersonalSchedule
    ? mockSessions.filter((session) => personalSchedule.includes(session.id))
    : mockSessions;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Event Agenda</h1>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>April 15, 2024</span>
                <Clock className="w-4 h-4 ml-2" />
                <span>9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => setShowPersonalSchedule(!showPersonalSchedule)}
              >
                {showPersonalSchedule ? "Show All Sessions" : "Show My Schedule"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowFloorPlan(!showFloorPlan)}
              >
                <LayoutTemplate className="w-4 h-4 mr-2" />
                {showFloorPlan ? "Show Agenda" : "Show Floor Plan"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {showFloorPlan ? (
          <FloorPlan />
        ) : (
          <div className="grid gap-4">
            {displaySessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onClick={() => handleSessionClick(session)}
                isSelected={personalSchedule.includes(session.id)}
              />
            ))}
          </div>
        )}

        {selectedSession && (
          <SessionDialog
            session={selectedSession}
            isOpen={true}
            onClose={handleCloseDialog}
            onAddToSchedule={() => toggleScheduleSession(selectedSession.id)}
            isInSchedule={personalSchedule.includes(selectedSession.id)}
          />
        )}
      </main>
    </div>
  );
};

export default Index;