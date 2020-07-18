// import React, { useState, useEffect } from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import './DefinitionPage.css';

// export default function DefinitionPage(props) {
//   const [definitions, updateDefinition] = useState([]);
//   const params = useParams();
//   useEffect(() => {
//     apiCallDef(params.word);
//   }, []);
//   console.log('Definition Page', props);
//   console.log('match', params.word);

//   const apiCallDef = async word => {
//     const response = await axios(
//       `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_DEF}`
//     );
//     console.log(response.data);
//     updateDefinition(response.data);
//   };
//   return (
//     <div className='definitionPage'>
//       <NavLink to='/'>
//         <h1>Eye4Words</h1>
//       </NavLink>
//       <h3>{params.word}</h3>
//       {definitions.length > 0
//         ? definitions.map(e => (
//             <div key={e.meta.uuid} className='definitionWord'>
//               {e.shortdef[0]}
//             </div>
//           ))
//         : ''}
//     </div>
//   );
// }
