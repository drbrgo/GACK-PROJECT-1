import { useState } from "react"

//Handling Editing and Removing Beers below

interface Beer {
    id : number,
    name: string,
    tastingNotes: string,
    abv: number
}
export default function FridgeDisplay(props: any){
    
        const webUrl = "http://localhost:8080"

        //useState<boolean>(false) is used below in ternary operator to determine whether or not we are in a state of editing the beer.
        const [beer, setBeer] = useState<boolean>(false);

        const handleSubmit = (event: any) =>{
            event.preventDefault();

            const data = {
                name: String(event.target.name.value),
                abv: Number(event.target.abv.value),
                tastingNotes: String(event.target.tastingNotes.value),
            }

            fetch(webUrl + "/user/fridge/updateBeer/" + props.beer.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((data: Beer[]) => {
            props.setBeers(data);
            setBeer(prev => !prev)
        })

        }
    return (
            <div  className="fridge"  > 
            {/* if beer is true, editing beer card will be present. Otherwise, it will not. */}
                    {beer ?

                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Edit Beer</h1>
                        <div>
                            <h2>Name: </h2>
                            <input type="text" autoComplete="off" id="name" defaultValue={props.beer.name} required minLength={1} maxLength={40}></input>
                        </div>
                        <div>
                            <h2>ABV: </h2>
                            <input type="number" id="abv" defaultValue={props.beer.abv} step={0.01} maxLength={100}></input>
                        </div>
                        <div>
                            <h2>Tasting Notes: </h2>
                            <input type="text" autoComplete="off" id="tastingNotes" defaultValue={props.beer.tastingNotes} required minLength={4} maxLength={80}></input>
                        </div>
                        <button className="bg-green-500/80 p-2 rounded-md" type="submit">Submit</button>
                        <button className="bg-red-500/80 p-2 rounded-md" onClick={() => setBeer(prev => !prev)}>Cancel</button>
                    </form>
                </div>
                :

                <div>
                    <table className="bg-green-300/60 p-2 rounded-md">
                        <thead>
                    <tr>
                        <th>Id</th>
                        <th>Beer Name</th>
                        <th>ABV</th>
                        <th>Tasting Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{props.beer.id}</td>
                        <td>{props.beer.name}</td>
                        <td>{props.beer.abv}</td>
                        <td>{props.beer.tastingNotes}</td>
                        <td> <button onClick={() => props.removeBeer(props.beer.id)}className='bg-red-500/80 p-2 rd-md' type='button'>Delete</button></td>
                        <td> <button onClick={() => setBeer(prev => !prev)}className='bg-blue-500/80 p-2 rd-md' type='button'>Edit</button></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            }   
             </div>
            )
}