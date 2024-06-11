import { handleConditions } from '../handleAnchors'
import { type SearchObject } from '../types'

describe('handleConditions', () => {
  it('handleConditions', () => {
    const content = 'Content Before --- {{IF SOURCE.TEXT}} some content in the condition {{SOURCE.TEXT}} - {{SOURCE.URL}} - {{SOURCE.TITLE}} {{END_IF SOURCE.TEXT}} --- Some content after --- {{IF TITLE}} some content in the condition the should show up {{SOURCE.URL}} {{END_IF TITLE}} ---  {{IF SOURCE.URL}} some content in the condition link to the url {{SOURCE.URL}} {{END_IF SOURCE.URL}}'
    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('Content Before --- some content in the condition some text - https://moonjot.com - --- Some content after ---  ---  some content in the condition link to the url https://moonjot.com')
  })

  it('handleConditions recursive with good value', () => {
    const content = `
{{IF SOURCE.TEXT}}
content
{{IF SOURCE.URL}}
URL: {{SOURCE.URL}}
{{END_IF SOURCE.URL}}
{{END_IF SOURCE.TEXT}}`

    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('\ncontent\nURL: https://moonjot.com')
  })

  it('handleConditions recursive with wrong value', () => {
    const content = `
{{IF SOURCE.TEXT}}
content
{{IF SOURCE.BOOM}}
URL: {{SOURCE.URL}}
{{END_IF SOURCE.BOOM}}
{{END_IF SOURCE.TEXT}}`

    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('content')
  })

  it('handleConditions with undefined', () => {
    const content = '{{IF SOURCE.RANDOM === undefined}}content{{END_IF SOURCE.TEXT}}'
    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('content')
  })

  it('handleConditions with equality', () => {
    const content = '{{IF SOURCE.TEXT === some text}}content{{END_IF SOURCE.TEXT}}'
    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('content')
  })

  it('handleConditions with difference', () => {
    const content = '{{IF SOURCE.TEXT !== some text}}content{{END_IF SOURCE.TEXT}}{{IF SOURCE.TEXT !== some text hey }}content different{{END_IF SOURCE.TEXT}}'
    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('content different')
  })
  it('handleConditions with includes', () => {
    const content = '{{IF SOURCE.TEXT.includes(some t)}}content{{END_IF SOURCE.TEXT}}{{IF SOURCE.TEXT.includes(some text hey) }}content different{{END_IF SOURCE.TEXT}}'
    const result = handleConditions({ content, searchObj: { source: { text: 'some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('content')
  })
  it('handleConditions with startsWith', () => {
    const content = '{{IF SOURCE.TEXT.startsWith(- [ ])}}content{{END_IF SOURCE.TEXT}}{{IF SOURCE.TEXT.includes(some text hey) }}content different{{END_IF SOURCE.TEXT}}'
    const result = handleConditions({ content, searchObj: { source: { text: '- [ ] some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('content')
  })
  it('handleConditions with startsWith negated', () => {
    const content = '{{IF SOURCE.TEXT.startsWith(- [ ])}}content{{END_IF SOURCE.TEXT}}{{IF SOURCE.TEXT.includes(some text hey) }}content different{{END_IF SOURCE.TEXT}}'
    const result = handleConditions({ content, searchObj: { source: { text: '- [x] some text', url: 'https://moonjot.com' } } as SearchObject })
    expect(result).toEqual('')
  })
  it('handleConditions with content empty', () => {
    const content = '{{IF content === }}{{IF people.0.twitter.0}}<a href="{{people.0.twitter.0}}">{{people.0.name}}</a>{{END_IF people.0.name}}{{END_IF content}}'
    const result = handleConditions({ content, searchObj: { content: '', people: [{ twitter: ['url'], name: 'name' }] } as SearchObject })
    expect(result).toEqual('<a href=\"url\">name</a>')
  })
  it('handleConditions that loop', () => {
    const content = `
{{content}}

{{IF source.url}}

# {{IF source.title}}{{source.title}}{{END_IF source.title}}

{{IF source.url}}{{source.url}}{{END_IF source.url}}

{{IF source.image}}![]({{source.image}}){{END_IF source.image}}

{{IF source.description}}{{source.description}}{{END_IF source.description}}

{{IF source.type === Tweet }}{{source.text}}{{END_IF source.type}}

{{END_IF source.url}}`

    const result = handleConditions({
      content,
      searchObj: {
        content: '',
        people: [
          {
            name: 'John Doe',
            picture: 'https://example.com/john-doe.jpg',
            job: 'Software Engineer',
            email: 'john.doe@example.com',
            about: 'An experienced software engineer specializing in front-end development.',
            linkedin: ['https://linkedin.com/in/johndoe'],
            twitter: ['https://twitter.com/johndoe'],
            tiktok: [],
            instagram: [],
            substack: [],
            github: ['https://github.com/johndoe'],
            mastodon: [],
            youtube: [],
            website: ['https://johndoe.dev'],
            names: ['JD', 'John'],
            anchor: 'john_doe_anchor'
          }
        ],
        // keywords: {
        //   subject: ["TypeScript", "JavaScript", "Front-End Development"],
        //   collections: ["Tech Articles", "Programming Guides"],
        //   organizations: ["OpenAI", "Google"],
        //   places: ["San Francisco", "New York"],
        //   people: ["Elon Musk", "Ada Lovelace"],
        //   hashTags: ["#coding", "#tech"],
        //   emails: ["contact@example.com"],
        //   atMentions: ["@techguru"],
        //   urls: ["https://example.com", "https://techblog.com"],
        //   phoneNumbers: ["+1234567890"],
        //   acronyms: ["API", "JSON"],
        //   quotations: ["To be or not to be.", "Hello, World!"]
        // },
        source: {
          title: 'Understanding TypeScript',
          url: 'https://example.com/understanding-typescript',
          canonical: 'https://example.com/understanding-typescript',
          image: 'https://example.com/ts-image.jpg',
          description: 'A comprehensive guide to understanding TypeScript.',
          content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...',
          published: '2024-06-11',
          timestamp: [
            {
              timestamp: '2024-06-10T10:00:00Z',
              url: 'https://example.com/initial-release'
            }
          ],
          appName: 'TechBlog',
          type: 'Article',
          dmContent: [
            {
              content: 'Check out this article on TypeScript!',
              published: '2024-06-10T10:00:00Z'
            }
          ],
          ttr: 5,
          text: 'Understanding TypeScript: A comprehensive guide.',
          icon: 'https://example.com/ts-icon.png',
          price: 'Free',
          rating: '5 stars',
          recipeIngredient: [],
          recipeInstructions: [],
          startDate: '2024-06-01',
          endDate: '2024-06-30',
          location: 'Online'
        },
        // other: {
        //   duration: 30,
        //   creationDate: "2024-06-01",
        //   aiTitle: "Learn TypeScript Easily"
        // },
        // isFinished: true,
        // error: 'This is an error message.',
        // loader: false,
        // clipContent: true,
        pluginPlayground: {
          examplePlugin: {
            item1: {
              value: ['exampleValue1'],
              render: [
                {
                  background: '#ffffff',
                  color: '#000000',
                  title: 'Example Title 1'
                }
              ]
            },
            item2: {
              value: ['exampleValue2'],
              render: [
                {
                  background: '#eeeeee',
                  color: '#111111',
                  title: 'Example Title 2'
                }
              ]
            }
          }
        }
      } as SearchObject
    })
    console.log(result)
    expect(result).toEqual(`# Understanding TypeScript

https://example.com/understanding-typescript

![](https://example.com/ts-image.jpg)

A comprehensive guide to understanding TypeScript.`)
  })
})
