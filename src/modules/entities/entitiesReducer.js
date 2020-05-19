import { handleActions, combineActions } from '@letapp/redux-actions';
import { messagesActions } from '../messages';

const INITIAL_STATE = {
  chats: {
    // [id]: {
    //   chat
    // }
  },
  messages: {
    // [id]: {
    //   message
    // }
  },
};

const reducer = handleActions(
  {
    [combineActions(
      messagesActions.sendMessageAction.start,
      messagesActions.sendMessageAction.success,
    )]: (state, { payload: { chatId, result } }) => ({
      ...state,
      chats: {
        ...state.chats,
        [chatId]: {
          ...state.chats[chatId],
          lastMessage: result,
        },
      },
    }),
  },
  INITIAL_STATE,
);

export default function entitiesReducer(
  state = INITIAL_STATE,
  action,
) {
  const { payload } = action;
  let stateWithEntities = state;

  if (payload && payload.entities) {
    stateWithEntities = Object.keys(payload.entities).reduce(
      (accState, key) => {
        const entity = accState[key];

        accState[key] = Object.assign(
          {},
          entity,
          payload.entities[key],
        );

        return accState;
      },
      {
        ...state,
      },
    );
  }
  return reducer(stateWithEntities, action);
}
