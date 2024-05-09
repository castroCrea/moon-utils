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
    const result = mergeMarkdownFiles({ originalContent: '---description: odl description---\nsome old content', newContent: '---description: new description---\nsome new content' })
    expect(result).toEqual('---\ndescription: new description\n---\nsome old content\nsome new content')
  })
  it('mergeMarkdownFiles 3', () => {
    const result = mergeMarkdownFiles({ originalContent: '---description: odl description---\nsome old content', newContent: '---url: new url---\nsome new content' })
    // console.log(JSON.stringify(result))
    expect(result).toEqual('---\ndescription: odl description\nurl: new url\n---\nsome old content\nsome new content')
  })
})
