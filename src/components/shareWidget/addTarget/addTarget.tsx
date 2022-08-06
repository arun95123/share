import React, {useState, useEffect} from 'react';
import TargetItem from './targetItem';
import SelectModal from '../../selectModal';
import { item, inputData } from '../../../types';
import './add-target.css';

interface Props {
    data: inputData
}

const AddTarget:React.FC<Props> = ({data}) => {
    const [peopleList, modifyPeopleList] = useState(new Map(data.people.map(person => [person.id, person])) as Map<string, item>);
    const [categoryList, modifyCategoryList] = useState(new Map(data.category.map(cat => [cat.id, cat])) as Map<string, item>);
    const [showModal, setShowModal] = useState(false);

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

    const addInvited = (list: Map<string, item>, result: TargetItem[]) => {
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
            }
        });
    }

    const showInvitedPeople = () => {
        let invitedList: TargetItem[] = [];
        addInvited(peopleList, invitedList);
        addInvited(categoryList, invitedList);
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
                        peopleList={peopleList}
                        categoryList={categoryList}
                    /> 
                : 
                    <></>
            }
        </div>
    );
};

export default AddTarget;