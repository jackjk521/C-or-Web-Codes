import React from 'react';
import Card from "./card";

const cardDisplay = ({assets}) => {
 
        return (
            <div class="card" style={{width: "18rem"}}>

                {
                    (assets !== 0) ?
                        assets.map(asset =>{
                            return(
                               <Card asset = {asset}/>
                            // <img src = {asset.image_url}/>
                            )
                    }) : null
                }
          </div>
        );
}
export default cardDisplay;