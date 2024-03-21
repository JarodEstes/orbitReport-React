import "./styling.css"

import satData from "./satData";
//functions get passed in
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className = "flex-container">
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
          // we map through displaySats data and it creates more buttons based on orbit type
        );
      })}
      <button onClick={()=> setSat(satData)}>All Orbits</button>
      {/* creating a button to display all the data */}
    </div>
  );
};

export default Buttons;