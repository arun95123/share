import React, {useEffect, useState} from 'react';
import DropDown from '../dropDown';
import Learn from '../learn';
import SelectedItem from './selectedItem';
import Item from './item';
import { debounce } from '../../utils';
import './category.css';
import './select-modal.css';
import { accessModifier, item } from '../../types';

interface Props {
    closeModal: Function;
    peopleList: Map<string, item>;
    categoryList: Map<string, item>;
}


const SelectModal:React.FC<Props> = ({closeModal, peopleList, categoryList}) => {
    let access = accessModifier.FULL_ACCESS;

    // const [suggestedPeople, setSuggestedPeople] = useState(new Map(Array.from(peopleList).slice(0,2)));
    // const [suggestedCategories, setSuggestedCategories] = useState(new Map(Array.from(categoryList).slice(0,2)));
    const [suggestedPeople, setSuggestedPeople] = useState([] as string[]);
    const [suggestedCategories, setSuggestedCategories] = useState([] as string[]);
    const [selectedValue, setSelectedValue] = useState(new Set() as Set<string>);

    const addFirstAvailable = () => {
    }

    useEffect(() => {
        document.getElementById('select-modal-input')?.focus();
    },[])

    const overlayClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLDivElement).id === "overlay"){
            closeModal();
        }
    };

    const peopleItemOnClick = (e: React.MouseEvent<HTMLUListElement>) => {
        // setSelectedValues();
        document.getElementById('select-modal-input')?.focus();
    }

    const categoryItemOnClick = (e: React.MouseEvent<HTMLUListElement>) => {
        // setSelectedValues();
        document.getElementById('select-modal-input')?.focus();
    }

    // const removeSelected = (name: string) => {
    //     // delete selectedValues[name];
    //     // setSelectedValues();
    // }

    const getMatchingNames = (list: Map<string, item>, regex: RegExp) => {
        let suggestedName: string[] = [];
        list.forEach(value => {
            if(regex.test(value.name)){
                suggestedName.push(value.id);
            }
        });
        return suggestedName.filter(value => !selectedValue.has(value));
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){

        }else {
            const regex = new RegExp(`^${e.target.value}`, 'i');
            setSuggestedPeople(getMatchingNames(peopleList, regex));
            setSuggestedCategories(getMatchingNames(categoryList, regex));
        }
    };

    const accessChangeHandler = (val: string) => access = val as accessModifier;

    const onInviteClick = () => {
        closeModal();
    }
    
    const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Tab'){
            if(e.shiftKey){
                (document.getElementsByClassName('share-widget__learn__text')[0] as HTMLElement).focus()
            }
        }
    }

    const learnKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
        if(e.key === 'Tab'){
            document.getElementById('select-modal-input')?.focus();
        }
    }

    // const addSelected = (list: Map<string, item>, result: SelectedItem[]) => {
    //     selectedValues.forEach((item) => result.push(
    //             <SelectedItem
    //                 key={list.get(item)?.id}
    //                 name={list.get(item)?.name}
    //                 removeSelected={removeSelected}
    //             />
    //         )
    //     );
    // }

    // const showSelectedPills = () => {
    //     let selectedPills: SelectedItem[] = [];
    //     addSelected(peopleList, selectedPills);
    //     addSelected(categoryList, selectedPills);
    //     return selectedPills;
    // }

    const showSuggestions = (list: Map<string, item>, selected: string[], clickHandler: Function) => {
        let result: Item[] = [];
        result = selected.map(value =>
            <Item
                key={list.get(value)?.id}
                name={list.get(value)?.name}
                displayIcon={list.get(value)?.displayIcon}
                onClickHandler={clickHandler}
            />
        );
        return result;
    }

    return (
        <div id="overlay" className="overlay" onClick={(e) => overlayClickHandler(e)}>
            <div className="select-modal">
                <div className="select-modal__header">
                    <div className="select-modal__header__input">
                        {/* {showSelectedPills()} */}
                        <input
                            id='select-modal-input'
                            className="select-modal__header__text" 
                            // placeholder={Object.keys(selectedValues).length > 0 ? '' : 'Search emails, names or groups'}
                            onChange={(e) => debounce(onInputChange, 500)(e)}
                            onKeyDown={inputKeyDown}
                        />
                    </div>
                    <DropDown 
                        defaultValue={access}
                        options={[accessModifier.FULL_ACCESS, accessModifier.CAN_EDIT, accessModifier.CAN_VIEW, accessModifier.NO_ACCESS]}
                        onChangeHandler={accessChangeHandler}
                    />
                    <button onClick={onInviteClick}>Invite</button>
                </div>
                <div className="select-modal__options">
                    {suggestedPeople.length > 0 ?
                        <div className='category'>
                            <h4>Select a person</h4>
                            {showSuggestions(peopleList, suggestedPeople, peopleItemOnClick)}
                        </div>
                    :
                        <></>
                    }
                    {suggestedCategories.length > 0 ?
                        <div className='category'>
                            <h4>Select a group</h4>
                            {showSuggestions(categoryList, suggestedCategories, categoryItemOnClick)}
                        </div>
                    :
                        <></>
                    }
                </div>
                <Learn onKeyDownHander={learnKeyDown}/>
            </div>
        </div>
    )
}

export default SelectModal;