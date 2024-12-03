import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Session } from "../types/agenda";
import { format } from "date-fns";
import { Star, Users } from "lucide-react";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

interface SessionDialogProps {
  session: Session;
  isOpen: boolean;
  onClose: () => void;
  onAddToSchedule: () => void;
  isInSchedule: boolean;
}

export const SessionDialog = ({
  session,
  isOpen,
  onClose,
  onAddToSchedule,
  isInSchedule,
}: SessionDialogProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitFeedback = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would be an API call
    const newFeedback = {
      id: Math.random().toString(),
      rating,
      comment,
      timestamp: new Date().toISOString(),
    };
    
    session.feedback.push(newFeedback);
    
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback!",
    });
    
    setRating(0);
    setComment("");
  };

  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{session.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {format(new Date(session.startTime), "HH:mm")} - {format(new Date(session.endTime), "HH:mm")}
            </span>
            <span className="text-sm text-gray-500">{session.room}</span>
            {session.isPlenary && (
              <div className="flex items-center gap-1 text-primary">
                <Users className="w-4 h-4" />
                <span className="text-sm">Plenary Session</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[session.difficultyLevel]}`}>
              {session.difficultyLevel.charAt(0).toUpperCase() + session.difficultyLevel.slice(1)}
            </span>
          </div>

          <p className="text-gray-600">{session.description}</p>

          <div className="space-y-2">
            <h4 className="font-semibold">Speakers</h4>
            <div className="flex flex-wrap gap-4">
              {session.speakers.map((speaker) => (
                <div key={speaker.id} className="flex items-center gap-2">
                  {speaker.avatar && (
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium">{speaker.name}</p>
                    <p className="text-sm text-gray-500">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Leave Feedback</h4>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${
                    star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <Textarea
              placeholder="Share your thoughts about this session..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleSubmitFeedback}>Submit Feedback</Button>
          </div>

          {session.feedback.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold">Previous Feedback</h4>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {session.feedback.map((feedback) => (
                  <div key={feedback.id} className="bg-muted p-4 rounded-lg">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{feedback.comment}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {format(new Date(feedback.timestamp), "MMM d, yyyy HH:mm")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button
              variant={isInSchedule ? "destructive" : "default"}
              onClick={onAddToSchedule}
            >
              {isInSchedule ? "Remove from Schedule" : "Add to Schedule"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};