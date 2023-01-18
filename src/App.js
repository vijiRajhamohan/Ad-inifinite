import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

function App() {
  
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [more, setMore] = useState(true);

  const fetchData = () => {
    if (data.length < 150) {
      setTimeout(() => {
        setData(data.concat(Array.from({ length: 20 })));
      }, 1500);
    } else {
      setMore(false);
    }
  };

  return (
    <div className="App">
      <h3>INFINITY SCROLL</h3>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        loader={<h4>Loading...</h4>}
        hasMore={more}
        endMessage={<h4>end...</h4>}
      >
        {data.map((res, key) => {
          return (
            <div style={style} key={key}>
              Box -{key}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
