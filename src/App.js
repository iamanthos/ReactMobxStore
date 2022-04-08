import React, { useState, useEffect } from 'react';
import './style.css';
import { observer } from 'mobx-react';
import { useStore } from './hooks';
import { storeInstance } from './formStore';
import  Headers  from './headers'

const App = () => {
  return (
    <div>
     <Headers />
    </div>
  );
}

export default App;

// const App = observer(() => {
//   console.log('storeInstance', storeInstance);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.test = storeInstance;
//     const a = {
//       header: storeInstance.pairArray,
//     };
//     console.log('Submit', a);
//     console.log('Clicked');
//   };

//   const handleChange = (id, property, value) => {
//     console.log('storeInstance.pairArray', storeInstance.pairArray);
//     console.log('id is');
//     console.log(id);
//     storeInstance.updatePair(id, property, value);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>Key</th>
//             <th>Value</th>
//             <th>Description</th>
//             <th>
//               <input
//                 type="button"
//                 value="Add"
//                 onClick={(keyItemValue, descItemValue, valItemValue) =>
//                   storeInstance.setPair(
//                     keyItemValue,
//                     descItemValue,
//                     valItemValue
//                   )
//                 }
//               />
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {storeInstance.pairArray &&
//             storeInstance.pairArray.map((pair, i) => {
//               return (
//                 <tr>
//                   <td>
//                     <input type="checkbox" />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       placeholder="Key"
//                       aria-label="Key"
//                       onChange={(e) =>
//                         handleChange(pair.id, 'key', e.target.value)
//                       }
//                       value={storeInstance.pairArray[i].key}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       placeholder="Value"
//                       aria-label="Value"
//                       onChange={(e) =>
//                         handleChange(pair.id, 'value', e.target.value)
//                       }
//                       value={storeInstance.pairArray[i].value}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       placeholder="Description"
//                       aria-label="Description"
//                       onChange={(e) =>
//                         handleChange(pair.id, 'description', e.target.value)
//                       }
//                       value={storeInstance.pairArray[i].description}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="button"
//                       value="Delete"
//                       onClick={() => storeInstance.deletePair(pair.id)}
//                     />
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//       <input type="submit" value="Submit" onClick={handleSubmit} />
//     </div>
//   );
// });

export default App;
