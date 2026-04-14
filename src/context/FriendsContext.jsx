import { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

function FriendsContextProvider({ children }) {
  const [textFriend, setTextFriend] = useState([]);
  const [callFriend, setCallFriend] = useState([]);
  const [videoFriend, setVideoFriend] = useState([]);

  const handleTextButton = (friend) => {
    if (textFriend.some((f) => f.name === friend.name)) {
      alert(`You have already contacted ${friend.name} recently!`);
    } else {
      alert(`You have contacted ${friend.name} via text!`);
      setTextFriend([...textFriend, friend]);
    }
  };

  const handleCallButton = (friend) => {
    if (callFriend.some((f) => f.name === friend.name)) {
      alert(`You have already contacted ${friend.name} recently!`);
    } else {
      alert(`You have contacted ${friend.name} via call!`);
      setCallFriend([...callFriend, friend]);
    }
  };

  const handleVideoButton = (friend) => {
    if (videoFriend.some((f) => f.name === friend.name)) {
      alert(`You have already contacted ${friend.name} recently!`);
    } else {
      alert(`You have contacted ${friend.name} via video call!`);
      setVideoFriend([...videoFriend, friend]);
    }
  };

  const data = {
    textFriend,
    setTextFriend,
    handleTextButton,
    callFriend,
    setCallFriend,
    handleCallButton,
    videoFriend,
    setVideoFriend,
    handleVideoButton,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
}

export default FriendsContextProvider;
