import { Users } from "lucide-react";
import { Session } from "../types/agenda";
import { format, differenceInMinutes } from "date-fns";
import { cn } from "@/lib/utils";

interface SessionCardProps {
  session: Session;
  onClick: () => void;
  isSelected?: boolean;
}

export const SessionCard = ({ session, onClick, isSelected }: SessionCardProps) => {
  const themeColors = {
    orange: "bg-theme-orange",
    purple: "bg-theme-purple",
    blue: "bg-theme-blue",
    peach: "bg-theme-peach",
  };

  const categoryColors = {
    development: "bg-blue-100 text-blue-800",
    design: "bg-purple-100 text-purple-800",
    devops: "bg-green-100 text-green-800",
    business: "bg-yellow-100 text-yellow-800",
    general: "bg-gray-100 text-gray-800",
  };

  const duration = differenceInMinutes(
    new Date(session.endTime),
    new Date(session.startTime)
  );

  return (
    <div
      className={cn(
        "p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md animate-fade-in",
        isSelected ? "border-primary ring-2 ring-primary/20" : "border-border",
        duration > 60 ? "col-span-2" : "col-span-1"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {format(new Date(session.startTime), "HH:mm")} - {format(new Date(session.endTime), "HH:mm")}
            </span>
            <div className={cn("w-2 h-2 rounded-full", themeColors[session.theme])} />
            {session.isPlenary && (
              <Users className="w-4 h-4 text-primary" />
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {session.categories.map((category) => (
              <span
                key={category}
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  categoryColors[category]
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
          <h3 className="font-semibold mt-1">{session.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{session.room}</p>
          <p className="text-xs text-gray-400 mt-1">{duration} minutes</p>
        </div>
      </div>
    </div>
  );
};