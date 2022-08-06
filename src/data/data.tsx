import Avatar from '../images/Avatar.png';
import AvatarS from '../images/Avatar.svg';
import AvatarL from '../images/LadyAvatar.png';
import Oslash from '../images/oslash.svg';
import { accessModifier } from '../types';

let data =  {
    "people": [
        {
            id: "p1",
            name: "Arlene Mccoy",
            displayIcon: Avatar,
            description: 'arlene_mccoy@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "p2",
            name: "Barly Samson",
            description: 'barley_samson@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "p3",
            name: "Cooper Walker",
            description: 'cooper_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "p4",
            name: "Cally Walker",
            description: 'cally_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: true,
        },
        {
            id: "p5",
            name: "Carl Sam",
            description: 'carl_sam@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarS,
            added: false,
        },
        {
            id: "p6",
            name: "Carloine Palker",
            description: 'caroline_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "p7",
            name: "Carloine Walker",
            description: 'caroline_walker@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "p8",
            name: "Cathy Waltham",
            description: 'cathy_waltham@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "p9",
            name: "Cat Win",
            description: 'cat_win@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarL,
            added: false,
        },
        {
            id: "p10",
            name: "Devon Dudly",
            description: 'devon_dudly@mail.com',
            access: accessModifier.FULL_ACCESS,
            displayIcon: AvatarS,
            added: false,
        },
        {
            id: "p11",
            name: "Wade Cooper",
            displayIcon: Avatar,
            description: 'wade_cooper@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "p12",
            name: "Zack Stud",
            description: 'zack_stud@mail.com',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
    ],
    "category": [
        {
            id: "c1",
            name: "Admin",
            description: '2 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "c2",
            name: "Corporation",
            description: '2 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "c3",
            name: "Engineer",
            description: '15 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: true,
        },
        {
            id: "c4",
            name: "Everyone at OSlash",
            displayIcon: Oslash,
            description: '25 workspace members',
            access: accessModifier.CAN_EDIT,
            added: true,
        },
        {
            id: "c5",
            name: "Operations",
            description: '20 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "c6",
            name: "Product",
            description: '30 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
        {
            id: "c7",
            name: "Support",
            description: '35 workspace members',
            access: accessModifier.FULL_ACCESS,
            added: false,
        },
    ]
}

export default data;