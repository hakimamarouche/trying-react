import React, {useState} from "react";

import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={ () => setAlertVisible(false)}>My alert</Alert>}
      <Button
        children="click me!"
        onClick={() => setAlertVisible(true)}
      ></Button>
    </div>
  );
}

export default App;
