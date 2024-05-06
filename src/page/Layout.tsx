import React, { PropsWithChildren } from 'react'
import Header from '../components/header'




export const Layout = ({children}:PropsWithChildren) => {
    return (
    
          
            <div className="layout-body">

            {children}
            </div>
       
    )
}
