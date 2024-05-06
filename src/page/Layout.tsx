import { PropsWithChildren } from 'react';
import Header from '../components/header';


export const Layout = ({children}:PropsWithChildren) => {
    return (
    
          <div style={{padding:'20px'}}>
                <Header />
                <div className="layout-body">

               {children}
            </div>
          </div>
           
       
    )
}
