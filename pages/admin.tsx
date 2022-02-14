import { useEffect, useRef, useState } from "react";
import { useEpisode } from "../components/episode-provider";
import {
  ChatMessage,
  useChatSubscription,
  usePinMessageMutation,
  useUnPinMessageMutation,
} from "../gql";

import { XIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";

const MAX_CHAT_LEN = 3000;

const AdminPage = () => {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [scroll, setScroll] = useState(true);
  const msgEndRef = useRef<HTMLLIElement>();
  useEffect(() => {
    if (!scroll) {
      return;
    }
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, scroll]);

  const { episode } = useEpisode();

  useChatSubscription({
    variables: {
      channel: episode?.twitch || "fextralife",
    },
    onSubscriptionData: (data) => {
      const msg = data.subscriptionData.data.twitchChat;
      setChat((c) => {
        let chat = [...c, msg];
        if (chat.length > MAX_CHAT_LEN) {
          chat = chat.splice(chat.length - MAX_CHAT_LEN);
        }
        return chat;
      });
    },
  });
  const [pinMessage] = usePinMessageMutation();
  const [unpin] = useUnPinMessageMutation();
  return (
    <div className="grid grid-row-[auto_1fr]">
      <div className="sticky top-0 bg-white px-2 py-3 flex ">
        <button className="text-2xl" onClick={() => unpin()}>
          <XIcon className="h-10 w-10 text-red-800" />
        </button>
        <button onClick={() => setScroll((s) => !s)}>
          <ArrowCircleDownIcon className="h-10 w-10 text-red-800" />
        </button>
      </div>
      <ul className="overflow-y-hidden max-w-full">
        {chat.map((msg, id) => (
          <li
            ref={msgEndRef}
            className="p-2 border-2 border-solid m-2 rounded-lg cursor-pointer"
            key={id}
            onClick={() =>
              pinMessage({ variables: { author: msg.author, msg: msg.msg } })
            }
          >
            <p className="">{msg.msg}</p>
            <p className="italic font-semibold">by {msg.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
