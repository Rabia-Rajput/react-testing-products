import { render, screen } from '@testing-library/react' 
import Greet from '../../src/components/Greet';


describe('Greet', () => {
    it(' sholud render hello with the name when name is provided', () => {
        render(<Greet name="Rabia"/>);
       const heading= screen.getByRole('heading');
       expect(heading).toBeInTheDocument();
       expect(heading).toHaveTextContent(/Rabia/i)
    })
    it(' sholud render render login button when name is not provided', () => { //add ? at name in greet.tsxfile
        render(<Greet />);
       const button= screen.getByRole('button');
       expect(button).toBeInTheDocument();
       expect(button).toHaveTextContent(/login/i)
    })
})