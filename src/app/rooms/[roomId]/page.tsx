import { GithubIcon } from "lucide-react";
import { NextPage } from "next";
import { unstable_noStore } from "next/cache";
import Link from "next/link";

import { TagsList } from "@/components/TagsList";
import { splitTags } from "@/lib/utils";
import { getRoom } from "@/services/rooms";
import { DevScoutVideo } from "./VideoPlayer";

interface RoomPageProps {
  params: { roomId: string };
}

const RoomPage: NextPage<RoomPageProps> = async (props) => {
  unstable_noStore();
  const roomId = props.params.roomId;

  const room = await getRoom(roomId);

  if (!room) {
    return <div>No room of this ID found</div>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
          <DevScoutVideo room={room} />
        </div>
      </div>

      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>

          {room.githubRepo && (
            <Link
              href={room.githubRepo}
              className="flex items-center gap-2 text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}

          <p className="text-base text-gray-600">{room?.description}</p>

          <TagsList tags={splitTags(room?.tags ? room?.tags : "")} />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
