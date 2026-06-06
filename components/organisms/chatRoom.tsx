"use client";

import { css } from "@/styled-system/css";
import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../molecules/chatMessage";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { ChatMessage as ChatMessageType } from "@/hooks/useApp";

interface ChatRoomProps {
  contactName: string;
  contactAvatar: string;
  messages: ChatMessageType[];
  onSendMessage: (text: string) => void;
  onBack: () => void;
}

export const ChatRoom = ({ contactName, contactAvatar, messages, onSendMessage, onBack }: ChatRoomProps) => {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText.trim());
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={css({ display: "flex", flexDirection: "column", height: "100%" })}>
      <div className={css({ display: "flex", alignItems: "center", gap: "3", p: "3", bg: "brand.dark", shadow: "lg", flexShrink: 0 })}>
        <Button variant="ghost" onClick={onBack} className={css({ p: "2", rounded: "full" })}>
          <Icon name="arrow_back" size={22} className={css({ color: "white" })} />
        </Button>
        <img src={contactAvatar} alt={contactName} className={css({ w: "10", h: "10", rounded: "full", border: "2px solid", borderColor: "brand.green/60", objectFit: "cover", flexShrink: 0 })} />
        <div className={css({ flex: 1, minW: 0 })}>
          <h2 className={css({ fontSize: "headlineMdMobile", color: "white", truncate: true })}>{contactName}</h2>
          <p className={css({ fontSize: "11px", color: "brand.green", display: "flex", alignItems: "center", gap: "1" })}>
            <span className={css({ w: "2", h: "2", bg: "brand.green", rounded: "full", display: "inline-block" })} /> Online
          </p>
        </div>
      </div>
      <div className={css({ flex: 1, overflowY: "auto", px: "4", py: "4", spaceY: "4", bg: "surfaceContainerLow/50" })}>
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            text={msg.text}
            time={msg.time}
            isOwn={msg.sender === "Fernando"}
            senderName={msg.sender}
            senderAvatar={msg.avatar}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={css({ position: "sticky", bottom: 0, bg: "white", borderTop: "1px solid", borderColor: "outlineVariant/20", px: "3", py: "3", display: "flex", alignItems: "center", gap: "2", flexShrink: 0 })}>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          className={css({ flex: 1 })}
        />
        <Button onClick={handleSend} className={css({ w: "10", h: "10", rounded: "full", p: "0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 })}>
          <Icon name="send" size={20} />
        </Button>
      </div>
    </div>
  );
};