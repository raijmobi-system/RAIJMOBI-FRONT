import { css } from "@/styled-system/css";
import { ChatListItem } from "../molecules/chatListItem";
import { ChatContact } from "@/hooks/useApp";

interface ChatListProps {
  chats: Record<string, ChatContact>;
  onSelectChat: (name: string, avatar: string) => void;
}

export const ChatList = ({ chats, onSelectChat }: ChatListProps) => {
  const chatEntries = Object.entries(chats);
  return (
    <div className={css({ spaceY: "3", maxW: "4xl", mx: "auto", px: "4", md: "px-8", py: "4" })}>
      {chatEntries.map(([name, data]) => {
        const lastMsg = data.messages[data.messages.length - 1];
        return (
          <ChatListItem
            key={name}
            name={name}
            avatar={data.avatar}
            lastMessage={lastMsg.text}
            time={lastMsg.time}
            onClick={() => onSelectChat(name, data.avatar)}
          />
        );
      })}
    </div>
  );
};