import React,{useState} from 'react'
import {mockSearchResults} from "../constants/mock";
import {XIcon, SearchIcon} from "@heroicons/react"
import SearchResult from './SearchResult';
import { searchSymbol } from '../utils/api/stock-api';
const Search = () => {
    const[input,setInput]=useState("");
    const[bestMatches,setBestMatches]=useState(mockSearchResults.result);
    
    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

  const updateBestMatches = async () => {
    try {
        if (input) {
          const searchResults = await searchSymbol(input);
          const result = searchResults.result;
          setBestMatches(result);
        }
      } catch (error) {
        setBestMatches([]);
        console.log(error);
      }
    };
    
  return (
    <div className=' flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
        <input type='text' value={input} className=' w-full px-4 py-2 focus:outline-none rounded-md'
        placeholder='Search Stock.....'
        onChange={(event)=>{setInput(event.target.value)}}
        onKeyPress={(event)=>{
            if(event.key=="Enter"){
                updateBestMatches();
            }
        }}/>

        <button className=' bg-blue-300 h-full p-3' onClick={updateBestMatches}>
            Search
        </button>
        { input && bestMatches.length>0 ?(<SearchResult results={bestMatches}/>) :null}
    </div>
  )
}

export default Search