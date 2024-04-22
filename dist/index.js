"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moon_1 = require("@moonjot/moon");
class default_1 extends moon_1.MoonPlugin {
    constructor(props) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        super(props);
        this.name = 'Sample';
        this.logo = 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg';
        this.settingsDescription = {
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
        };
        this.settings = {
            token: '',
            databaseId: ''
        };
        this.integration = {
            callback: ({ context, html }) => __awaiter(this, void 0, void 0, function* () {
                console.log('MoonPlugin integration');
                return false;
            }),
            buttonIconUrl: 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'
        };
        this.context = ({ context }) => __awaiter(this, void 0, void 0, function* () {
            console.log('MoonPlugin integration');
            return context;
        });
        if (!props)
            return;
        if (props.settings)
            this.settings = props.settings;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map