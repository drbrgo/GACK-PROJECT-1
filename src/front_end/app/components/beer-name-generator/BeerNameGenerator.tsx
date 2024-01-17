'use client';

const BeerNameGenerator = () => {

        const webUrl = "http://localhost:8080/" 


        const handleSubmit = async(event: any) =>{
            event.preventDefault();
            //console.log("it is clicked");

            const data = {
                taste: String(event.target.taste.value),
            }
            //console.log(data);

            await fetch(webUrl + "api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            }).then((response) => response.json()).then(data => {
                console.log(data);
            })
//////////////////////////////////////////////////////////

        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }, 
        //     body: JSON.stringify(data),
        // }).then((response) => response.json()).then(data => {
        //     console.log(data);
          
        // })

        }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Enter 1 taste word</h3>
                    <input type="text" autoComplete="off" id="taste"  required minLength={1} maxLength={40}></input>
                </div>
                <button type="submit">Submit</button> 
            </form>
        </div>
    )
}
//             <div className="border-2 p-2 m-2 bg-gray-100" > 
            
//                     {beer ?

//                 <div>
//                     <form onSubmit={handleSubmit}>
//                         <h1>Edit Beer</h1>
//                         <div>
//                             <h2>Name: </h2>
//                             <input type="text" autoComplete="off" id="name" defaultValue={props.beer.name} required minLength={1} maxLength={40}></input>
//                         </div>
//                         <div>
//                             <h2>ABV: </h2>
//                             <input type="number" id="abv" defaultValue={props.beer.abv} step={0.01} maxLength={100}></input>
//                         </div>
//                         <div>
//                             <h2>Tasting Notes: </h2>
//                             <input type="text" autoComplete="off" id="tastingNotes" defaultValue={props.beer.tastingNotes} required minLength={4} maxLength={80}></input>
//                         </div>
//                         <button className="bg-green-500/80 p-2 rounded-md" type="submit">Submit</button>
//                         <button className="bg-red-500/80 p-2 rounded-md" onClick={() => setBeer(prev => !prev)}>Cancel</button>
//                     </form>
//                 </div>
//                 :

//                 <div>
//                     <table className="bg-green-300/60 p-2 rounded-md">
//                         <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Beer Name</th>
//                         <th>ABV</th>
//                         <th>Tasting Notes</th>
//                         <th>Delete</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>{props.beer.id}</td>
//                         <td>{props.beer.name}</td>
//                         <td>{props.beer.abv}</td>
//                         <td>{props.beer.tastingNotes}</td>
//                         <td> <button onClick={() => props.removeBeer(props.beer.id)}className='bg-red-500/80 p-2 rd-md' type='button'>Delete</button></td>
//                         <td> <button onClick={() => setBeer(prev => !prev)}className='bg-blue-500/80 p-2 rd-md' type='button'>Edit</button></td>
//                     </tr>
//                     </tbody>
//                     </table>
//                 </div>
//             }   
//              </div>
//             )
// }

export default BeerNameGenerator;