import { type Context } from '@moonjot/moon'

export type LOG = ((log: string) => void) | undefined

export type SearchObject = Context & {
  title?: string
  task?: string
  content?: string
}
