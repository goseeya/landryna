import { render, screen } from '@testing-library/react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/LandRyna/i);
  expect(linkElement).toBeInTheDocument();
});
