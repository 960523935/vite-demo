import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { useUnmount } from "ahooks";
import reactLogo from "@/assets/react.svg";
import "@/App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(111);

    setCount((c) => c + 1);
  }, []);

  return (
    <div className="App">
      <div>
        <Input
          placeholder="antd5"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more aaa
      </p>
    </div>
  );
}

export default App;
