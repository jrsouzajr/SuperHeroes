import React from 'react';
import Character from './character';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterFromList, editCharacterFromList } from '../actions';

import './styles/listCharacter.scss';

class ListCharacter extends React.Component {

    _onClickEdit = (character) => {
        this.props.editCharacterFromList(character)
    }

    _onClickRemove = (id) => {
        this.props.removeCharacterFromList(id)
    }

    render() {
        const { characterList } = this.props
        console.log(characterList)
        return (
            <div className="listCharacter">
                {characterList.length > 0 ?
                    characterList.map(character => {
                        return <Character 
                                nameCharacter={character.name} 
                                superpower={character.power} 
                                weakness={character.weakness} 
                                typeCharacter={character.typeCharacter} 
                                archEnemy={character.archEnemy && character.archEnemy}
                                onClickEdit={() => this._onClickEdit(character)} 
                                onClickRemove={() => this._onClickRemove(character.id)}/>
                    })
                    :
                    <div className="listCharacter-text">
                        You need add some character
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = store => ({
    characterList: store.characterState.listCharacters
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeCharacterFromList, editCharacterFromList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacter);