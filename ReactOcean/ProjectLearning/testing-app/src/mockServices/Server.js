import {setupServer} from 'msw/node'
import Handler from './Handler'


export const server = setupServer(...Handler)