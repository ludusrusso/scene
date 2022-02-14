import { useState } from "react";
import {
  ChatMessage,
  useChatSubscription,
  usePinMessageMutation,
} from "../gql";

const AdminPage = () => {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  useChatSubscription({
    variables: {
      channel: "fextralife",
    },
    onSubscriptionData: (data) => {
      const msg = data.subscriptionData.data.twitchChat;
      setChat((c) => [...c, msg]);
    },
  });
  const [pinMessage] = usePinMessageMutation();
  return (
    <div>
      <ul>
        {chat.map((msg, id) => (
          <li
            key={id}
            onClick={() =>
              pinMessage({ variables: { author: msg.author, msg: msg.msg } })
            }
          >
            {msg.author} - {msg.msg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
