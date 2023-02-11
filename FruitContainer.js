
import { useState, useEffect } from "react"
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";


function FruitContainer(props) {
// initialize fruit list to the full list passed in props
    const[fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)


    // to updaste state, need function that updats when the filter value
     //changes
     // this function will store the filter state, and filter
     // the list of fruits to display

     const handleFilterChanges = (event) => {
        event.preventDefault() ;

        const filterValue = event.target.value;

        setFruitsToDisplay((_prevState) => {
            // remove fruits that don't contain filter value
            const filteredFruitList = props.fruit.filter((fruit) => {
        //incliuse values that match the userinput (events.target.value)
                return fruit.toLowerCase().includes(filterValue.toLowerCase)
            })
            return filteredFruitList
        })

     }




    return (
        <div>
            <FruitFilter onChange={(e) => handleFilterChanges(e)}/>
            <FruitList fruits={fruitsToDisplay}/>
        </div>
    )
}
export default FruitContainer
