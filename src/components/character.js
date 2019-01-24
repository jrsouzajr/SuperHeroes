import React from 'react';
import PropTypes from 'prop-types';
import './styles/character.scss';

const Character = ({nameCharacter, superpower, weakness, typeCharacter, archEnemy, onClickRemove, onClickEdit}) => (
    <div className={"character " + typeCharacter}>
        <div className="character-name">
            Name: {nameCharacter}
        </div>
        <div className="character-secondLine">
            <div className="character-power">
                Super-power: {superpower}
            </div>
            <div className="character-weakness">
                Weekness: {weakness}
            </div>
        </div>
        <div className="character-type">
            Type of Character: {typeCharacter}
        </div>
        {archEnemy &&
            <div className="character-archEnemy">
                Arch-Enemy: {archEnemy}
            </div>
        }
        <div className="character-options">
            <div className="character-edit" onClick={onClickEdit}>
                ?
            </div>
            <div className="character-exclude" onClick={onClickRemove}>
                X
            </div>
        </div>
    </div>
)

Character.PropTypes = {
    nameCharacter: PropTypes.string.isRequired,
    superpower: PropTypes.string.isRequired,
    weakness: PropTypes.string.isRequired,
    typeCharacter: PropTypes.string,
    onClickOption: PropTypes.func.isRequired
}


export default Character