import * as React from 'react';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import { storeMocked as store } from "../test/utils/mockStore";
import {storeMockedNoAuthedUer} from "../test/utils/mockStore";
import App from "./App";

describe("App", () => {
  it('renders the login page when there is no authed User', () => {
    const app =  render(
          <MemoryRouter>
            <Provider store={storeMockedNoAuthedUer}>
              <App />
            </Provider>
          </MemoryRouter>
      );

   const loginPage = app.getByTestId('login-page');
    expect(loginPage).not.toHaveTextContent('Would You Rather')
    expect(loginPage).toHaveTextContent('Login as selected User')
  })

  it('render the dashboard component where there is an authed user', () => {
    const app =  render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
    );

    const dashboard = app.getByTestId('dashboard')
    expect(dashboard).toHaveTextContent('Would You Rather')
    expect(dashboard).not.toHaveTextContent('Login as selected User')
  })
})


