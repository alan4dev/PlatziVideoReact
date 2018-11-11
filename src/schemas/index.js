import {normalize, schema} from 'normalizr'

import api from '../api.json'

const media = new schema.Entity('song', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({
    ...value, category: parent.id
  })
})

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = {
  categories: new schema.Array(category)
}

const normalizedData = normalize(api, categories)

export default normalizedData
