import "./styling.css"

const Table = ({ sat }) => {
  // passing the sat object in
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
       {/* create headers */}
    
     </tr>
     </thead>
     {sat.map((data, id) => {
      //mapping through sat using callbacks id and data
      return (
        <tbody>
     <tr key ={id}>
      {/* identifier */}
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational}</td>
       {/*table data tags displaying the data about the satellite */}
     </tr>
     </tbody>
      )
     })}
      
   </table>
  );
};

export default Table;