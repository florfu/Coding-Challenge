import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import CreateArea from './CreateArea';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
// https://reactjs.org/docs/test-utils.html

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

describe('Test CreateArea component', () => {
  it('Shows the add button when clicking the textarea', () => {
    act(() => {
      createRoot(container).render(<CreateArea />);
    });
    const textArea = document.querySelector('textarea[name="content"]');
    expect(textArea.innerHTML).toBe('');

    act(() => {
      Simulate.click(textArea);
    });

    // add button should appear
    const addButton = document.querySelector('button');
    expect(addButton.innerHTML).toBe('Add');
  });

  it('Calls the addInHome function after pressing add', () => {
    const mockCallBack = jest.fn();

    act(() => {
      createRoot(container).render(<CreateArea handleAddInHome={mockCallBack} />);
    });
    const textArea = document.querySelector('textarea[name="content"]');

    act(() => {
      Simulate.click(textArea);
    });

    const addButton = document.querySelector('button');
    act(() => {
      Simulate.click(addButton);
    });

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
