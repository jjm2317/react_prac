const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});


