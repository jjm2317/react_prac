// Ducks Pattern : 리듀서 모듈을 한 파일에서 관리
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
