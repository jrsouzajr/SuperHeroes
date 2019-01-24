import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterToList } from '../actions';
import './styles/addCharacter.scss'

class addCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableArchEnemy: false
        }
    }

    _addCharacter = () => {
        let name = this.name.value;
        let power = this.power.value;
        let weakness = this.weakness.value;
        let typeCharacter = this.type.value;

        if (name && power && weakness && typeCharacter) {
            if(this.state.enableArchEnemy) {
                let archEnemy = this.archEnemy.value
                this.props.addCharacterToList({"id": Math.floor(Math.random() * 10000), "name": name, "power": power, "weakness": weakness, "archEnemy": archEnemy, "typeCharacter": typeCharacter},
                    this._resetInputs())
            }
            else {
                this.props.addCharacterToList({"id": Math.floor(Math.random() * 10000), "name": name, "power": power, "weakness": weakness, "typeCharacter": typeCharacter},
                    this._resetInputs())
            }
        }

    }

    _resetInputs = () => {
        this.name.value = null;
        this.power.value = null;
        this.weakness.value = null;
        this.type.value = 'Super-Hero';
        this.setState({enableArchEnemy: false})
    }

    _enableArchEnemy = () => {
        this.setState({
            enableArchEnemy: !this.state.enableArchEnemy
        })
    }

    render() {
        const { characterList, characterEdit } = this.props

        for(var i in characterEdit) {
            if(characterEdit.hasOwnProperty(i)) {
                this.name.value = characterEdit.name  
                this.power.value = characterEdit.power
                this.weakness.value = characterEdit.weakness
                this.type.value = characterEdit.typeCharacter
            } 
        }
        return (
            <div className="addCharacter">
                <div className="addCharacter-blockInputs">
                    <input className="addCharacter-name" ref={ref => this.name = ref} placeholder={"Name"}/>
                    <input className="addCharacter-superpower" ref={ref => this.power = ref} placeholder={"Super-power"}/>
                    <input className="addCharacter-weakness" ref={ref => this.weakness = ref} placeholder={"Weakness"}/>
                    <select className="addCharacter-optionType" ref={ref => this.type = ref}>
                        <option className="addCharacter-superHero" value="Super-Hero">Super-Hero</option>
                        <option className="addCharacter-villain" value="Villain">Villain</option>
                    </select>
                </div>
                <div className="addCharacter-blockAdd">
                    {characterList.length > 0 &&
                        <div className="addCharacter-blockCheckbox">

                            <input type="checkbox" onChange={() => this._enableArchEnemy()} checked={this.state.enableArchEnemy}/>Arch-enemy?
                            {this.state.enableArchEnemy &&
                                <select className="addCharacter-archenemy" ref={ref => this.archEnemy = ref}>
                                    {characterList.map(character => {
                                        return <option className="addCharacter-character">{character.name}</option>
                                    })}
                                </select>
                            }
                        </div>
                    }
                    <button className="addCharacter-addCharacter" onClick={e => this._addCharacter(e)}>
                        Add Character to List
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    characterList: store.characterState.listCharacters,
    characterEdit: store.characterState.editCharacter
  });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addCharacterToList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(addCharacter)