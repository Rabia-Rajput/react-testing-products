import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event';
describe('ExpandableText', () => {
    
    const limit=255;
    const longText='a'.repeat(limit+1);
    const truncatedText=longText.substring(0,limit) +'...';

    it('should render the full text if less than 255 characters', () => {
        const shortText='this is short text'
        render(<ExpandableText text={shortText} />)
     expect( screen.getByText(shortText)).toBeInTheDocument();
     
    })
    it('should truncate text if longer than 255 characters', () => {
        

        render(<ExpandableText text={longText} />)

     expect( screen.getByText(truncatedText)).toBeInTheDocument();

     const button=screen.getByRole('button');
    //  expect(button).toBeInTheDocument();
     expect(button).toHaveTextContent(/more/i)
     
    })
    it('should expand text when show more button is clicked', async() => {
        

        render(<ExpandableText text={longText} />)

     const button=screen.getByRole('button');
    //  expect(button).toBeInTheDocument();
    userEvent.setup();
   await userEvent.click(button);
   expect(screen.getByText(longText)).toBeInTheDocument()
;     expect(button).toHaveTextContent(/less/i)
     
    })
    it('should collapsed text when show less button is clicked', async() => {
        

        render(<ExpandableText text={longText} />)
     const showMorebutton=screen.getByRole('button',{name:/more/i});
    //  expect(button).toBeInTheDocument();
    userEvent.setup();
   await userEvent.click(showMorebutton);;

   const showLessbutton=screen.getByRole('button',{name:/less/i});
   await userEvent.click(showLessbutton);
   expect(screen.getByText(truncatedText)).toBeInTheDocument()
;     expect(showMorebutton).toHaveTextContent(/more/i)
     
    })

})