import Avatar from '../images/Avatar.png';
import AvatarS from '../images/Avatar.svg';
import AvatarL from '../images/LadyAvatar.png';
import Oslash from '../images/oslash.svg';
import { accessModifier } from '../types';

let data =  {
    "people": [
        {
            id: "1",
            name: "Wade Cooper",
            displayIcon: Avatar,
            description: 'wade_cooper@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "2",
            name: "Arlene Mccoy",
            displayIcon: Avatar,
            description: 'arlene_mccoy@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "3",
            name: "Barly Samson",
            description: 'barley_samson@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "4",
            name: "Carloine Walker",
            description: 'caroline_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "5",
            name: "Carloine Palker",
            description: 'caroline_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "6",
            name: "Cat Win",
            description: 'cat_win@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "7",
            name: "Cally Walker",
            description: 'cally_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: true,
        },
        {
            id: "8",
            name: "Cathy Waltham",
            description: 'cathy_waltham@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "9",
            name: "Cooper Walker",
            description: 'cooper_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "10",
            name: "Carl Sam",
            description: 'carl_sam@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarS,
            added: false,
        },
        {
            id: "11",
            name: "Devon Dudly",
            description: 'devon_dudly@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarS,
            added: false,
        },
        {
            id: "12",
            name: "Zack Stud",
            description: 'zack_stud@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
    ],
    "category": [
        {
            id: "1",
            name: "Product",
            description: '30 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "2",
            name: "Engineer",
            description: '15 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: true,
        },
        {
            id: "3",
            name: "Everyone at OSlash",
            displayIcon: Oslash,
            description: '25 workspace members',
            access: accessModifier.CAN_EDIT,
            added: true,
        },
        {
            id: "4",
            name: "Operations",
            description: '20 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "5",
            name: "Support",
            description: '35 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "6",
            name: "Corporation",
            description: '2 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
    ]
}

export default data;