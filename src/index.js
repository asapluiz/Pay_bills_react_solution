import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

import { MyProvider } from './context'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>

  </React.StrictMode>

);



