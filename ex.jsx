// import React, { useState, useCallback, useEffect } from 'react';

// const StringGenerator = () => {
//   const [generatedString, setGeneratedString] = useState("");
//   const [length, setLength] = useState(12);
//   const [includeNumbers, setIncludeNumbers] = useState(true);
//   const [includeSymbols, setIncludeSymbols] = useState(false);

//   // useCallback ensures the function isn't recreated unless dependencies change
//   const generateRandomString = useCallback(() => {
//     let str = "";
//     let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (includeNumbers) charset += "0123456789";
//     if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//     for (let i = 1; i <= length; i++) {
//       const charIndex = Math.floor(Math.random() * charset.length);
//       str += charset.charAt(charIndex);
//     }

//     setGeneratedString(str);
//   }, [length, includeNumbers, includeSymbols]);

//   // useEffect triggers the generator on initial mount
//   useEffect(() => {
//     generateRandomString();
//   }, [generateRandomString]);

//   return (
//     <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Random String Generator</h2>
      
//       {/* Display Area */}
//       <div className="w-full bg-gray-50 p-4 rounded-lg border border-dashed border-blue-300 mb-6 break-all font-mono text-center text-lg text-blue-700 min-h-[60px] flex items-center justify-center">
//         {generatedString}
//       </div>

//       <div className="w-full space-y-6">
//         {/* Length Control */}
//         <div className="flex flex-col gap-2">
//           <div className="flex justify-between text-sm font-semibold text-gray-600">
//             <span>Length</span>
//             <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{length}</span>
//           </div>
//           <input 
//             type="range" 
//             min={6} 
//             max={50} 
//             value={length} 
//             onChange={(e) => setLength(Number(e.target.value))}
//             className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
//           />
//         </div>

//         {/* Checkbox Options */}
//         <div className="flex justify-around bg-gray-50 p-3 rounded-lg">
//           <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
//             <input 
//               type="checkbox" 
//               className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
//               checked={includeNumbers} 
//               onChange={() => setIncludeNumbers(prev => !prev)} 
//             />
//             Numbers
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
//             <input 
//               type="checkbox" 
//               className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
//               checked={includeSymbols} 
//               onChange={() => setIncludeSymbols(prev => !prev)} 
//             />
//             Symbols
//           </label>
//         </div>

//         <button
//           onClick={generateRandomString}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md active:scale-[0.98]"
//         >
//           Generate New String
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StringGenerator;