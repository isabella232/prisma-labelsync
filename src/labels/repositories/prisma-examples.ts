import { repository } from 'label-sync'

import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'

const areas: string[] = []

export const prismaExamples = repository({
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
})
