// "use client";

// import { useRef, useEffect } from "react";
// import { css } from "@/styled-system/css";
// import { RideCardHorizontal } from "../molecules/rideCardHorizontal";
// import { ScrollButton } from "../molecules/scrollButton";
// import { RideDetail } from "@/hooks/useApp";

// interface HorizontalRideCarouselProps {
//   rides: RideDetail[];
//   onRideClick: (rideId: string) => void;
//   onParticipate: (rideId: string) => void;
// }

// export const HorizontalRideCarousel = ({ rides, onRideClick, onParticipate }: HorizontalRideCarouselProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useEffectState(false);
//   const [canScrollRight, setCanScrollRight] = useEffectState(true);

//   const updateScrollButtons = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       setCanScrollLeft(scrollLeft > 10);
//       setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateScrollButtons);
//       updateScrollButtons();
//       return () => container.removeEventListener("scroll", updateScrollButtons);
//     }
//   }, []);

//   const scroll = (direction: "left" | "right") => {
//     if (containerRef.current) {
//       const amount = window.innerWidth < 768 ? 270 : 340;
//       containerRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "4" })}>
//         <h3 className={css({ fontSize: "headlineMdMobile", color: "onBackground" })}>✨ Pensado para você</h3>
//         <div className={css({ display: "flex", gap: "2" })}>
//           <ScrollButton direction="left" onClick={() => scroll("left")} disabled={!canScrollLeft} />
//           <ScrollButton direction="right" onClick={() => scroll("right")} disabled={!canScrollRight} />
//         </div>
//       </div>
//       <div ref={containerRef} className={css({
//         display: "flex",
//         gap: "3",
//         overflowX: "auto",
//         pb: "2",
//         scrollBehavior: "smooth",
//         _scrollbar: { display: { base: "none", md: "block" }, height: "6px", bg: "transparent", thumb: { bg: "outlineVariant", rounded: "full" } },
//       })}>
//         {rides.map((ride) => (
//           <RideCardHorizontal
//             key={ride.id}
//             id={ride.id}
//             title={ride.title}
//             origin={ride.origin}
//             destination={ride.destination}
//             driverName={ride.driver.name}
//             seats={ride.seats}
//             price={ride.price}
//             imageUrl={ride.id.includes("mossoro") || ride.id.includes("natal") ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCOO5UmZSrT9B2rFmg8HCgMPoq0jAYOublmN2XD0Y4hHDb6vg7p2IbJenOo0Q6N9NZWFx7hHkR6Lg7gDKRNatBq3OnE3G2vN5p9eF21-4sf59cYbQJxAyd97DmPas8zfApRfccgNMKcPHgozQ0lQkEDLzGmHVELrW5WjyhX7rSJDmbieEiGW_L3Mqhuvwqms1XANPLmXxoy2UOnCXTfr36ZjBC9QQB3gqfIJ3n1bONR-ZreYdKlPxZ2CsUWJ6vmXv3T5Kn1GZ0DiI9R" : undefined}
//             onClick={() => onRideClick(ride.id)}
//             onParticipate={() => onParticipate(ride.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Helper hook
// function useEffectState<T>(initial: T): [T, (v: T) => void, React.Dispatch<React.SetStateAction<T>>] {
//   const [state, setState] = useState(initial);
//   useEffect(() => {}, []);
//   return [state, setState, setState];
// }


"use client";

import { useRef, useEffect, useState } from "react";
import { css } from "@/styled-system/css";
import { RideCardHorizontal } from "../molecules/rideCardHorizontal";
import { ScrollButton } from "../molecules/scrollButton";
import { RideDetail } from "@/hooks/useApp";

interface HorizontalRideCarouselProps {
  rides: RideDetail[];
  onRideClick: (rideId: string) => void;
  onParticipate: (rideId: string) => void;
}

export const HorizontalRideCarousel = ({ rides, onRideClick, onParticipate }: HorizontalRideCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const amount = window.innerWidth < 768 ? 270 : 340;
      containerRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "4" })}>
        <h3 className={css({ fontSize: "headlineMdMobile", color: "onBackground" })}>✨ Pensado para você</h3>
        <div className={css({ display: "flex", gap: "2" })}>
          <ScrollButton direction="left" onClick={() => scroll("left")} disabled={!canScrollLeft} />
          <ScrollButton direction="right" onClick={() => scroll("right")} disabled={!canScrollRight} />
        </div>
      </div>
      <div ref={containerRef} className={css({
        display: "flex",
        gap: "3",
        overflowX: "auto",
        pb: "2",
        scrollBehavior: "smooth",
        _scrollbar: { display: { base: "none", md: "block" }, height: "6px", bg: "transparent", thumb: { bg: "outlineVariant", rounded: "full" } },
      })}>
        {rides.map((ride) => (
          <RideCardHorizontal
            key={ride.id}
            id={ride.id}
            title={ride.title}
            origin={ride.origin}
            destination={ride.destination}
            driverName={ride.driver.name}
            seats={ride.seats}
            price={ride.price}
            imageUrl={ride.id.includes("mossoro") || ride.id.includes("natal") ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCOO5UmZSrT9B2rFmg8HCgMPoq0jAYOublmN2XD0Y4hHDb6vg7p2IbJenOo0Q6N9NZWFx7hHkR6Lg7gDKRNatBq3OnE3G2vN5p9eF21-4sf59cYbQJxAyd97DmPas8zfApRfccgNMKcPHgozQ0lQkEDLzGmHVELrW5WjyhX7rSJDmbieEiGW_L3Mqhuvwqms1XANPLmXxoy2UOnCXTfr36ZjBC9QQB3gqfIJ3n1bONR-ZreYdKlPxZ2CsUWJ6vmXv3T5Kn1GZ0DiI9R" : undefined}
            onClick={() => onRideClick(ride.id)}
            onParticipate={() => onParticipate(ride.id)}
          />
        ))}
      </div>
    </div>
  );
};