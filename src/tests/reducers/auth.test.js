import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const action = { type: 'LOGIN', uid: 'lkjasdf234AKSDF!1324' };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should remove uid on logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'lkjasdf234AKSDF!1324' }, action);
  expect(state).toEqual({});
});
