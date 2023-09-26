export type GetCartaByIDResponse = {
    value:   Heroe|Arma;
    errors:  string[];
    success: boolean;
}

export type ID = {
    timestamp:    number;
    machine:      number;
    pid:          number;
    increment:    number;
    creationTime: Date;
}

export type Heroe = {
    power:   number;
    live:    number;
    defense: number;
    dodges:  number;
    attack:  Dice;
    damage:  Dice;
    id:      ID;
    imgUrl:  string;
    card:    string;
    name:    string;
    type:    string;
    subType: string;
}
export type Arma = {
    effects: Effect[];
    id:      ID;
    imgUrl:  string;
    card:    string;
    name:    string;
    type:    string;
    subType: string;
}
export type Effect = {
    modifier:   Dice;
    effectType: string;
    attribute:  string;
    turns:      number;
    target:     string;
    conditions: Conditions;
}
export type Conditions = {
    conditionTarget: string;
    conditionType:   string;
    value:           number;
}
export type Dice = {
    base:  number;
    rolls: number;
    sides: number;
}