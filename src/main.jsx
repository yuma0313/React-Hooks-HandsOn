import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const codeInfo = {
  name: "yuma",
  age: 23
};

const CodeInfoContext = createContext(codeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CodeInfoContext.Provider value={codeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </CodeInfoContext.Provider>
)

export default CodeInfoContext;