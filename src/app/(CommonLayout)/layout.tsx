import { Navbar1 } from '@/components/layout/navbar1'
import React, { ReactNode } from 'react'

export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar1></Navbar1>
            {children}
        </div>
    )
}
