import { render } from "@testing-library/react";
import Dashboard from "./Home/Dashboard";
import { useState, useEffect } from "react"

import Modal from './Components/popap/Popap';

function App() {


  const [modalActivee, setModalActivee] = useState(Boolean)
  const [inputValuee, setInputValuee] = useState('');


  const autor: string = inputValuee;


  useEffect(() => {

    setModalActivee(true)

  }, [App])


  return (<>
    <Modal modalActivee={modalActivee}
      setModalActivee={setModalActivee}
      inputValuee={inputValuee}
      setInputValuee={setInputValuee}
    />
    <Dashboard autor={autor} />
  </>
  )

}

export default App;
