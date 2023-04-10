// import React from "react";
// import { Button } from "@chakra-ui/react";
// import Image from "next/image";
// import myIcon from '../assets/images/icon.svg'
// // import "../styles/products.css";

// export default function Desc() {
//   return (
//     <div className="fcontainer">
//       <div>
//         <Image
//           src={myIcon}
//           alt="icon"
//           style={{
//             width: "92px",
//             height: "92px",
//             padding: "100px",
//             paddingBottom: 0
//           }}
//         />
//       </div>
//       <div className="fcontainer buttons">
//         <div className="button">
//           <Button variant="contained">Build</Button>
//         </div>
//         <div className="button">
//           <Button variant="outlined">Vouch</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Button } from "@chakra-ui/react";
import myIcon from '../assets/img/icon.svg'
// import "../styles/products.css";

export default function Desc() {
  return (
    <div className="fcontainer">
      <div>
        <img
          src={myIcon}
          alt="icon"
          style={{
            width: "92px",
            height: "92px",
            padding: "100px",
            paddingBottom: 0
          }}
        />
      </div>
      <div className="fcontainer buttons">
        <div className="button">
          <Button variant="contained">Build</Button>
        </div>
        <div className="button">
          <Button variant="outlined">Vouch</Button>
        </div>
      </div>
    </div>
  );
}







