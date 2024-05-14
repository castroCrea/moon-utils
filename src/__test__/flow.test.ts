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
  it('Flow with tweet', () => {
    const content = `
{{content}}

{{IF source.url}}
# {{IF source.title}}{{source.title}}{{END_IF source.title}}
{{IF source.url}}{{source.url}}{{END_IF source.url}}
{{IF source.description}}{{source.description}}{{END_IF source.description}}
{{IF source.TYPE === Tweet }}{{source.text}}{{END_IF source.type}}
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
        url: 'https://twitter.com/TobiasWhetton/status/1790312501428515326',
        title: 'Woke up to this, @acnebs is fa...',
        appName: 'Arc',
        content: '<div>Woke up to this, @acnebs is fast on the draw 💨 <img src="https://pbs.twimg.com/media/GNh3gmAWIAAI_ip.jpg" /></div>',
        icon: 'https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png',
        type: 'Tweet',
        specificResult: {
          keywords: {},
          people: [
            {
              name: 'Τobias Whetton',
              picture: 'https://pbs.twimg.com/profile_images/1702711200939716608/dVH69X0u_400x400.jpg',
              twitter: [
                'https://twitter.com/TobiasWhetton'
              ]
            }
          ],
          source: {
            content: '<div dir="auto" lang="en" class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-1inkyih r-16dba41 r-bnwqim r-135wba7" id="id__cfc69ewo1ma" data-testid="tweetText" style="text-overflow: unset; color: rgb(231, 233, 234);"><span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style="text-overflow: unset;">Woke up to this, </span><div class="css-175oi2r r-xoduu5"><span class="r-18u37iz"><a dir="ltr" href="/acnebs" role="link" class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21" style="text-overflow: unset; color: rgb(29, 155, 240);">@acnebs</a></span></div><span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style="text-overflow: unset;"> is fast on the draw </span><img alt="💨" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f4a8.svg" class="r-4qtqp9 r-dflpy8 r-k4bwe5 r-1kpi4qh r-pp5qcn r-h9hxbl"></div><img alt="Image" draggable="true" src="https://pbs.twimg.com/media/GNh3gmAWIAAI_ip?format=jpg&amp;name=medium" class="css-9pa8cd">',
            icon: 'https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png',
            title: 'Woke up to this, @acnebs is fa...',
            type: 'Tweet',
            url: 'https://twitter.com/TobiasWhetton/status/1790312501428515326'
          }
        },
        text: 'Woke up to this, @acnebs is fast on the draw 💨\n[https://pbs.twimg.com/media/GNh3gmAWIAAI_ip.jpg]'
      },
      people: [
        {
          name: 'Τobias Whetton',
          picture: 'https://pbs.twimg.com/profile_images/1702711200939716608/dVH69X0u_400x400.jpg',
          twitter: [
            'https://twitter.com/TobiasWhetton'
          ]
        }
      ],
      keywords: {
        organizations: [],
        places: [],
        people: [],
        collections: [],
        hashTags: [],
        subject: [],
        emails: [],
        atMentions: [],
        urls: [],
        phoneNumbers: [],
        acronyms: [],
        quotations: []
      },
      clipContent: true
    }

    const handleDateContent = turnDate({ content })

    const searchObj = {
      content: '',
      ...context
    }

    const handlePropertiesContent = handleReplacingProperties({ content: handleDateContent, searchObj }) ?? ''

    const result = handleConditions({ content: handlePropertiesContent, searchObj })?.trim() ?? ''

    expect(result).toEqual(
`# Woke up to this, @acnebs is fa...
https://twitter.com/TobiasWhetton/status/1790312501428515326
Woke up to this, @acnebs is fast on the draw 💨
[https://pbs.twimg.com/media/GNh3gmAWIAAI_ip.jpg]

# Τobias Whetton
twitter : [https://twitter.com/TobiasWhetton](https://twitter.com/TobiasWhetton)`
    )
  })
})
