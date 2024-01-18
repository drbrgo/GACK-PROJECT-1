'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
// //  import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function FridgeSearch(props: any) {

  const {dataContainerRef} = props;
  const webUrl = "http://localhost:8080"

  const router = useRouter();

  // function term()
  //   {
  //    let input = document.getElementById("searchTerm");
  //    alert(input);
  //   }

  
return(
  <div>
   <h1>Search for a Friend's Fridge</h1>
   <div
   ref={dataContainerRef}
   className='data-container'
   dangerouslySetInnerHTML={{ __html: dataContainerRef.htmltag }}>
   </div>
    </div>
)
    // const handleSubmit= (event) => {
    //     event.preventDefault()
    //     router.push(webUrl + "/user/fridge/guest/" + term)
    //     console.log(term)
    // }
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();


//   function handleSearch(term: string) {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set('query', term);
//     } else {
//       params.delete('query');
//     }
//     replace(`${pathname}?${params.toString()}`)
//   }
 
//   return (
//     <div className="relative flex flex-1 flex-shrink-0">
//       <label htmlFor="search" className="sr-only">
//         Search
//       </label>
//       <input
//         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//         placeholder={placeholder}
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//         //May not need the below line.
//         defaultValue={searchParams.get('query')?.toString()}
//       />
//     </div>
//   );
 }