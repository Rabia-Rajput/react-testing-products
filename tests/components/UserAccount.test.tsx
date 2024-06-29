import { render, screen } from '@testing-library/react';

import { User } from '../../src/entities';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
    it('should render user name', () => {
        const user: User =  {id: 1, name:'Rabia'};
        render( <UserAccount user={user}/> );
     expect(screen.getByText(user.name)).toBeInTheDocument();
          
          
      })

      it('should not render edit button when user is not an admin ', () => {
        const user = screen.queryByRole('button');
        expect(user).not.toBeInTheDocument();
            
      })
      it('should render edit button when user is  an admin ', () => {
       
          const user: User =  {id: 1, name:'Rabia', isAdmin:true};
          render( <UserAccount user={user}/> );
          const button = screen.getByRole('button');
          expect (button).toBeInTheDocument();
          expect(button).toHaveTextContent(/edit/i);
            
        })
    
})
