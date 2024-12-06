import { useState } from "react";
import { SessionCard } from "@/components/SessionCard";
import { SessionDialog } from "@/components/SessionDialog";
import { FloorPlan } from "@/components/FloorPlan";
import { mockSessions } from "@/data/mockData";
import { Session, Category } from "@/types/agenda";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, LayoutTemplate } from "lucide-react";

const Index = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [personalSchedule, setPersonalSchedule] = useState<string[]>([]);
  const [showPersonalSchedule, setShowPersonalSchedule] = useState(false);
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Set<Category | "all">>(new Set(["all"]));

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

  const toggleCategory = (category: Category | "all") => {
    setSelectedCategories((current) => {
      const newCategories = new Set(current);
      
      if (category === "all") {
        // If "all" is clicked, clear other selections and only keep "all"
        return new Set(["all"]);
      } else {
        // If a specific category is clicked
        newCategories.delete("all"); // Remove "all" when selecting specific categories
        if (newCategories.has(category)) {
          newCategories.delete(category);
          // If no categories are selected, default back to "all"
          if (newCategories.size === 0) {
            newCategories.add("all");
          }
        } else {
          newCategories.add(category);
        }
      }
      
      return newCategories;
    });
  };

  const categories: { value: Category | "all"; label: string }[] = [
    { value: "all", label: "All Categories" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "devops", label: "DevOps" },
    { value: "business", label: "Business" },
    { value: "general", label: "General" },
  ];

  const filteredSessions = mockSessions.filter((session) => {
    if (showPersonalSchedule) {
      return personalSchedule.includes(session.id);
    }
    if (selectedCategories.has("all")) {
      return true;
    }
    return session.categories.some(category => selectedCategories.has(category));
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">KED</h1>
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
          {!showFloorPlan && !showPersonalSchedule && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategories.has(category.value) ? "default" : "outline"}
                  onClick={() => toggleCategory(category.value)}
                  className="whitespace-nowrap"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="container py-8">
        {showFloorPlan ? (
          <FloorPlan />
        ) : (
          <div className="grid gap-4">
            {filteredSessions.map((session) => (
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
