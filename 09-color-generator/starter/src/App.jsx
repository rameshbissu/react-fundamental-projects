import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [values, setValues] = useState(new Values("#f15025").all(10));
  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
};
export default App;
