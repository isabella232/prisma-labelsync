import { repository } from 'label-sync'

import { common } from '../common/prisma1'
import { reduceAreas } from '../../utils'

const areas = [
  'area/details-section',
  'area/engine',
  'area/limbo-state',
  'area/query-editor-section',
  'area/query-sidebar',
  'area/results-section',
  'area/ui-ux',
]

export const prismaAdminFeedback = repository({
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
})
