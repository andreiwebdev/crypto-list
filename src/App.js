import useFetch from "./api/api";

function App() {
  const { data } = useFetch();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      {/* <pre>
        {data &&
          data.map((item, key) => (
            <div key={key}>
              <h1>{item.name}</h1>
            </div>
          ))
        }
      </pre> */}
      {console.log(data)}
      <div className="bg-[#f4f4f4] w-full sm:w-3/4 lg:w-2/4 h-full overflow-auto rounded-3xl pb-4 px-2 md:px-4">
        <div className="flex items-center mb-5 pt-2">
          <div className='w-2/12'>Icon</div>
          <div className='w-4/12'>Name</div>
          <div className='w-3/12'>Symbol</div>
          <div className="w-2/12">Price</div>
          <div className="w-2/12 text-center">Links</div>
        </div>
        {data &&
          data.map((item, key) => (
            <div key={key} className="flex items-center mb-5">
              <div className='w-2/12'>
                <img className="w-[40px] h-[40px]" src={item.icon} alt="" />
              </div>
              <div className='w-4/12'>{item.name}</div>
              <div className='w-3/12'>{item.symbol}</div>
              <div className="w-2/12">{item.price.toFixed(2)}$</div>
              <div className="w-2/12 flex text-right justify-center">
                <div>t</div>
                <div>w</div>
              </div>
            </div>
          ))
        }
      </div>  
    </div>
  );
}

export default App;
