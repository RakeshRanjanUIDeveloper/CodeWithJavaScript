import React from 'react'
const Prices = () => {
    const pricesData = [
        {
            value : '$0-$100'
        },
         {
            value : '$100-$200'
        },
         {
            value : '$200-$300'
        },
         {
            value : '$300-$500'
        },
         {
            value : '$500-$1000'
        }
    ]
  return (
    <React.Fragment>
        <div className='prices-lists'>
            {
                pricesData.map((p) => (
                    <div className='price-list'>
                        {p.value}
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Prices