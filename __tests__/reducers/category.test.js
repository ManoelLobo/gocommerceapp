import { request, success, failure, setActive } from 'store/ducks/categories';

const initialState = {
  data: [],
  loading: false,
  error: null,
  active: 0,
};

const successData = [{ id: 1 }];

describe('Testing categories reducer', () => {
  it('sets loading true on request', () => {
    const state = request(initialState);

    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('returns data correctly on success', () => {
    const state = success(initialState, { data: successData });

    expect(state).toEqual({ ...initialState, data: successData, active: successData[0].id });
  });

  it('sets error flag on failure', () => {
    const state = failure();

    expect(state).toEqual({ ...initialState, error: true });
  });

  it('sets the active category id', () => {
    const state = setActive(initialState, { id: 1 });

    expect(state).toEqual({ ...initialState, active: 1 });
  });
});
