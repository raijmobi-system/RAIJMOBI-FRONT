import { css } from "@/styled-system/css";
import { Icon } from "./icon";

interface StarRatingProps {
  rating: number;
  showValue?: boolean;
}

export const StarRating = ({ rating, showValue = true }: StarRatingProps) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push(<Icon key={i} name="star" fill size={18} className={css({ color: "yellow.500" })} />);
    else if (i === full && half) stars.push(<Icon key={i} name="star_half" fill size={18} className={css({ color: "yellow.500" })} />);
    else stars.push(<Icon key={i} name="star" size={18} className={css({ color: "gray.300" })} />);
  }
  return (
    <div className={css({ display: "flex", alignItems: "center", gap: "0.5" })}>
      {stars}
      {showValue && <span className={css({ fontSize: "xs", color: "secondary", fontWeight: "semibold", ml: "1" })}>{rating.toFixed(1)}</span>}
    </div>
  );
};