import { mergeMarkdownFiles } from '../mergeMarkdown'

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'))

describe('mergeMarkdownFiles', () => {
  it('mergeMarkdownFiles 1', () => {
    const result = mergeMarkdownFiles({ originalContent: '# hey', newContent: '# bou\ncontent' })
    expect(result).toEqual('\n# hey\n# bou\ncontent')
  })
  it('mergeMarkdownFiles 2', () => {
    const result = mergeMarkdownFiles({ originalContent: '---description: old description---\nsome old content', newContent: '---description: new description---\nsome new content' })
    expect(result).toEqual('---\ndescription: new description\n---\nsome old content\nsome new content')
  })
  it('mergeMarkdownFiles 3', () => {
    const result = mergeMarkdownFiles({ originalContent: '---description: old description---\nsome old content', newContent: '---url: new url---\nsome new content' })
    expect(result).toEqual('---\ndescription: old description\nurl: new url\n---\nsome old content\nsome new content')
  })
  it('mergeMarkdownFiles 4', () => {
    const result = mergeMarkdownFiles({ originalContent: '---description: old description---\nsome old content\n## Note\nsome old note\n## Task\n- [ ] some old task', newContent: '---url: new url---\nsome new content\n## Note\nsome new note\n## Task\n\n- [ ] some new task' })
    // console.log(JSON.stringify(result))
    expect(result).toEqual('---\ndescription: old description\nurl: new url\n---\nsome old content\n## Note\nsome old note\nsome new note\n## Task\n- [ ] some old task\n- [ ] some new task\nsome new content\n')
  })
})
