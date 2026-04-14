import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FriendsContext = createContext();

function FriendsContextProvider({ children }) {
  const [textFriend, setTextFriend] = useState([]);
  const [callFriend, setCallFriend] = useState([]);
  const [videoFriend, setVideoFriend] = useState([]);

  const handleTextButton = (friend) => {
    if (textFriend.some((f) => f.name === friend.name)) {
      toast.warning(`You have already contacted ${friend.name} recently!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`You have contacted ${friend.name} via text!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTextFriend([...textFriend, friend]);
    }
  };

  const handleCallButton = (friend) => {
    if (callFriend.some((f) => f.name === friend.name)) {
      toast.warning(`You have already contacted ${friend.name} recently!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`You have contacted ${friend.name} via call!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCallFriend([...callFriend, friend]);
    }
  };

  const handleVideoButton = (friend) => {
    if (videoFriend.some((f) => f.name === friend.name)) {
      toast.warning(`You have already contacted ${friend.name} recently!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`You have contacted ${friend.name} via video call!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
