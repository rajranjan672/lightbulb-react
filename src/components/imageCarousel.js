import React, { useState } from "react";

import ItemsCarousel from "react-items-carousel";

export default function Carousel() {
  const [active, setaActive] = useState(0);
  return (
    <ItemsCarousel
      infiniteLoop={false}
      gutter={12}
      activePosition={"center"}
      chevronWidth={60}
      disableSwipe={false}
      alwaysShowChevrons={false}
      numberOfCards={2}
      slidesToScroll={2}
      outsideChevron={true}
      showSlither={false}
      firstAndLastGutter={false}
      activeItemIndex={active}
      requestToChangeActive={(value) => setaActive(value)}
      leftChevron={<button>{"<"}</button>}
      rightChevron={<button>{">"}</button>}
    >
      {Array.from(new Array(10)).map((_, i) => (
        <div
          key={i}
          style={{
            marginLeft: "25px",
            height: 200,
            background: "url(https://placeimg.com/380/200/nature)"
          }}
        />
      ))}
    </ItemsCarousel>
  );
}
