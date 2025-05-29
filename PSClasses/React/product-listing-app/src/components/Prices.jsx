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
                pricesData.map((p, index) => (
                    <div className='price-list' key={index}>
                        {p.value}
                    </div>
                ))
            }
        </div>
        <div className='price-boxes'>
            <div className='price-min-box'>
                <input type='text' placeholder='$min' />
            </div>
            <div className='price-max-box'>
                <input type='text' placeholder='$max' />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Prices