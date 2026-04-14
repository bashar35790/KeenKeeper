import { MessageCircleMore, PhoneCall, VideoIcon } from "lucide-react";
import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";

const Timeline = () => {
  const { textFriend, callFriend, videoFriend } = useContext(FriendsContext);
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-227.5 mx-auto py-20 px-4">
      {/* Title */}
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-heading font-bold mb-4">
        Timeline
      </h1>

      {/* Filter */}
      <div className="mb-6">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Filter timeline
          </option>
          <option>All</option>
          <option>Meetup</option>
          <option>Call</option>
        </select>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {textFriend.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4  rounded-xl bg-base-100 shadow-sm"
          >
            {/* Icon */}
            <div className="p-2 bg-base-200 rounded-lg">
              {<MessageCircleMore />}
            </div>

            {/* Content */}
            <div>
              <p className="font-semibold text-heading">
                Text
                <span className="text-gray-500 font-normal">
                  {" "}
                  with {item.name}
                </span>
              </p>
              <p className="text-sm text-gray-400">{today}</p>
            </div>
          </div>
        ))}
        {callFriend.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4  rounded-xl bg-base-100 shadow-sm"
          >
            {/* Icon */}
            <div className="p-2 bg-base-200 rounded-lg">{<PhoneCall />}</div>

            {/* Content */}
            <div>
              <p className="font-semibold text-heading">
                Text
                <span className="text-gray-500 font-normal">
                  {" "}
                  with {item.name}
                </span>
              </p>
              <p className="text-sm text-gray-400">{today}</p>
            </div>
          </div>
        ))}
        {videoFriend.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4  rounded-xl bg-base-100 shadow-sm"
          >
            {/* Icon */}
            <div className="p-2 bg-base-200 rounded-lg">{<VideoIcon />}</div>

            {/* Content */}
            <div>
              <p className="font-semibold text-heading">
                Text
                <span className="text-gray-500 font-normal">
                  {" "}
                  with {item.name}
                </span>
              </p>
              <p className="text-sm text-gray-400">{today}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
