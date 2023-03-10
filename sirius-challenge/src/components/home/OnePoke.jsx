import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// const SimplePaper = ({children}) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         "& > :not(style)": {
//           m: 1,
//           width: 300,
//           height: 300,
//           color: ''
//         },
//       }}
//     >
//       <Paper elevation={4}>
//       {children}      
//       </Paper>
//     </Box>
//   );
// };

const OnePoke = (props) => {
  const [pokeName, setPokeName] = useState(props.name);
  const [asd, setAsd] = useState();

  const color = (name) => {
    switch (name) {
      case "bulbasaur":
        return "green";
      case "squirtle":
        return "blue";
      case "venusaur":
        return "yellow"
      default:
        return "red";
    }
  };

  useEffect(() => {
    setAsd(color(pokeName));
  }, []);

  return (
   
    <div style={{ backgroundColor: asd, ...props }}>
      <img src={props.url} alt={props.alt}/>
      <h1>{props.name}</h1>
    </div>
      // <SimplePaper style={{ backgroundColor: asd, ...props }}>
      //   <h1  style={{ zIndex: 2 }}>{props.name}</h1>
      // </SimplePaper>
 
  );
};

export default OnePoke;
