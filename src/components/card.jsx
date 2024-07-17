/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


export const Card = ({ nameCharacter, imgCharacter, statusCharacter, speciesCharacter, genderCharacter, originCharacter }) => {
    return (
        <div className="card">
            <img src={imgCharacter} alt={nameCharacter} />
            <h3>{nameCharacter}</h3>
            <p>Status: {statusCharacter}</p>
            <p>Species: {speciesCharacter}</p>
            <p>Gender: {genderCharacter}</p>
            <p>Origin: {originCharacter}</p>
        </div>
    );
};
