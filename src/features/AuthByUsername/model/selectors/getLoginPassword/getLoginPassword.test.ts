import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError', () => {
  test('should return password', () => {
    const state = {
      login: {
        password: '123123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123123');
  });
  test('should work with empty state', () => {
    const state = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
