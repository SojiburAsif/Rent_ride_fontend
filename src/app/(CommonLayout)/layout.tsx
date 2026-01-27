import FooterPage from '@/components/layout/Fooder'
import { Navbar } from '@/components/layout/Navbar'
import React, { ReactNode } from 'react'

export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <FooterPage></FooterPage>
        </div>
    )
}
