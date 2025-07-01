import { useEffect, useState } from 'react'

import './App.css'

function App() {
 

  const [user,SetUser] = useState({name:"Test",age:30})


  //No dependencies
  // Its runs after every render
  // useEffect(() =>
  // {
  //     console.log("No dependencies")
  // }
  // );


 // Empty array
 // Its runs only one time after the initial

//  useEffect(() =>
//   {
//     console.log("Empty array")

//   },[]
//   );


 const [First, setFirst] = useState(0)
   const [Second, setSecond] = useState(0)
 // With dependencies

 //Its runs after the initial and whenever any dependencies changes

  useEffect(() =>
  {
console.log("With dependencies")
  },[First,Second]
  );

  return (
    <>
      <button onClick={() => setFirst((count) => count + 1)}>
          count is {First}
        </button>

        <button onClick={() => setSecond((count1) => count1 + 1)}>
          count One is {Second}
        </button>

       
    </>
  )
}

export default App
