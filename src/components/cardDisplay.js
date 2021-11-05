import React from 'react';
import Card from "./card";
// import GridSystem from "./GridSystem"



const cardDisplay = ({assets}) => {
 
        return (
            <div class="cardBody">

                {
                    (assets !== 0) ?
                        assets.map(asset =>{
                            return(
                               <Card asset = {asset}/>
                            )
                    }) : null
                }
          </div>

        // <div className='App'>
        // {/* colCount is the number of columns for our grid system.
        //     md is a bootstrap breakpoint (will discuss breakpoints in the article)
        // */}
        // <GridSystem colCount={2} md={6}>
        // {/* Here we are mapping every element to an <Item /> and pass props.
        //     map returns an array of JSX that the grid system will take as children.
        // */}
        //         {
        //             (assets !== 0) ?
        //                 assets.map(asset =>{
        //                     return(
        //                        <Card  key = {asset.id} asset = {asset}/>
        //                     )
        //             }) : null
        //         }
        // </GridSystem>
        // </div>
        );
}
export default cardDisplay;