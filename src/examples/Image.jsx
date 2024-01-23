import React, { useEffect, useRef } from 'react'

const Image = () => {

    const imageRef = useRef(null)

    useEffect(() => {

        imageRef.current.src = "https://picsum.photos/id/100/900/900"
        imageRef.current.classList.add('img-fluid', 'rounded-circle')

    }, [])

    return (
        <div className='w-50 mx-auto'>
            <img ref={imageRef} />
        </div>
    )
}

export default Image