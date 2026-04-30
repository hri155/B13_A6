import { useEffect, useState } from "react";

const ToolsCard = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/tools.json')
      .then(res => res.json())
      .then(data =>{
        console.log(data);
         setTools(data);
      }        
     );
  }, []);
   return (
    <div className="grid grid-cols-3 justify-center gap-6">
     
      {tools.map(tool => (
       <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
            <h2 className="card-title">{tool.name}</h2>
            <p>{tool.description}</p>
            <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCard;