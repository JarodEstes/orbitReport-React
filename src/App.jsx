
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  //useState is setting our satellite data
  //pulling orbitType data from satellite data and assigning it to displaySats
  
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
    // This filters through all the data and will put it into the orbit type that you want.
    // filter function filters data passed in by orbit type and sets the data from that type to display data
 };
   return (
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      {/* passing the data into these props for buttons */}
      <Table sat={sat}/>
      {/* passing sat data into table */}
    </div>
  );
}

export default App;