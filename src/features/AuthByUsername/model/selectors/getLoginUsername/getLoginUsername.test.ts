import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginError', () => {
  test('should return username', () => {
    const state = {
      login: {
        username: 'username',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });
  test('should work with empty state', () => {
    const state = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
