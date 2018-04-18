import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import ActionCreators from 'store/ducks/category-products';
import api from 'services/api';
import rootSaga from 'store/sagas';

const categoryProductsFixture = require('./fixtures/category_products.json');

describe('Testing category-products saga', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);
    sagaTester.start(rootSaga);
  });

  it('gets all products from a category', async () => {
    apiMock.onGet('/category_products/1').reply(200, categoryProductsFixture[0]);
    sagaTester.dispatch(ActionCreators.categoryProductsRequest(1));

    await sagaTester.waitFor(ActionCreators.categoryProductsSuccess().type);

    expect(sagaTester.getLatestCalledAction()).toEqual(ActionCreators.categoryProductsSuccess(categoryProductsFixture[0].products));
  });

  it('throws error on failure to get data', async () => {
    apiMock.onGet('/category_products/x').reply(400);
    sagaTester.dispatch(ActionCreators.categoryProductsRequest('x'));

    await sagaTester.waitFor(ActionCreators.categoryProductsFailure().type);

    expect(sagaTester.getLatestCalledAction()).toEqual(ActionCreators.categoryProductsFailure());
  });
});
