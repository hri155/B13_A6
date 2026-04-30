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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
    
    {tools.map(tool => (
      <div key={tool.id} className="card w-96 bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl border">
        
        <div className="card-body">

          <div className="flex items-center justify-between">
            <img src={tool.icon} alt="" className="w-10 h-10 object-contain" />

            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
              {tool.tagType}
            </span>
          </div>

          <h2 className="card-title mt-3 text-lg font-bold">
            {tool.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {tool.description}
          </p>

          <h3 className="text-xl font-bold mt-2">
            ${tool.price}
            <span className="text-sm text-gray-400 font-normal">/{tool.period}</span>
          </h3>

          <ul className="mt-2 space-y-1">
            {tool.features.map((f, i) => (
              <li key={i} className="text-sm text-gray-600">
                ✔ {f}
              </li>
            ))}
          </ul>

          <div className="card-actions mt-4">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    ))}
    
  </div>
);
};

export default ToolsCard;