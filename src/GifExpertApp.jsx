import { useState } from "react"
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Mr. Bean', 'Harry Potter' ]);
    const onAddCategory = () =>{
        setCategories([  'Disney', ...categories ])
        // setCategories( cat= [...categories, 'Disney'] )
    }

    return(
        <>

        <h1>GifExpertApp</h1>
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map( category => {
                return <li key={ category }>{category}</li>
            } ) }
            
        </ol>

        </>
    )
}