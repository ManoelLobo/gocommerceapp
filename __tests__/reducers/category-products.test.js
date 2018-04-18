import { request, success, failure } from 'store/ducks/category-products';

const initialState = {
  data: [],
  category: null,
  loading: false,
  error: null,
};

const data = [{ id: 1 }];

describe('Testing categorized products reducer', () => {
  it('sets loading true on request', () => {
    const state = request(initialState, { data });

    expect(state).toEqual({ ...initialState, category: data, loading: true });
  });

  it('returns data correctly on success', () => {
    const state = success(initialState, { data });

    expect(state).toEqual({ ...initialState, data });
  });

  it('sets error flag on failure', () => {
    const state = failure();

    expect(state).toEqual({ ...initialState, error: true });
  });
});
