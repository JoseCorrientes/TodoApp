import React from 'react';
import SkeletonLoaderCSS from "./SkeletonLoader.module.css";

function SkeletonLoader () {
    
    return(
      <div className={SkeletonLoaderCSS.SkeletonListContainer}>
        
        {[1,2,3,4,5,6].map(item=>  
        <div className={SkeletonLoaderCSS.SkeletonContainer}>
            <p className= {SkeletonLoaderCSS.CircleBox}
                 alt="Loader Skeleton"
                />
            <p className={SkeletonLoaderCSS.TextBox}
            />
            <p className= {SkeletonLoaderCSS.CircleBox2}
                />
        </div>)
}


      </div>  
    )
}

export { SkeletonLoader };

