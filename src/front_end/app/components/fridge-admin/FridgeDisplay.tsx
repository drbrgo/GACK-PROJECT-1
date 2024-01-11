export default function FridgeDisplay(props: any){

    return (
            <div className="border-2 p-2 m-2 bg-gray-100" > 
            <table className="bg-green-300/60 p-2 rounded-md">
                <thead>
            <tr>
                <th>Id</th>
                <th>Beer Name</th>
                <th>ABV</th>
                <th>Tasting Notes</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.beer.id}</td>
                <td>{props.beer.name}</td>
                <td>{props.beer.abv}</td>
                <td>{props.beer.tastingNotes}</td>
                <td> <button onClick={() => props.removeBeer(props.beer.id)}className='bg-red-500/80 p-2 rd-md' type='button'>Delete
                    </button></td>
            </tr>
            </tbody>
            </table>
             </div>
    )
}