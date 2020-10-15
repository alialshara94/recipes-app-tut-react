import React from 'react';
import style from './recipe.module'

const Recipe = ({title,calories,image}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    );
}

export default Recipe;