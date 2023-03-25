import React from 'react';
// import UserArray from './components/UserArray';
import Users from './components/Users'

function App() {
  return (
    <>
      {/* to solve 'Users' showing in red, we wrapped whole Users component in jsx fragment */}
      <Users />
    </>
  );
}

export default App;


    //     const [inputText, setInputText] = useState<string>("polish");


    //     const filteredItem = myArray.filter(arrayItem => arrayItem.match(inputText))
    //     console.log(filteredItem);


    // Render out JSX below
    //    <>
    //   <label>
    //                                     Name:
    //                                 <input type="text" name="name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
    //                                 </label>
    //    <h2>{inputText === "" ? 5 : filteredItem}</h2>
    //  </>
