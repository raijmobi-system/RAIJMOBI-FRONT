"use client";

import { useState, useRef, useEffect } from "react";
import { css } from "@/styled-system/css";
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
  onNotificationClick?: () => void;
  notificationCount?: number;
}

export const ChatRoom = ({
  contactName,
  contactAvatar,
  messages,
  onSendMessage,
  onBack,
  onNotificationClick,
  notificationCount = 0,
}: ChatRoomProps) => {
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
      {/* Cabeçalho fixo */}
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "3",
          px: "3",
          md: { px: "6" },
          py: "3",
          md: { py: "4" },
          bg: "brand.dark",
          shadow: "lg",
          flexShrink: 0,
        })}
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className={css({ p: "2", rounded: "full", color: "white", _hover: { bg: "white/10" } })}
        >
          <Icon name="arrow_back" size={22} />
        </Button>
        <img
          src={contactAvatar}
          alt={contactName}
          className={css({
            w: "10",
            md: { w: "12" },
            h: "10",
            md: { h: "12" },
            rounded: "full",
            border: "2px solid",
            borderColor: "brand.green/60",
            objectFit: "cover",
            flexShrink: 0,
          })}
        />
        <div className={css({ flex: 1, minW: 0 })}>
          <h2
            className={css({
              fontSize: "headlineMdMobile",
              md: { fontSize: "headlineMd" },
              color: "white",
              truncate: true,
            })}
          >
            {contactName}
          </h2>
          <p
            className={css({
              fontSize: "11px",
              md: { fontSize: "bodyMd" },
              color: "brand.green",
              display: "flex",
              alignItems: "center",
              gap: "1",
            })}
          >
            <span
              className={css({
                w: "2",
                h: "2",
                bg: "brand.green",
                rounded: "full",
                display: "inline-block",
              })}
            />
            Online
          </p>
        </div>
        {onNotificationClick && (
          <button
            onClick={onNotificationClick}
            className={css({
              position: "relative",
              p: "2",
              rounded: "full",
              transition: "background 200ms",
              _hover: { bg: "white/10" },
            })}
          >
            <Icon name="notifications" size={24} className={css({ color: "white/80" })} />
            {notificationCount > 0 && (
              <span
                className={css({
                  position: "absolute",
                  top: "-1",
                  right: "-1",
                  bg: "error",
                  color: "white",
                  fontSize: "10px",
                  fontWeight: "bold",
                  minW: "18px",
                  h: "18px",
                  rounded: "full",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: "1",
                  border: "2px solid",
                  borderColor: "white",
                })}
              >
                {notificationCount}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Área de mensagens */}
      <div
        className={css({
          flex: 1,
          overflowY: "auto",
          px: "4",
          md: { px: "8" },
          py: "4",
          md: { py: "6" },
          spaceY: "4",
          md: { spaceY: "5" },
          bg: "surfaceContainerLow/50",
        })}
      >
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

      {/* Input e botão enviar */}
      <div
        className={css({
          position: "sticky",
          bottom: 0,
          bg: "white",
          borderTop: "1px solid",
          borderColor: "outlineVariant/20",
          px: "3",
          md: { px: "6" },
          py: "3",
          md: { py: "4" },
          display: "flex",
          alignItems: "center",
          gap: "2",
          md: { gap: "3" },
          flexShrink: 0,
          shadow: "0 -2px 10px rgba(0,0,0,0.05)",
        })}
      >
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          className={css({
            flex: 1,
            bg: "surfaceContainerLow",
            border: "none",
            rounded: "full",
            px: "4",
            md: { px: "5" },
            py: "2.5",
            md: { py: "3" },
            fontSize: "bodyMd",
            md: { fontSize: "bodyLg" },
          })}
        />
        <Button
          onClick={handleSend}
          className={css({
            w: "10",
            md: { w: "12" },
            h: "10",
            md: { h: "12" },
            rounded: "full",
            p: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          })}
        >
          <Icon name="send" size={20} />
        </Button>
      </div>
    </div>
  );
};