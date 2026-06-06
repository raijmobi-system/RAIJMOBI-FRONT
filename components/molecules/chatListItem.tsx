// import { css } from "@/styled-system/css";
// import { Avatar } from "../atoms/avatar";

// interface ChatListItemProps {
//   name: string;
//   avatar: string;
//   lastMessage: string;
//   time: string;
//   onClick: () => void;
// }

// export const ChatListItem = ({ name, avatar, lastMessage, time, onClick }: ChatListItemProps) => {
//   return (
//     <div onClick={onClick} className={css({
//       display: "flex",
//       alignItems: "center",
//       gap: "3",
//       bg: "white",
//       p: "3",
//       rounded: "2xl",
//       border: "1px solid",
//       borderColor: "outlineVariant/20",
//       cursor: "pointer",
//       transition: "all",
//       transitionDuration: "200ms",
//       _hover: { transform: { base: "none", md: "translateY(-2px)" }, shadow: "md", borderColor: "brand.green" },
//       _active: { transform: "scale(0.98)" },
//     })}>
//       <div className={css({ position: "relative", flexShrink: 0 })}>
//         <Avatar src={avatar} alt={name} size="md" border />
//         <span className={css({ position: "absolute", bottom: "-0.5", right: "-0.5", w: "3", h: "3", bg: "brand.green", rounded: "full", border: "2px solid white" })} />
//       </div>
//       <div className={css({ flex: 1, minW: 0 })}>
//         <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: "1" })}>
//           <h3 className={css({ fontSize: "15px", fontWeight: "semibold", color: "onBackground", truncate: true })}>{name}</h3>
//           <span className={css({ fontSize: "labelSm", color: "outline", ml: "2", flexShrink: 0 })}>{time}</span>
//         </div>
//         <p className={css({ fontSize: "13px", color: "onSurfaceVariant", truncate: true, fontWeight: "semibold" })}>{lastMessage}</p>
//       </div>
//     </div>
//   );
// };


import { css } from "@/styled-system/css";
import { Avatar } from "../atoms/avatar";

interface ChatListItemProps {
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  onClick: () => void;
}

export const ChatListItem = ({ name, avatar, lastMessage, time, onClick }: ChatListItemProps) => {
  return (
    <div
      onClick={onClick}
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "3",
        md: { gap: "4" },
        bg: "white",
        p: "3",
        md: { p: "4" },
        rounded: "2xl",
        border: "1px solid",
        borderColor: "outlineVariant/20",
        cursor: "pointer",
        transition: "all 200ms",
        _hover: {
          transform: { base: "none", md: "translateY(-2px)" },
          shadow: "lg",
          borderColor: "brand.green",
        },
        _active: { transform: "scale(0.98)" },
      })}
    >
      <div className={css({ position: "relative", flexShrink: 0 })}>
        <Avatar src={avatar} alt={name} size="sm" border />
        <span
          className={css({
            position: "absolute",
            bottom: "-0.5",
            right: "-0.5",
            w: "3",
            md: { w: "3.5" },
            h: "3",
            md: { h: "3.5" },
            bg: "brand.green",
            rounded: "full",
            border: "2px solid",
            borderColor: "white",
          })}
        />
      </div>
      <div className={css({ flex: 1, minW: 0 })}>
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            mb: "1",
          })}
        >
          <h3
            className={css({
              fontSize: "15px",
              md: { fontSize: "titleLg" },
              fontWeight: "semibold",
              color: "onSurface",
              truncate: true,
            })}
          >
            {name}
          </h3>
          <span
            className={css({
              fontSize: "labelSm",
              color: "outline",
              ml: "2",
              flexShrink: 0,
            })}
          >
            {time}
          </span>
        </div>
        <p
          className={css({
            fontSize: "13px",
            md: { fontSize: "bodyMd" },
            color: "onSurfaceVariant",
            truncate: true,
            fontWeight: "semibold",
          })}
        >
          {lastMessage}
        </p>
      </div>
    </div>
  );
};