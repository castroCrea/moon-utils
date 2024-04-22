import { type Context, MoonPlugin, type MoonPluginConstructorProps, type MoonPluginSettings, type PluginSettingsDescription } from '@moonjot/moon';
interface SamplePluginSettingsDescription extends PluginSettingsDescription {
    token: {
        type: 'string';
        required: boolean;
        label: string;
        description: string;
    };
    databaseId: {
        type: 'string';
        required: boolean;
        label: string;
        description: string;
    };
}
interface SamplePluginSettings extends MoonPluginSettings {
    token: string;
    databaseId: string;
}
export default class extends MoonPlugin {
    name: string;
    logo: string;
    settingsDescription: SamplePluginSettingsDescription;
    settings: SamplePluginSettings;
    constructor(props?: MoonPluginConstructorProps<SamplePluginSettings>);
    integration: {
        callback: ({ context, html }: {
            html: string;
            markdown: string;
            context: Context;
        }) => Promise<boolean>;
        buttonIconUrl: string;
    };
    context: ({ context }: {
        context: Context;
    }) => Promise<Context>;
}
export {};
