import React, { PropsWithChildren } from 'react'
import { Badge } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';


export const Layout = ({children}:PropsWithChildren) => {
    return (
    
          <div style={{padding:'20px'}}>
            <div className='head'>
                <input type='text' placeholder="search spell" />
                 <Badge badgeContent={4} color="primary">
                    <GradeIcon color="action" />
                </Badge>
            </div>
            <div className="layout-body">

            {children}
            </div>
          </div>
           
       
    )
}
