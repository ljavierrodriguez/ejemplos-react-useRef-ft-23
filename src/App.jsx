import React from 'react'
import Counter from './examples/Counter'
import SearchForm from './examples/SearchForm'
import Image from './examples/Image'
import ContactForm from './examples/ContactForm'

const App = () => {
    return (
        <div>
            <h3>Ejemplos</h3>
            <hr className='border-1' />
            <Counter />
            <hr className='border-1' />
            <SearchForm />
            <hr className='border-1' />
            <Image />
            <hr className='border-1' />
            <ContactForm />
        </div>
    )
}

export default App