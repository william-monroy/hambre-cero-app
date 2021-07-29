// Dexie
import Dexie from 'dexie'
import {
  USER_MODEL,
} from '../../constants'

// Models
import {
  user,
} from './models'

const db = new Dexie('dmetr')

db.version(1).stores({
  [USER_MODEL]: user(),
})

export default db
