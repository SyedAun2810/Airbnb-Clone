import React from "react";
import Navbar from "./components/Navbar";
import Gridd from "./components/Gridd";
import Cards from "./components/Cards";

const App=()=>{
    return(
        <div>
            <Navbar />
            <Gridd />
            <Cards 
                img="katie-zaferes.jpeg"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}
export default App;