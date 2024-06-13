import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  const fetchTours = async () => {
    setIsLoading(true)
    try {

      const response = await fetch(url);
      const toursa = await response.json();
      console.log(toursa);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();

  }, [])

 
  return <h1>hi</h1>
};
export default App;
