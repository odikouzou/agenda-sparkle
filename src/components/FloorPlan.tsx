import { useState } from "react";
import { buildingPlan } from "@/data/mockData";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const FloorPlan = () => {
  const [selectedFloor, setSelectedFloor] = useState(buildingPlan.floors[0]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {buildingPlan.floors.map((floor) => (
          <Button
            key={floor.id}
            variant={selectedFloor.id === floor.id ? "default" : "outline"}
            onClick={() => setSelectedFloor(floor)}
          >
            {floor.name}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{selectedFloor.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[400px] border rounded-lg bg-gray-50">
            {selectedFloor.rooms.map((room) => (
              <div
                key={room.id}
                className="absolute border-2 border-primary bg-primary/10 rounded-lg p-2"
                style={{
                  left: room.coordinates.x,
                  top: room.coordinates.y,
                  width: room.coordinates.width,
                  height: room.coordinates.height,
                }}
              >
                <p className="font-medium text-sm">{room.name}</p>
                <p className="text-xs text-gray-500">Capacity: {room.capacity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};