import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import ActionCreators from 'store/ducks/categories';
import api from 'services/api';
import rootSaga from 'store/sagas';

const categoriesFixture = require('./fixtures/categories.json');

describe('Testing categories saga', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);
    sagaTester.start(rootSaga);
  });

  it('gets all categories', async () => {
    apiMock.onGet('/categories').reply(200, categoriesFixture);
    sagaTester.dispatch(ActionCreators.categoriesRequest());

    await sagaTester.waitFor(ActionCreators.categoriesSuccess().type);

    expect(sagaTester.getLatestCalledAction()).toEqual(ActionCreators.categoriesSuccess(categoriesFixture));
  });

  it('throws error on failure to get data', async () => {
    apiMock.onGet('/categories').reply(400);
    sagaTester.dispatch(ActionCreators.categoriesRequest());

    await sagaTester.waitFor(ActionCreators.categoriesFailure().type);

    expect(sagaTester.getLatestCalledAction()).toEqual(ActionCreators.categoriesFailure());
  });
});
