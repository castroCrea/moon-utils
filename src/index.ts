import { type Context, MoonPlugin, type MoonPluginConstructorProps, type MoonPluginSettings, type PluginSettingsDescription } from '@moonjot/moon'

interface SamplePluginSettingsDescription extends PluginSettingsDescription {
  token: {
    type: 'string'
    required: boolean
    label: string
    description: string
  }
  databaseId: {
    type: 'string'
    required: boolean
    label: string
    description: string
  }
}

interface SamplePluginSettings extends MoonPluginSettings {
  token: string
  databaseId: string
}

export default class extends MoonPlugin {
  name: string = 'Sample'
  logo: string = 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'

  settingsDescription: SamplePluginSettingsDescription = {
    token: {
      type: 'string',
      required: true,
      label: 'Token',
      description: 'The Sample plugin token.'
    },
    databaseId: {
      type: 'string',
      required: true,
      label: 'Database ID',
      description: 'The Sample database id plugin token.'
    }
  }

  settings: SamplePluginSettings = {
    token: '',
    databaseId: ''
  }

  constructor (props?: MoonPluginConstructorProps<SamplePluginSettings>) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(props)
    if (!props) return
    if (props.settings) this.settings = props.settings

    this.settingsButtons = [
      {
        type: 'button',
        callback: () => {
          window.open('https://moonjot.com', '_blank')
        },
        label: 'Button that trigger a callback',
        description: 'Button that trigger a callback.'

      }
    ]
  }

  integration = {
    callback: async ({ context, html }: {
      html: string
      markdown: string
      context: Context
    }
    ) => {
      console.log('MoonPlugin integration')
      return false
    },
    buttonIconUrl: 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'
  }

  context = async ({ context }: { context: Context }) => {
    console.log('MoonPlugin integration')
    return context
  }
}
