export interface item {
    name: string;
    displayIcon?: string;
    description: string;
    access: accessModifier;
    added: boolean;
}

export enum accessModifier {
    FULL_ACCESS = 'Full access',
    CAN_EDIT = 'Can edit',
    CAN_VIEW = 'Can view',
    NO_ACCESS = 'No access'
}

export interface inputData {
    people: item[],
    category: item[],
}