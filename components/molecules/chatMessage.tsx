import { css } from "@/styled-system/css";
import { Avatar } from "../atoms/avatar";

interface ChatMessageProps {
  text: string;
  time: string;
  isOwn: boolean;
  senderName: string;
  senderAvatar: string;
}

export const ChatMessage = ({ text, time, isOwn, senderName, senderAvatar }: ChatMessageProps) => {
  return (
    <div
      className={css({
        display: "flex",
        gap: "2",
        md: { gap: "3" },
        flexDir: isOwn ? "row-reverse" : "row",
        animation: "messageSlide 0.25s ease-out",
      })}
    >
      <Avatar src={senderAvatar} alt={senderName} size="sm" />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: isOwn ? "flex-end" : "flex-start",
          maxW: { base: "75%", md: "70%" },
        })}
      >
        <span
          className={css({
            fontSize: "10px",
            md: { fontSize: "labelSm" },
            color: "outline",
            mb: "0.5",
            px: "1",
          })}
        >
          {senderName.split(" ")[0]}
        </span>
        <div
          className={css({
            px: "3",
            md: { px: "4" },
            py: "2",
            md: { py: "2.5" },
            rounded: "2xl",
            bg: isOwn ? "brand.green" : "white",
            color: isOwn ? "white" : "onBackground",
            border: isOwn ? "none" : "1px solid",
            borderColor: isOwn ? "transparent" : "outlineVariant/20",
            roundedBottomRight: isOwn ? "md" : "none",
            roundedBottomLeft: isOwn ? "none" : "md",
            shadow: "sm",
          })}
        >
          <p className={css({ fontSize: "13px", md: { fontSize: "bodyMd" } })}>{text}</p>
        </div>
        <span
          className={css({
            fontSize: "10px",
            md: { fontSize: "11px" },
            color: "outline/60",
            mt: "1",
            px: "1",
          })}
        >
          {time}
        </span>
      </div>
    </div>
  );
};