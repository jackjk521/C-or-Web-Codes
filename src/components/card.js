import React from "react";

const card = ({asset}) => {
        return (
            <div>
                <img src= {asset.image_url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{asset.name}</h5>
                    <p class="card-text">{asset.permalink}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
          
        );
}
export default card;
