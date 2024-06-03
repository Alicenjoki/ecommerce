// import React from 'react'
import Navbar from './Navbar'
import Offers from './Offers'
import Products from './Products'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <>
        <Navbar />,
        {/* <Sidebar /> */}

        <div className="container-fluid" style={ {marginTop: '40px', justifyContent: 'center', alignItems:'center', textAlign:'center'} }>
          <Products />
          <Offers />
            {/* <div className="row" style={ { justifyContent: 'space-evenly' } }>
                <div className="col-md-12 p-5 mb-3" >
                    
                </div>
            </div> */}
        </div>
    </>

  )
}

export default Home