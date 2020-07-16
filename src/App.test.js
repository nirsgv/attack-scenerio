import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);
import { getCurrentTasks } from './helpers';
import { shallow, mount } from 'enzyme';


test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});


test('getCurrentTasks to be a function', () => {
    expect(typeof getCurrentTasks).toBe('function');
});

const setup = (props = {}, state = null) => {
    return mount(<App store={props}/>);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};


// it('renders without crashing', () => {
//     const wrapper = setup(store);
//     const componentApp = findByTestAttr(wrapper, "App");
//     const preloader = findByTestAttr(wrapper, "preloader");
//     expect(componentApp.length).toBe(1);
//     // expect(preloader.length).toBe(1);
// });

describe("Promises", () => {
    it("should return the user personal data", () => {
        return getCurrentTasks(()=>{})
            .then(userInfo => {
                expect(typeof userInfo).toBe('object');
            });
    });
});





