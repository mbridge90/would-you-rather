import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from "./Dashboard";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import { storeMocked as store } from "../../test/utils/mockStore";

const dashboardComponent = () => {
  return render(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
  );
}

describe('Dashboard', () => {
  it('will display unanswered questions by default', () => {
    const component = dashboardComponent()

    const questionList = component.getByTestId('question-list')
    expect(questionList).not.toHaveTextContent('have code reviews conducted by peers')
    expect(questionList).toHaveTextContent('take a course on ReactJS')
  });

  it('toggle button changes text when clicked',() => {
    const component = dashboardComponent()

    const toggleButton = component.getByTestId('toggle-button');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent('View answered Questions')
    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveTextContent('View unanswered Questions')
  })

  it('displays answered questions when button is toggled', () => {
    const component = dashboardComponent()

    const toggleButton = component.getByTestId('toggle-button');
    fireEvent.click(toggleButton);

    const questionList = component.getByTestId('question-list')
    expect(questionList).toHaveTextContent('have code reviews conducted by peers')
    expect(questionList).not.toHaveTextContent('take a course on ReactJS')
  })
});
