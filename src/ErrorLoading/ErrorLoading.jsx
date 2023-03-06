import React from "react";
import ErrorLoadingCSS from "./ErrorLoading.module.css";

function ErrorLoading () {

    return(
    <div className={ErrorLoadingCSS.ErrorLoadingForm}>
        <p className={ErrorLoadingCSS.ErrorText}>
        Loading ....
        </p>
    </div>)
}

export {ErrorLoading};