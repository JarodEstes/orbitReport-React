import "./styling.css"

const Table = ({ sat }) => {
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
      return (
        <tbody>
     <tr key ={id}>
      {/* identifier */}
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational}</td>
     </tr>
     </tbody>
      )
     })}
      
   </table>
  );
};

export default Table;