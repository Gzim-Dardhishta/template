import { FC, ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactPage, HomePage, ProductPage } from './Pages'

const App:FC = ():ReactNode => {

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/product' element={<ProductPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default App