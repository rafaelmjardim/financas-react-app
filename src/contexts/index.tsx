import * as React from 'react'
import AuthProvider from './AuthContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <>
            <AuthProvider>
                {children}
            </AuthProvider>
        </>
    )
}

export default GlobalProvider