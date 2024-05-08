import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
  test('should return false', () => {
    const state = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
