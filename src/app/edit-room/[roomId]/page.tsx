import { NextPage } from "next";
import { unstable_noStore } from "next/cache";

import { getRoom } from "@/services/rooms";
import { EditRoomForm } from "./EditRoomForm";

interface EditRoomPageProps {
  params: { roomId: string };
}

const EditRoomPage: NextPage<EditRoomPageProps> = async ({ params }) => {
  unstable_noStore();

  const room = await getRoom(params.roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      <h1 className="text-4xl font-bold">Edit Room</h1>

      <EditRoomForm room={room} />
    </div>
  );
};

export default EditRoomPage;
