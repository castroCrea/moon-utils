import { handleConditions, handleReplacingProperties, turnDate } from '../handleAnchors'

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'))

describe('Flow with youtube', () => {
  it('Flow with youtube', () => {
    const content = `
{{content}}

{{IF source.url}}
# {{IF source.title}}{{source.title}}{{END_IF source.title}}
{{IF source.url}}{{source.url}}{{END_IF source.url}}
{{IF source.description}}{{source.description}}{{END_IF source.description}}
{{IF source.timestamp}}
## Timestamps
- [{{source.timestamp.0.timestamp}}]({{source.timestamp.0.url}})
{{END_IF source.timestamp}}
{{END_IF source.url}}

{{IF people.0.name}}
# {{IF people.0.name}}{{people.0.name}}{{END_IF people.0.name}}
{{IF people.0.job}}{{people.0.job}}{{END_IF people.0.job}}
{{IF people.0.email}}[{{people.0.email}}](mailto:{{people.0.email}}){{END_IF people.0.email}}
{{IF people.0.about}}{{people.0.about}}{{END_IF people.0.about}}
{{IF people.0.linkedin.0}}linkedin : [{{people.0.linkedin.0}}]({{people.0.linkedin.0}}){{END_IF people.0.linkedin.0}}
{{IF people.0.twitter.0}}twitter : [{{people.0.twitter.0}}]({{people.0.twitter.0}}){{END_IF people.0.twitter.0}}
{{IF people.0.tiktok.0}}tiktok : [{{people.0.tiktok.0}}]({{people.0.tiktok.0}}){{END_IF people.0.tiktok.0}}
{{IF people.0.instagram.0}}instagram : [{{people.0.instagram.0}}]({{people.0.instagram.0}}){{END_IF people.0.instagram.0}}
{{IF people.0.substack.0}}substack : [{{people.0.substack.0}}]({{people.0.substack.0}}){{END_IF people.0.substack.0}}
{{IF people.0.github.0}}github : [{{people.0.github.0}}]({{people.0.github.0}}){{END_IF people.0.github.0}}
{{IF people.0.mastodon.0}}mastodon : [{{people.0.mastodon.0}}]({{people.0.mastodon.0}}){{END_IF people.0.mastodon.0}}
{{IF people.0.youtube.0}}youtube : [{{people.0.youtube.0}}]({{people.0.youtube.0}}){{END_IF people.0.youtube.0}}
{{IF people.0.website.0}}website : [{{people.0.website.0}}]({{people.0.website.0}}){{END_IF people.0.website.0}}
{{END_IF people.0}}
`

    const context = {
      source: {
        url: 'https://www.youtube.com/watch?v=OtEfVc6U5DQ&list=PLmTKOO83vuwUZxmzkBjBwEt3hgDGsupXT&index=7&ab_channel=PaoCas',
        title: 'Obsidian - Moon Jot : Add Task',
        appName: 'Arc',
        icon: 'https://www.youtube.com/s/desktop/3725d26e/img/favicon.ico',
        image: 'https://i.ytimg.com/vi_webp/OtEfVc6U5DQ/hqdefault.webp',
        timestamp: [
          {
            timestamp: 0.790997,
            url: 'https://www.youtube.com/watch?v=OtEfVc6U5DQ&list=PLmTKOO83vuwUZxmzkBjBwEt3hgDGsupXT&index=7&ab_channel=PaoCas&t=0.790997s'
          }
        ],
        type: 'Youtube'
      },
      people: [
        {
          name: 'Pao Cas',
          picture: 'https://yt3.ggpht.com/ytc/AIdro_mxFNvj788VRxuGLmtqWjr6b5ijTgVoOgaa2L1jOOEJ-Q=s88-c-k-c0x00ffffff-no-rj',
          youtube: [
            'https://www.youtube.com/@paocto'
          ]
        }
      ],
      keywords: {
        organizations: [],
        places: [],
        people: [],
        collections: [],
        hashTags: [
          '#capture',
          '#obsidian',
          '#moonJot'
        ],
        subject: [],
        emails: [],
        atMentions: [],
        urls: [],
        phoneNumbers: [],
        acronyms: [],
        quotations: []
      },
      other: {
        duration: 40.001
      },
      clipContent: false
    }

    const handleDateContent = turnDate({ content })

    const searchObj = {
      content: '',
      ...context
    }

    const handlePropertiesContent = handleReplacingProperties({ content: handleDateContent, searchObj }) ?? ''

    const result = handleConditions({ content: handlePropertiesContent, searchObj })?.trim() ?? ''

    expect(result).toEqual(
`# Obsidian - Moon Jot : Add Task
https://www.youtube.com/watch?v=OtEfVc6U5DQ&list=PLmTKOO83vuwUZxmzkBjBwEt3hgDGsupXT&index=7&ab_channel=PaoCas
## Timestamps
- [0.790997](https://www.youtube.com/watch?v=OtEfVc6U5DQ&list=PLmTKOO83vuwUZxmzkBjBwEt3hgDGsupXT&index=7&ab_channel=PaoCas&t=0.790997s)

# Pao Cas
youtube : [https://www.youtube.com/@paocto](https://www.youtube.com/@paocto)`
    )
  })
})
