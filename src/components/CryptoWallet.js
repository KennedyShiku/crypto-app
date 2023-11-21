import React from "react";

function CryptoWallet({name, amount, imagesrc}){

    return(
        <React.Fragment>
            <div>
                <img src={imagesrc} alt="Picture Unavailable" />
                <h1>{name}</h1>
                <h2>Amount: {amount}</h2>
            </div>
        </React.Fragment>
    );
}


export default CryptoWallet;