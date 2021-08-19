/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { Asset, Health, UpdateUserInput, User } from '~/graphql/types';

export const anAsset = (overrides?: Partial<Asset>, relationshipsToOmit: Set<string> = new Set()): Asset => {
    relationshipsToOmit.add('Asset');
    return {
        uid: overrides && overrides.hasOwnProperty('uid') ? overrides.uid! : 'consequatur',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'non',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'neque',
    };
};

export const aHealth = (overrides?: Partial<Health>, relationshipsToOmit: Set<string> = new Set()): Health => {
    relationshipsToOmit.add('Health');
    return {
        history: overrides && overrides.hasOwnProperty('history') ? overrides.history! : ['eligendi'],
    };
};

export const anUpdateUserInput = (overrides?: Partial<UpdateUserInput>, relationshipsToOmit: Set<string> = new Set()): UpdateUserInput => {
    relationshipsToOmit.add('UpdateUserInput');
    return {
        uid: overrides && overrides.hasOwnProperty('uid') ? overrides.uid! : 'ullam',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'eveniet',
        age: overrides && overrides.hasOwnProperty('age') ? overrides.age! : 9461,
        assets: overrides && overrides.hasOwnProperty('assets') ? overrides.assets! : ['aut'],
    };
};

export const aUser = (overrides?: Partial<User>, relationshipsToOmit: Set<string> = new Set()): User => {
    relationshipsToOmit.add('User');
    return {
        uid: overrides && overrides.hasOwnProperty('uid') ? overrides.uid! : 'quo',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'porro',
        age: overrides && overrides.hasOwnProperty('age') ? overrides.age! : 667,
        assets: overrides && overrides.hasOwnProperty('assets') ? overrides.assets! : [relationshipsToOmit.has('Asset') ? {} as Asset : anAsset({}, relationshipsToOmit)],
        health: overrides && overrides.hasOwnProperty('health') ? overrides.health! : relationshipsToOmit.has('Health') ? {} as Health : aHealth({}, relationshipsToOmit),
        score: overrides && overrides.hasOwnProperty('score') ? overrides.score! : 8645,
    };
};
