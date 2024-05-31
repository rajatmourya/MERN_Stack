import { useState } from "react";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import Counter from "./Components/Counter";
import Fruits from "./Components/Fruits";
import Notes from "./Components/Notes";


function App() {

  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log('I will start updating the Data Now');
  }

  return (
    <div>
      {/* <Counter />
      <Fruits /> */}
      {/* <Notes /> */}
      <p>Inside the Parent: {countInParent}</p>
      <Child1 onCountUpdate = {updateCountInParent} />
      <Child2 countFromParent = {countInParent} uploadData = {uploadData} />

    </div>
     );
}

export default App;
