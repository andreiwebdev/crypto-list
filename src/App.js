import useFetch from "./api/api";

function App() {
  const { data } = useFetch();

  return (
    <div>
      <pre>
        {data &&
          data.map((item, key) => (
            <div key={key}>
              <h1>{item.name}</h1>
            </div>
          ))
        }
      </pre>
    </div>
  );
}

export default App;
