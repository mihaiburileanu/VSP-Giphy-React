import { render } from '@testing-library/react';
import Giphy from './Giphy';
 
test('Giphy images render correctly', () => {
    const {queryByTestId} = render(<Giphy />);
    expect(queryByTestId("giphy-test")).toBeTruthy();
});