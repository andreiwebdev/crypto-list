import useFetch from "./api/api";

function App() {
  const { data } = useFetch();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      {console.log(data)}
      <div className="bg-[#f4f4f4] w-full md:w-3/4 lg:w-2/3 h-full overflow-auto rounded-3xl pb-4 px-2 md:px-4">
        <div className="flex items-center mb-5 pt-2">
          <div className="w-2/12">Icon</div>
          <div className="w-4/12">Name</div>
          <div className="w-3/12">Symbol</div>
          <div className="w-2/12">Price</div>
          <div className="w-2/12 text-center">Links</div>
        </div>
        {data &&
          data.map((item, key) => (
            <div key={key} className="flex items-center mb-5">
              <div className="w-2/12">
                <img className="w-[40px] h-[40px]" src={item.icon} alt="" />
              </div>
              <div className="w-4/12">{item.name}</div>
              <div className="w-3/12">{item.symbol}</div>
              <div className="w-2/12">{item.price.toFixed(2)}$</div>
              <div className="w-2/12 flex text-right justify-center cursor-pointer">
                <a href={item.twitterUrl} target="_blank">
                <div className="w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#1D9BF0] rounded-3xl text-[#fff] p-3"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></div>
                </a>
                <a href={item.websiteUrl} target="_blank">
                <div className="w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#fff] rounded-3xl text-[#000] border-stone-900 border ml-2 p-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></div>
                </a>
              </div>
            </div>
          ))
        }
      </div>  
    </div>
  );
}

export default App;
