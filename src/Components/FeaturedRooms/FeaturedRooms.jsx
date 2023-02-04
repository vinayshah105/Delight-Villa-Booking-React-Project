import React, { useContext } from "react";
import { RoomContext } from "../../Context/Context";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useContext(RoomContext);

  let selectRoom = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : selectRoom}
      </div>
    </section>
  );
};

export default FeaturedRooms;