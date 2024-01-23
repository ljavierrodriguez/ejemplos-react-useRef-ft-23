import React, { useEffect, useRef } from 'react'

const SearchForm = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = "Hola Mundo"
    }, [])

    return (
        <div className='w-50 mx-auto p-2'>
            <input type="search" className="form-control" placeholder='Search...' ref={inputRef} />
        </div>
    )
}

export default SearchForm