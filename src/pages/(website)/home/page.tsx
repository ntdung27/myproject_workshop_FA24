import React from 'react'
import NewProduct from '../../../components/NewProduct'
import Gallery from '../../../components/Gallery'
import New from '../../../components/New'
import Service from '../../../components/Service'

const HomePage = () => {
    return (
        <div>
            <img src="https://picsum.photos/id/1/1440/600" alt="" className="w-full" />
            <NewProduct />
            <Gallery />
            <New />
            <Service />
        </div>
    )
}

export default HomePage