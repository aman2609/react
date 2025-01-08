import {useState} from 'react'

const TastyRecipe = () => {
    const [searchRecipeText, setSearchRecipeText] = useState("")

    const [recipes, setRecipes] = useState([])

    async function getFilteredRecipe(){
        const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q="+searchText+"&app_id=902e3d43&app_key=b383ab8f156dac41fed16430566d9b84%09")
        const data = await response.json()
        console.log(data.hits);       
        setRecipes(data.hits)
    }

    console.log(searchRecipeText);
    
    return (
        <div className='mx-[12%]'>
            <div className='text-center '>
                <input className='w-[50%] mx-[25%] my-[1%] py-4 text-center text-2xl border border-black rounded-md'
                type="text"
                    placeholder="Search by recipe name, category..."
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    value={searchRecipeText} />
                <button onClick={()=>{
                    getFilteredRecipe()
                }} className='border border-black rounded-md w-[15%] mx-[35%] text-2xl py-2 hover:bg-slate-200'>Search Recipe</button>
            </div>
            <div>
                {/* {recipes.map(()=>{
                    return
                })} */}
            </div>
        </div>
    )
}

export default TastyRecipe;