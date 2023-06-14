export default {
    pages: {
        //物联网
        iot: {
            //首页
            home: {
                common: {
                    device: '创建产品'
                },
                iotGuidance: {
                    title: '物联网引导',
                    step2: '创建设备',
                    step3: '规矩引擎',
                },
                op: {
                    title: '运维引导',
                    step1: '设备接入配置',
                    step2: '日志排查',
                    step3: '实时监控'
                },
                device: {
                    title: '设备统计',
                    product: '产品数量',
                    amount: '设备数量'
                },
                basics: {
                    title: '基础统计',
                    cpu: 'CPU使用率',
                    jvm: 'JVM内存'
                },
                deviceTips: {
                    title: '设备接入推荐步骤',
                    tooltip: '不同的设备因为通信协议的不同，存在接入步骤的差异',
                    step2: '配置产品接入方式',
                    step3: '添加测试设备',
                    step4: '功能调试',
                    step5: '批量添加设备',
                    step1Content: '产品是设备的集合，通常指一组具有相同功能的设备。物联设备必须通过产品进行接入方式配置。',
                    step2Content: '通过产品对同一类型的设备进行统一的接入方式配置。请参照设备铭牌说明选择匹配的接入方式。',
                    step3Content: '添加单个设备，用于验证产品模型是否配置正确。',
                    step4Content: '对添加的测试设备进行功能调试，验证能否连接到平台，设备功能是否配置正确。',
                    step5Content: '批量添加同一产品下的设备',
                },
                opTips: {
                    title: '运维管理推荐步骤',
                    tooltip: '请根据业务需要对下述步骤进行选择性操作。',
                    step1: '协议管理',
                    step2: '证书管理',
                    step3: '网络组件',
                    step4: '设备接入网关',
                    step5: '日志管理',
                    step1Content: '根据业务需求自定义开发对应的产品（设备模型）接入协议，并上传到平台。',
                    step2Content: '统一维护平台内的证书，用于数据通信加密。',
                    step3Content: '根据不同的传输类型配置平台底层网络组件相关参数。',
                    step4Content: '根据不同的传输类型，关联消息协议，配置设备接入网关相关参数。',
                    step5Content: '监控系统日志，及时处理系统异常。',
                },
                architecture: '平面架构图'
            },
            //通知管理
            notice: {
                common: {
                    Records: '通知记录',
                    dingding: '钉钉消息',
                    robot: '群机器人消息',
                    weixinPlatform: '企业微信管理后台：',
                    sendTime: '发送时间',
                    errMess: '错误信息',
                    detailMess: '详情信息'
                },
                config: {
                    disposition: '配置名称',
                    synchronization: '同步用户',
                    addresser: '发件人',
                    addresserContent: '用于发送邮件时“发件人“信息的显示',
                    userNameDes: '用该账号进行发送邮件。',
                    pwdDes: '用于账号身份认证，认证通过后可通过该账号进行发送邮件。',
                    addresserTip: '请输入发件人',
                    corpSecretTip: '请输入corpSecret',
                    serverAddress: '服务器地址',
                    serverTip: '请输入服务器地址',
                    serAddContent1: ' 下拉可选择国内常用的邮箱服务配置，也支持手动输入其他地址。',
                    serAddContent2: ' 系统使用POP协议。POP允许电子邮件客户端下载服务器上的邮件，但是您在电子邮件客户端的操作（如：移动邮件、标记已读等），这时不会反馈到服务器上。',
                    aliControls: '阿里云管理控制台：',
                    regionID: '阿里云服务地域与对应的RegionID。请根据购买的阿里云服务器地域进行选择。',
                    AccesskeyID: '用于程序通知方式调用云服务费API的用户标识和秘钥获取路径：“阿里云管理控制台”--“用户头像”--“”--“AccessKey管理”--“查看”',
                    webhook: 'webhook是一个接收HTTP请求的URL（本平台默认只支持HTTP POST请求），实现了Webhook的第三方系统可以基于该URL订阅本平台系统信息，本平台按配置把特定的事件结果推送到指定的地址，便于系统做后续处理。',
                    webhookAddr: "Webhook地址。",
                    reqHeader: '支持根据系统提供的接口设置不同的请求头。如 Accept-Language 、Content-Type',
                    dingding: '钉钉开放平台：',
                    appKeyContent1: '企业内部应用的唯一身份标识。在钉钉开发者后台创建企业内部应用后，系统会自动生成一对AppKey和AppSecret。',
                    appKeyContent2: '获取路径：“钉钉开放平台”--“应用开发”--“应用信息”',
                    AppSecret: '钉钉应用对应的调用密钥',
                    AppID: '微信服务号的唯一专属编号。',
                    getAppID: '获取路径：“微信公众平台”管理后台--“设置与开发”--“基本配置”',
                    WxAppSecret: '公众号开发者身份的密码',
                    corpId: '企业号的唯一专属编号。',
                    getCorpId: '获取路径：“企业微信”管理后台--“我的企业”--“企业ID”',
                    corpSecret: '应用的唯一secret,一个企业微信中可以有多个corpSecret',
                    getCorpSecret: ' 获取路径：“企业微信”--“应用与小程序”--“自建应用”中获取',
                    RegionIDContent1: '阿里云内部给每台机器设置的唯一编号。请根据购买的阿里云服务器地址进行填写。',
                    RegionIDContent2: '阿里云地域和可用区对照表地址：',
                    aliSecret: '用于程序通知方式调用云服务费API的用户标识和秘钥',
                    getAliSecret: '获取路径：“阿里云管理控制台”--“用户头像”--“”--“AccessKey管理”--“查看”',
                    WebHook: '在钉钉群内每创建一个钉钉群自定义机器人都会产生唯一的WebHook地址。',
                    getWebHook: ' 获取路径：“钉钉桌面客户端”--“群设置”--“智能群助手”--“机器人信息”',
                    getWHStep1: '登录钉钉桌面客户端，进入群设置',
                    getWHStep2: '点击智能群助手，查看机器人信息',
                    sectionTip: '请输入部门名称',
                    autoBind: '自动绑定',
                    bind: '绑定用户',
                    userTip: '请选择用户',
                    bindState: '绑定状态',
                    dingdingName: '钉钉用户名'
                },
                template: {
                    templateName: '模板名称',
                    noticeRecord: '通知记录',
                    bindConfig: '绑定配置',
                    configTip: '使用固定的通知配置来发送此通知模板',
                    bindTip: '请选择绑定配置',
                    AgentIdTip: '应用唯一标识',
                    getAgentId:'',
                    receiveD: '收信部门',
                    receive: '收信人',
                    receiveRest: '仅支持中国大陆号码',
                    receiveIpt: '请输入收信人',
                    receiveTip: '如果不填写该字段，将在使用此模板发送通知时进行指定',
                    aliReceiveTip:'当前仅支持国内手机号，此处若不填，则在模板调试和配置告警通知时手动填写',
                    messageType: '消息类型',
                    messageTip: '请选择消息类型',
                    title: '标题',
                    titleTip: '请输入标题',
                    img: '图片链接',
                    imgTip: '请输入图片链接',
                    content: '内容链接',
                    contentTip: '请输入内容链接',
                    labelPush: '标签推送',
                    labelTip: '本企业微信的标签ID列表,最多支持100个,如果不填写该字段,将在使用此模板发送通知时进行指定',
                    mail: '邮件标题',
                    addressee: '收件人',
                    addresseeTip1: '多个收件人用换行分隔 最大支持1000个号码',
                    addresseeTip2: '请输入收件人邮箱,多个收件人用换行分隔',
                    attachments: '附件信息',
                    attachmentsTip: '附件只输入文件名称将在发送邮件时进行文件上传',
                    typeTip: '语音验证码类型可配置变量，并且只支持数字和英文字母',
                    templateID: '模板ID',
                    templateIDTip: '阿里云内部分配的唯一ID标识',
                    aliTemplateIdTip:'阿里云语音对每一条语音通知分配的唯一ID标识',
                    templateIDIpt: '请输入模板ID',
                    called: '被叫号码',
                    alicalledTip1:'当前仅支持国内手机号，此处若不填，则在模板调试和配置告警通知时手动填写。',
                    alicalledTip2:'若您使用的语音通知文件为公共模式外呼，则该参数值不填。',
                    alicalledTip3:'若您使用的语音通知文件为专属模式外呼，则必须传入已购买的号码，仅支持一个号码。',
                    calledTip: '仅支持中国大陆号码',
                    calledIpt: '请输入被叫号码',
                    calledSignal: '被叫显号',
                    calledSignalTip: '必须是已购买的号码,用于呼叫号码显示',
                    aliCalledSignal:'用户呼叫号码显示，必须是在阿里云购买的号码。',
                    calledSignalIpt: '请输入被叫显号',
                    plays: '播放次数',
                    aliPlays:'最多可播放3次',
                    playsTip: '语音文件的播放次数',
                    palysIpt: '请输入播放次数',
                    temContent: '模板内容',
                    iptTemContent: '请输入模板内容',
                    temContentTip: '语音验证码内容输入框，用于渲染验语音证码变量。',
                    temContentIpt: '内容中的变量将用于阿里云语音验证码',
                    template: '模板',
                    templateTip: '阿里云短信平台自定义的模板名称',
                    templateIpt: '请选择模板',
                    signature: '签名',
                    signatureIpt: '请输入签名',
                    aliSignture:'用于短信内容签名信息显示，需在阿里云短信进行配置。',
                    signatureTip: '用于短信内容签名信息显示',
                    signatureSel: '请选择签名',
                    acquiesce: '默认',
                    Custom: '自定义',
                    reqHeaderIpt: '请求体中的数据来自于发送通知时指定的所有变量',
                    temTip: '发送的内容，支持录入变量',
                    temIpt: '变量格式:${name};示例:尊敬的${name},${time}有设备触发告警,请注意处理',
                    variable: '变量列表',
                    errEmail: '邮件格式错误',
                    numberTip: '请输入有效号码',
                    frequency: '仅支持1～3次',
                    invalid: '该字段不是有效的手机号',
                    notifiConfig: '通知配置',
                    notifiConfigSel: '请选择通知配置',
                    selDepartment: '请选择收信部门',
                    selTagPush:'请选择标签推送',
                    selReceive:'请选择收信人',
                    formatTip:'格式为：%.xf x代表数字保留的小数位数。当x=0时,代表格式为整数',
                    //阿里云短信
                    aliMes:'阿里云短信服务平台：',
                    summarize:'通知模板结合通知配置为告警消息通知提供支撑。通知模板只能调用同一类型的通知配置服务。',
                    aliSmsSumm:'使用阿里云短信时需先在阿里云短信服务平台创建短信模板。',
                    aliVoiceSumm:'使用阿里云语音时需先在阿里云语音服务平台创建语音模板。',
                    temDisDes:'模板配置说明',
                    variableAttri:'变量属性',
                    variableTip:'需要在当前页面手动设置与阿里云短信模板中一样的变量，否则会导致发送异常。',
                    aliVoice:'阿里云语音服务平台：',
                    aliVoiceType:'阿里云语音通知类型，当类型为验证码类型时可配置变量。',
                    aliTemplateContent:"仅当通知类型为验证码类型时可进行配置，变量标识需要阿里云模板中的标识一致，支持填写带变量的动态模板。变量填写规范示例：${'{name}'}。填写动态参数后，可对变量的名称、类型、格式进行配置，以便告警通知是填写。",
                    //钉钉
                    dingdingOpnen:'钉钉开放平台：',
                    dingdingControl:'钉钉管理后台：',
                    dingdingSumm:'使用钉钉消息通知时需在钉钉开放平台中创建好对应的应用',
                    getDdAgentid:'获取路径：“钉钉开放平台”--“应用开发”--“查看应用”',
                    receiving:'收信人、收信部门',
                    receivingTip:'若不填写收信人，则在模板调试和配置告警通知时手动填写。',
                    ddTemplateContent:"支持填写带变量的动态模板。变量填写规范示例：${'{name}'}。填写动态参数后，可对变量的名称、类型、格式进行配置，以便告警通知时填写。",
                    ddRobotSumm:'使用钉钉群机器人消息通知时需在钉钉开放平台中创建好对应的机器人，再到钉钉客户端在对应的群中绑定智能机器人。',
                    messageTypeTip:'目前支持text、markdown、link3种。',
                    ddRTemplateContent:"支持填写带变量的动态模板。变量填写规范示例：${'{b}'}。填写动态参数后，可对变量的名称、类型、格式进行配置，以便告警通知时填写。",
                    //邮件
                    emailSumm:'服务器地址支持自定义输入。',
                    emailTitle:"支持输入变量，变量格式${'{标题}'}",
                    emailAddressee:'支持录入多个邮箱地址，可填写变量参数。',
                    webhookReq:'请求体 请求体中的数据来自于发送通知时指定的所有变量,也可通过自定义的方式进行变量配置。 使用webhook通知时，系统会将该事件通过您指定的URL地址，以POST方式发送。',
                    //wx
                    getWXAgentId:'获取路径：“企业微信”管理后台--“应用管理”--“应用”--“查看应用”',
                    WXReceiving:'收信人ID、收信部门ID、标签推送',
                    WXReceiveTip:'接收通知的3种方式，3个字段若在此页面都没有填写，则在模板调试和配置告警通知时需要手动填写',
                    getWXReceiveId:'收信人ID获取路径：【通讯录】->【成员信息】查看成员账号',
                    getWXReDept:'收信组织ID获取路径：【通讯录】->【部门信息】查看部门ID',
                    //wxApp
                    AppUser:'用户标签',
                    AppUserTip:'以标签的维度通知该标签下所有用户',
                    AppMesTemp:'消息模板',
                    AppMesTempTip:'微信公众号中配置的消息模板',
                    AppTempSkip:'模板跳转链接',
                    tempSkipTip:'点击消息之后进行页面跳转',
                    skipApp:'跳转小程序Appid',
                    skipAppTip:'点击消息之后打开对应的小程序',
                    skipWay:'跳转小程序具体路径',
                    skipWayTip:'点击消息之后跳转到小程序的具体页面',
                    appTemplateContent:"支持填写带变量的动态模板。变量填写规范示例：${'{name}'}。填写动态参数后，可对变量的名称、类型、格式进行配置，以便告警通知时填写。",
                    firm:'企业消息',
                    aliyun:'阿里云语音',
                    aliyunSms:'阿里云短信',
                    voice:'语音通知'
                }
            }
        }
    }
}   