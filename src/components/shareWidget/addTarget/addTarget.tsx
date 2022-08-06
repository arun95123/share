import React, {useState, useEffect} from 'react';
import TargetItem from './targetItem';
import SelectModal from '../../selectModal';
import { item, inputData } from '../../../types';
import './add-target.css';

interface Props {
    data: inputData
}

const AddTarget:React.FC<Props> = ({data}) => {
    const [peopleList, modifyPeopleList] = useState<Map<string, item>>(new Map(data.people.map(person => [person.id, person])));
    const [categoryList, modifyCategoryList] = useState<Map<string, item>>(new Map(data.category.map(cat => [cat.id, cat])));
    const [showModal, setShowModal] = useState(false);
    let notInvitedPeople = new Map();
    let notInvitedCategory = new Map();


    useEffect(() => {
        const closeModalOnEsc = (e: any) => {
            if(e.key === "Escape"){
                setShowModal(false);
            }
        }
        if(showModal){
            document.addEventListener('keydown', closeModalOnEsc);
        }else {
            document.removeEventListener('keydown', closeModalOnEsc);
        }

    },[showModal]);

    const addInvited = (list: Map<string, item>, result: TargetItem[], notAdded: Map<string, item>) => {
        list.forEach((item) => {
            if(item.added){
                result.push(
                    <TargetItem
                        key={item.id}
                        displayIcon={item.displayIcon}
                        name={item.name}
                        description={item.description}
                        access={item.access}
                    />
                );
            }else {
                notAdded.set(item.id, item);
            }
        });
    }

    const showInvitedPeople = () => {
        let invitedList: TargetItem[] = [];
        addInvited(peopleList, invitedList, notInvitedPeople);
        addInvited(categoryList, invitedList, notInvitedCategory);
        return invitedList;
    }

    return(
        <div className="share-widget__add">
            <div className='share-widget__add-input' onClick={() => setShowModal(true)}>
                <div className='share-widget__add-input__text'>
                    People, emails, groups
                </div>
                <button>Invite</button>
            </div>
            {showInvitedPeople()}
            {
                showModal ? 
                    <SelectModal 
                        closeModal={() => setShowModal(false)}
                        peopleList={notInvitedPeople}
                        categoryList={notInvitedCategory}
                        modifyPeopleList={modifyPeopleList}
                        modifyCategoryList={modifyCategoryList}
                    /> 
                : 
                    <></>
            }
        </div>
    );
};

export default AddTarget;