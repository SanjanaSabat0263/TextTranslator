import { use, useState } from "react";
import axios from "axios";
import { LoaderCircle } from 'lucide-react'

function App(){
  const [textInput, setTextInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  //const [translatedText, setTranslatedText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading]= useState(false);

  const handleTextTranslation = async() =>{
    setLoading(true);
    try {
      const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': '6a1ca6f90cmshea37e38ebaed25cp171af7jsna4d16280a08b',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: `${textInput}`,
    source: 'en',
    target: `${selectValue}`,
    format: 'text'
  }
};

    
    const response = await axios.request(options);
    //console.log(response.data?.data?.translations?.[Number(0)]?.translatedText);
    setResult(response.data?.data?.translations?.[Number(0)]?.translatedText);
    setLoading(false);
   }
    catch (error) {
      console.log(error?.data);
      setLoading(false);
    }
  }  
  //console.log(textInput);
  //console.log(selectValue);
  
  return(
    <div className="h-screen w-screen bg-teal-800 flex items-center justify-center">

     <div className="flex items-center justify-center flex-col gap-y-10 ">
      <h1 className="text-3xl text-white font-bold">Text Translator</h1>
      
     <div className="flex items-center justify-center flex-col gap-y-5">
      <textarea 
        name="input-text" 
        className="bg-white h-30 w-125 border border-amber-950 outline -none rounded-b-lg text-lg px-5 py-2"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <textarea name="input-text" className="bg-white h-30 w-125 border border-amber-950 outline -none rounded-b-lg text-lg px-5 py-2" value={result} readOnly/>
      </div>

      <div>
        <label htmlFor="options" className="text-white">Converted Into : </label>
      <select name="value" className="bg-teal-200 px-2 py-1 rounded-lg border border-amber-500 outline-none cursor-pointer" onChange={(e) => setSelectValue(e.target.value)}>
          <option value="">Select</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          <option value="or">Oriya</option>
          <option value="zh">Chinese</option>
          <option value="ko">Korean</option>
          <option value="ja">Japanese</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
 
      <button className="bg-teal-100 text-black mx-auto w-125 py-2 rounded-lg cursor-pointer flex items-center justify-center" onClick={handleTextTranslation}>
        {
          loading ? (<LoaderCircle className="animate-spin"/>):" Translate"
        }
       </button>
      </div>
    </div>
  )
}

export default App;