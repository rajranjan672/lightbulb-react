 import { Box, Paper } from "@mui/material";
// import React from "react";
 import headerimg from "../assets/img/Group 6.png";
 import light from "../assets/img/Vector (2).png";
 import penguine from "../assets/img/Group 16.png";
 import "../index.css";
 import "../components/Profile.css";

// export default function Profile(props) {
//   return (
//     <>
//       <Box
//         sx={{
//           justifyContent: "center",
//           display: "flex",
//           flexWrap: "wrap",
//           "& > :not(style)": {
//             ml: 2,
//             mt: 2,
//             width: 1203,
//             height: 862,
//           },
//         }}
//       >
//         <Paper>
//           <img className="headimg" src={headerimg} />
//           <h3 className="foxyboy">@foxyboy</h3>
//           <p className="headcontent">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
//             enim vitae eget facilisis eget dignissim congue. Ac dolor cras arcu
//             duis dictum. Nam venenatis diam et consequat pellentesque gravida
//             dolor bibendum. Vehicula in bibendum quis justo.
//           </p>
//           <div className="tabs">
//             <h3>Vouched</h3> <span></span>
//             <h3>Created</h3> <span></span>
//             <h3>Build</h3> <span></span>
//           </div>
          
//           <div className="cardss">
//           <Paper
//           elevation={4}
//             sx={{
//               ml: 5,
//               width: 323,
//               height: "auto",
//             }}
//           >
//             <img className="penguine" src={penguine} />
//             <span className="peng_title">
//               <h4>A plarform for token gated scheduled booking.</h4>
//             </span>
//             <p>
//               Admittedly, it is a surrogate experience, but so are love stories
//               and travel novels. It is artificial, but not vulgar. And more
//               importantly, it substantially changes Read more artificial, but
//               not vulgar. And more importantly, it substantially changes ...
//               Read more
//             </p>
//           </Paper>

          
//           <Paper
//           elevation={4}
//             sx={{
//               ml: 5,
//               width: 323,
//               height: "auto",
//             }}
//           >
//             <img className="penguine" src={penguine} />
//             <span className="peng_title">
//              <h4>A plarform for token gated scheduled booking.</h4>
//             </span>
//             <p>
//               Admittedly, it is a surrogate experience, but so are love stories
//               and travel novels. It is artificial, but not vulgar. And more
//               importantly, it substantially changes Read more artificial, but
//               not vulgar. And more importantly, it substantially changes ...
//               Read more
//             </p>
//           </Paper>
//           </div>
   
//         </Paper>
//       </Box>
//     </>
//   );
// }


import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Profile() {
  const [key, setKey] = useState('home');

  return (
<>
    <Box
         sx={{
           justifyContent: "center",
           display: "flex",
           flexWrap: "wrap",
           "& > :not(style)": {
             ml: 2,
             mt: 2,
             width: 1203,
             height: 862,
           },
         }}
       >
         <Paper>
           <img className="headimg" src={headerimg} />
           <h3 className="foxyboy">@foxyboy</h3>
           <p className="headcontent">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
             enim vitae eget facilisis eget dignissim congue. Ac dolor cras arcu
             duis dictum. Nam venenatis diam et consequat pellentesque gravida
             dolor bibendum. Vehicula in bibendum quis justo.
           </p>
           {/* <div className="tabs">
             <h3>Vouched</h3> <span></span>
             <h3>Created</h3> <span></span>
             <h3>Build</h3> <span></span>
           </div> */}
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="vouched">
      <div className="cardss">
           <Paper
           elevation={4}
             sx={{
               ml: 5,
               width: 323,
               height: "auto",
             }}
           >
             <img className="penguine" src={penguine} />
             <span className="peng_title">
               <h4>A plarform for token gated scheduled booking.</h4>
             </span>
             <p>
               Admittedly, it is a surrogate experience, but so are love stories
               and travel novels. It is artificial, but not vulgar. And more
               importantly, it substantially changes Read more artificial, but
               not vulgar. And more importantly, it substantially changes ...
               Read more
             </p>
           </Paper>

          
           <Paper
           elevation={4}
             sx={{
               ml: 5,
               width: 323,
               height: "auto",
             }}
           >
             <img className="penguine" src={penguine} />
             <span className="peng_title">
              <h4>A plarform for token gated scheduled booking.</h4>
             </span>
             <p>
               Admittedly, it is a surrogate experience, but so are love stories
               and travel novels. It is artificial, but not vulgar. And more
               importantly, it substantially changes Read more artificial, but
               not vulgar. And more importantly, it substantially changes ...
               Read more
             </p>
           </Paper>
           </div>
      </Tab>
      <Tab eventKey="profile" title="Created">
        
      </Tab>
      
    </Tabs>
    </Paper>
    </Box>
    </>
  );
}

export default Profile;