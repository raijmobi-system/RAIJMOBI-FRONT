// "use client";

// import { useState } from "react";
// import { PageHeader } from "../organisms/pageHeader";
// import { ChatList } from "../organisms/chatList";
// import { ChatRoom } from "../organisms/chatRoom";
// import { NotificationModal } from "../organisms/notificationModal";
// import { useApp } from "@/hooks/useApp";

// interface ChatTemplateProps {
//   onNotificationClick: () => void;
// }

// export const ChatTemplate = ({ onNotificationClick }: ChatTemplateProps) => {
//   const { chatData, sendChatMessage, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();
//   const [selectedChat, setSelectedChat] = useState<{ name: string; avatar: string } | null>(null);
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

//   const handleSelectChat = (name: string, avatar: string) => {
//     setSelectedChat({ name, avatar });
//   };

//   const handleBack = () => {
//     setSelectedChat(null);
//   };

//   const handleSendMessage = (text: string) => {
//     if (selectedChat) {
//       sendChatMessage(selectedChat.name, text);
//     }
//   };

//   return (
//     <>
//       {!selectedChat ? (
//         <>
//           <PageHeader title="Chat" subtitle="3 conversas não lidas" onNotificationsClick={() => setIsNotificationOpen(true)} notificationCount={getUnreadCount()} />
//           <ChatList chats={chatData} onSelectChat={handleSelectChat} />
//         </>
//       ) : (
//         <ChatRoom
//           contactName={selectedChat.name}
//           contactAvatar={selectedChat.avatar}
//           messages={chatData[selectedChat.name]?.messages || []}
//           onSendMessage={handleSendMessage}
//           onBack={handleBack}
//         />
//       )}
//       <NotificationModal
//         isOpen={isNotificationOpen}
//         onClose={() => setIsNotificationOpen(false)}
//         notifications={notifications}
//         onMarkRead={markNotificationRead}
//         onMarkAllRead={markAllNotificationsRead}
//       />
//     </>
//   );
// };

"use client";

import { useState } from "react";
import { PageHeader } from "../organisms/pageHeader";
import { ChatList } from "../organisms/chatList";
import { ChatRoom } from "../organisms/chatRoom";
import { NotificationModal } from "../organisms/notificationModal";
import { useApp } from "@/hooks/useApp";

export const ChatTemplate = () => {
  const { chatData, sendChatMessage, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } =
    useApp();
  const [selectedChat, setSelectedChat] = useState<{ name: string; avatar: string } | null>(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSelectChat = (name: string, avatar: string) => {
    setSelectedChat({ name, avatar });
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = (text: string) => {
    if (selectedChat) {
      sendChatMessage(selectedChat.name, text);
    }
  };

  return (
    <>
      {!selectedChat ? (
        <>
          <PageHeader
            title="Chat"
            subtitle="3 conversas não lidas"
            onNotificationsClick={() => setIsNotificationOpen(true)}
            notificationCount={getUnreadCount()}
          />
          <ChatList chats={chatData} onSelectChat={handleSelectChat} />
        </>
      ) : (
        <ChatRoom
          contactName={selectedChat.name}
          contactAvatar={selectedChat.avatar}
          messages={chatData[selectedChat.name]?.messages || []}
          onSendMessage={handleSendMessage}
          onBack={handleBack}
          onNotificationClick={() => setIsNotificationOpen(true)}
          notificationCount={getUnreadCount()}
        />
      )}
      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
        onMarkRead={markNotificationRead}
        onMarkAllRead={markAllNotificationsRead}
      />
    </>
  );
};