import { useState } from 'react';
import people from './data'
import {FaBeer} from 'react-icons/fa'
const App = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]
  
  return <div>
    <h2>Revies Starter</h2>
    <FaBeer className='beer'/>
  </div>;
};
export default App;
