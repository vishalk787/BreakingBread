

function Card ({name, price, src, addtoCart, oldCart}) {
    // let total = oldCart.total
    function addItem() {
        const newCart = {...oldCart, [name]: ++oldCart[name], 'Total': oldCart.Total+ +price }
        addtoCart(newCart)
    }
    function removeItem(){
        const newCart = {...oldCart, [name]: --oldCart[name] , 'Total': oldCart.Total- +price}
        addtoCart(newCart)
    }

    return(
        <div className="card bgcw flex">
            <div>
                 <img className="img" src={src} alt={name}/>
            </div>
            <div>
                <h2> {name} </h2>
                <h3> Rs. {price} </h3>

                {oldCart[name] ? 
                    <div>
                        <button onClick={removeItem} className='btn btnHeight math' > <h3>-</h3> </button>
                            {oldCart[name]} 
                         <button className='btn btnHeight math' onClick={addItem} > <h3>+</h3> </button>
                    </div>
                    :
                    <button onClick={addItem} className='btn btnHeight ' > <h3>Add to Cart</h3> </button>
                }
            </div>
        </div>
    )
}

export default Card