const direction = [
    'StepBackward',
    'StepForward',
    'FastBackward',
    'FastForward',
    'Shrink',
    'ArrowsAlt',
    'Down',
    'Up',
    'Left',
    'Right',
    'CaretUp',
    'CaretDown',
    'CaretLeft',
    'CaretRight',
    'UpCircle',
    'DownCircle',
    'LeftCircle',
    'RightCircle',
    'DoubleRight',
    'DoubleLeft',
    'VerticalLeft',
    'VerticalRight',
    'VerticalAlignTop',
    'VerticalAlignMiddle',
    'VerticalAlignBottom',
    'Forward',
    'Backward',
    'Rollback',
    'Enter',
    'Retweet',
    'Swap',
    'SwapLeft',
    'SwapRight',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'PlayCircle',
    'UpSquare',
    'DownSquare',
    'LeftSquare',
    'RightSquare',
    'Login',
    'Logout',
    'MenuFold',
    'MenuUnfold',
    'BorderBottom',
    'BorderHorizontal',
    'BorderInner',
    'BorderOuter',
    'BorderLeft',
    'BorderRight',
    'BorderTop',
    'BorderVerticle',
    'PicCenter',
    'PicLeft',
    'PicRight',
    'RadiusBottomleft',
    'RadiusBottomright',
    'RadiusUpleft',
    'RadiusUpright',
    'Fullscreen',
    'FullscreenExit',
    'EnvironmentOutlined',
];

const suggestion = [
    'Question',
    'QuestionCircle',
    'Plus',
    'PlusCircle',
    'Pause',
    'PauseCircle',
    'Minus',
    'MinusCircle',
    'PlusSquare',
    'MinusSquare',
    'Info',
    'InfoCircle',
    'Exclamation',
    'ExclamationCircle',
    'Close',
    'CloseCircle',
    'CloseSquare',
    'Check',
    'CheckCircle',
    'CheckSquare',
    'ClockCircle',
    'Warning',
    'IssuesClose',
    'Stop',
];

const editor = [
    'Edit',
    'Form',
    'Copy',
    'Scissor',
    'Delete',
    'Snippets',
    'Diff',
    'Highlight',
    'AlignCenter',
    'AlignLeft',
    'AlignRight',
    'BgColors',
    'Bold',
    'Italic',
    'Underline',
    'Strikethrough',
    'Redo',
    'Undo',
    'ZoomIn',
    'ZoomOut',
    'FontColors',
    'FontSize',
    'LineHeight',
    'Dash',
    'SmallDash',
    'SortAscending',
    'SortDescending',
    'Drag',
    'OrderedList',
    'UnorderedList',
    'RadiusSetting',
    'ColumnWidth',
    'ColumnHeight',
];

const data = [
    'AreaChart',
    'PieChart',
    'BarChart',
    'DotChart',
    'LineChart',
    'RadarChart',
    'HeatMap',
    'Fall',
    'Rise',
    'Stock',
    'BoxPlot',
    'Fund',
    'Sliders',
];

// const logo = [
//     'Android',
//     'Apple',
//     'Windows',
//     'Ie',
//     'Chrome',
//     'Github',
//     'Aliwangwang',
//     'Dingding',
//     'WeiboSquare',
//     'WeiboCircle',
//     'TaobaoCircle',
//     'Html5',
//     'Weibo',
//     'Twitter',
//     'Wechat',
//     'Youtube',
//     'AlipayCircle',
//     'Taobao',
//     'Skype',
//     'Qq',
//     'MediumWorkmark',
//     'Gitlab',
//     'Medium',
//     'Linkedin',
//     'GooglePlus',
//     'Dropbox',
//     'Facebook',
//     'Codepen',
//     'CodeSandbox',
//     'CodeSandboxCircle',
//     'Amazon',
//     'Google',
//     'CodepenCircle',
//     'Alipay',
//     'AntDesign',
//     'AntCloud',
//     'Aliyun',
//     'Zhihu',
//     'Slack',
//     'SlackSquare',
//     'Behance',
//     'BehanceSquare',
//     'Dribbble',
//     'DribbbleSquare',
//     'Instagram',
//     'Yuque',
//     'Alibaba',
//     'Yahoo',
//     'Reddit',
//     'Sketch',
// ];

// 不显示，需要过滤
// const filter = [
//     'AlipaySquare',
//     'AmazonCircle',
//     'AmazonSquare',
//     'BehanceCircle',
//     'CodeSandboxSquare',
//     'CodeSandboxSquare',
//     'CodepenSquare',
//     'DingtalkCircle',
//     'DingtalkSquare',
//     'DribbbleCircle',
//     'DropboxCircle',
//     'DropboxSquare',
//     'Golden',
//     'GoogleCircle',
//     'GoogleSquare',
//     'GooglePlusCircle',
//     'GooglePlusSquare',
//     'GooglePlusSquare',
//     'IeCircle',
//     'IeSquare',
//     'MediumCircle',
//     'MediumSquare',
//     'QqCircle',
//     'QqSquare',
//     'RedditCircle',
//     'RedditSquare',
//     'Signal',
//     'SketchCircle',
//     'SketchSquare',
//     'SlackCircle',
//     'TaobaoSquare',
//     'TwitterCircle',
//     'TwitterSquare',
//     'ZhihuCircle',
//     'ZhihuSquare',
//     'createFromIconfontCN',
//     'default',
//     'getTwoToneColor',
//     'setTwoToneColor',
// ];

const datum = [...direction, ...suggestion, ...editor, ...data];

const iconKeys = datum.map((item) => item + 'Outlined');

export default iconKeys;
