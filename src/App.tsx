import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Display, Menu} from "./components";
import {fontSize} from "./constants";

export const App = () => {
  return (
      <BrowserRouter>
          <div className={"app"} style = {{fontSize: fontSize}}>
              <Menu/>
              <Display/>
          </div>
      </BrowserRouter>

  )
}