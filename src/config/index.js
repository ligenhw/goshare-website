import { config as dev} from './config.dev'
import { config } from './config'

let conf = dev

if (process.env.NODE_ENV === 'production') {
    conf = config
}

console.log(conf)

export default conf