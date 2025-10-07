import {rest} from 'msw';

import React from 'react'

const Handler = () => {
    rest.get('https://jsonplaceholder.typicode.com/users', (res,req,ctx)=>{
          return res(
                ctx.status(200),
                ctx.json([
                    {name:'rakesh'}
                ])
          )})

}

export default Handler