"use client";

import { GithubIcon } from "lucide-react";
import Link from "next/link";

import { TagsList } from "@/components/TagsList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { splitTags } from "@/lib/utils";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <Card className="h-full sm:max-h-80">
      <CardHeader className="h-[40%]">
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>

      <div className="flex flex-col h-[60%]">
        <CardContent className="flex flex-col gap-4 h-[60%]">
          <TagsList
            className="h-[90%]"
            tags={splitTags(room?.tags ? room.tags : "")}
          />
          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 h-[10%]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}
        </CardContent>

        <CardFooter className="h-[40%]">
          <Button asChild>
            <Link href={`/rooms/${room.id}`}>Join Room</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export { RoomCard };
