import React, {useEffect, useState} from 'react';
import DropDown from '../dropDown';
import Learn from '../learn';
import SelectedItem from './selectedItem';
import Item from './item';
import { debounce, removeFromArray } from '../../utils';
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
    },[]);

    const overlayClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLDivElement).id === "overlay"){
            closeModal();
        }
    };

    const itemOnClick = (id: string) => {
        setSelectedValue(new Set(selectedValue.add(id)));
        if(id.slice(0,1) === 'p'){
            removeFromArray(suggestedPeople, id);
            setSuggestedPeople([...suggestedPeople]);
        }else {
            removeFromArray(suggestedCategories, id);
            setSuggestedCategories([...suggestedCategories]);
        }
        document.getElementById('select-modal-input')?.focus();
    }

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

    const removeSelected = (id: string) => {
        selectedValue.delete(id);
        if(id.slice(0,1) === 'p'){
            suggestedPeople.push(id);
            setSuggestedPeople([...suggestedPeople]);
        }else {
            suggestedCategories.push(id);
            setSuggestedCategories([...suggestedCategories]);
        }
        setSelectedValue(new Set(selectedValue));
    }

    const showSelectedPills = () => {
        let selectedPills: SelectedItem[] = [];
        selectedValue.forEach((id) => {
            let list = id.slice(0,1) === 'p' ? peopleList : categoryList;
            selectedPills.push(
                <SelectedItem
                    key={id}
                    id={id}
                    name={list.get(id)?.name}
                    removeSelected={removeSelected}
                />
            )}
        );
        return selectedPills;
    }

    const showSuggestions = (list: Map<string, item>, selected: string[]) => {
        let result: Item[] = [];
        result = selected.map(value =>
            <Item
                key={list.get(value)?.id}
                id={list.get(value)?.id}
                name={list.get(value)?.name}
                displayIcon={list.get(value)?.displayIcon}
                onClickHandler={itemOnClick}
            />
        );
        return result;
    }

    return (
        <div id="overlay" className="overlay" onClick={(e) => overlayClickHandler(e)}>
            <div className="select-modal">
                <div className="select-modal__header">
                    <div className="select-modal__header__input">
                        {showSelectedPills()}
                        <input
                            id='select-modal-input'
                            className="select-modal__header__text" 
                            placeholder={selectedValue.size > 0 ? '' : 'Search emails, names or groups'}
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
                            {showSuggestions(peopleList, suggestedPeople)}
                        </div>
                    :
                        <></>
                    }
                    {suggestedCategories.length > 0 ?
                        <div className='category'>
                            <h4>Select a group</h4>
                            {showSuggestions(categoryList, suggestedCategories)}
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