import Card from '@/components/Card';
import SearchInput from '@/components/SearchInput.js';
// import Card from '@/components/Card';
import { useState } from "react";

export default function Home() {
  const [searchCount, setSearchCount] = useState(0);
  const [characters, setCharecters] = useState([])

  
  const cardList = characters.map((char) => {
    return (
      <Card key={char.id} title={char.name} status={char.status} created={char.created} url={char.url}/>
    )
    
  })
  
  

  return (
    <main className="h-screen flex flex-col content-center pt-32 overflow-x-hidden">
      <div className="mx-auto flex items-center mb-[67] flex-col w-626 max-tablet:w-[380px] max-phoneL:w-[330px] max-phoneM:w-[280px]">
        <SearchInput setCharecters={setCharecters} setSearchCount={setSearchCount} characters={characters}/>
        <p className="text-dark self-start">Found characters: {searchCount}</p>
      </div>

      <div className="grid justify-items-center gap-x-5 gap-y-5 md:max-desktopM:grid-cols-2 md:max-desktopM:w-[1000px] md:max-desktopL:grid-cols-1 grid-cols-2 w-[1596px] md:max-desktopL:w-[1140px] mx-auto md:max-desktopS:grid-cols-1 md:max-desktopS:w-[768px] max-tablet:w-[415px] max-tablet:grid-cols-1 max-phoneL:w-[365px] max-phoneM:w-[280px]">
        {cardList}
      </div>
    </main>
  );
}


// md:max-desktopM:grid-cols-3 grid-cols-2