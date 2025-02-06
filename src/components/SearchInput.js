import React, { useRef, useEffect } from "react";
import axios from "axios";

export default function SearchInput({ setCharecters, setSearchCount, characters }) {
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  function handleChange(event) {
      let searchQuery = event.target.value;
      let baseUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;

      if (searchQuery.length >= 3) {
        
          axios.get(baseUrl).then(function(response) {
            const count = response.data.info.count;
            const charactersInfo = response.data.results;
            setCharecters([])

            let charectersList = [];

            charactersInfo.forEach(el => {
              // let normalDate = toISOString(el.created).split('T')[0];
              let character = {
                id: el.id,
                name: el.name,
                status: el.status,
                created: el.created.split('T')[0],
                url: el.url,
              };

              charectersList.push(character)

            });
            
            setCharecters([
              ...charectersList
            ])
            setSearchCount(count)
            console.log(characters);
            
          }).catch((error) => {
            console.log('error', error);
            
          });

      
      }    
    }

    return (
        <input onChange={handleChange} ref={inputElement} type="text" name="text" className="focus:outline-0 focus:border focus:border-purple pl-6 shadow-7xl w-626 h-16 text-22 placeholder:text-purple font-bold text-purple max-tablet:w-[380px] max-phoneL:w-[330px] max-phoneM:w-[280px] mb-[10px]" placeholder="Search characters..."/>
    )
}
