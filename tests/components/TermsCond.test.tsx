import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import { useThemeContext } from '@radix-ui/themes';
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
    it('should render with correct text and intial state', () => {
        render(<TermsAndConditions/>)
     const heading=   screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms')

        const checkBox=screen.getByRole('checkbox');
        expect(checkBox).toBeInTheDocument();
        expect(checkBox).not.toBeChecked();

        const button=screen.getByRole('button');
        expect(button).toBeInTheDocument();
        // expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();
    })
    it(' should enable the button when the checkbox is checked',async () => {
        render(<TermsAndConditions/>)

        const checkBox=screen.getByRole('checkbox');
       const user= userEvent.setup();
      await user.click(checkBox);
      
      expect(screen.getByRole('button')).toBeEnabled();
    })
})
