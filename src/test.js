const SetUp = { 

    // window.postMessage(
    //     {
            action: 'setup', 
            data:[
                {
                    "data": {
                        "id": 2,
                        "name": "Eduardo Chupador",
                        "phone": "426-684-7563"
                    },
                    "name": "myData"
                },
                {
                    "data": [
                        {
                            "color": "#006064",
                            "container": "contacts",
                            "unread": 0,
                            "dumpable": 0,
                            "name": "Contacts",
                            "icon": "<i class=\"fas fa-address-book\"></i>",
                            "enabled": true
                        },
                        {
                            "color": "#01579b",
                            "container": "phone",
                            "unread": 0,
                            "dumpable": 0,
                            "name": "Phone",
                            "icon": "<i class=\"fas fa-phone\"></i>",
                            "enabled": true
                        },
                        {
                            "color": "#311b92",
                            "container": "message",
                            "unread": 0,
                            "dumpable": 0,
                            "name": "Messages",
                            "icon": "<i class=\"fas fa-comment-alt\"></i>",
                            "enabled": true
                        },
                        {
                            "customExit": false,
                            "color": "#d7252a",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "bank",
                            "name": "Bank",
                            "icon": "<i class=\"fas fa-university\"></i>",
                            "enabled": true
                        },
                        {
                            "color": "#039be5",
                            "container": "twitter",
                            "unread": 0,
                            "dumpable": 0,
                            "name": "Twitter",
                            "icon": "<i class=\"fab fa-twitter\"></i>",
                            "enabled": true
                        },
                        {
                            "color": "#f9a825",
                            "container": "yp",
                            "unread": 0,
                            "dumpable": 0,
                            "name": "Yellow Pages",
                            "icon": "<i class=\"fas fa-ad\"></i>",
                            "enabled": true
                        },
                        {
                            "customExit": false,
                            "color": "#808080",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "garage",
                            "name": "Garage",
                            "icon": "<i class=\"fas fa-car\"></i>",
                            "enabled": false
                        },
                        {
                            "customExit": false,
                            "color": "#15E593",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "racing",
                            "name": "Racing",
                            "icon": "<i class=\"fas fa-flag-checkered\"></i>",
                            "enabled": false
                        },
                        {
                            "customExit": false,
                            "color": "#1be8b5",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "pdm",
                            "name": "Vehicle Repos",
                            "icon": "<i class=\"fas fa-money-check-alt\"></i>",
                            "enabled": false
                        },
                        {
                            "customExit": false,
                            "color": "#935c5c",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "asana",
                            "name": "Asana",
                            "icon": "<i class=\"fas fa-briefcase\"></i>",
                            "enabled": false
                        },
                        {
                            "customExit": false,
                            "color": "#56b000",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "website",
                            "name": "Los Santos Web",
                            "icon": "<i class=\"fas fa-globe\"></i>",
                            "enabled": false
                        },
                        {
                            "customExit": false,
                            "color": "#d7252a",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "stocks",
                            "name": "Info",
                            "icon": "<i class=\"fas fa-user-circle\"></i>",
                            "enabled": false
                        },
                        {
                            "customExit": false,
                            "color": "#FF4500",
                            "dumpable": 0,
                            "unread": 0,
                            "container": "camera",
                            "name": "Camera",
                            "icon": "<i class=\"fas fa-camera-retro\"></i>",
                            "enabled": false
                        },
                        {
                            "color": "#404040",
                            "container": "settings",
                            "unread": 0,
                            "dumpable": 0,
                            "name": "Settings",
                            "icon": "<i class=\"fas fa-cogs\"></i>",
                            "enabled": true
                        },
                        {
                            "color": "hsl(333, 100%, 50%)",
                            "container": "dumper",
                            "unread": 0,
                            "dumpable": 2,
                            "name": "Dumper",
                            "icon": "<i class=\"fas fa-download\"></i>",
                            "enabled": false
                        },
                        {
                            "color": "#7654b4",
                            "container": "irc",
                            "unread": 0,
                            "dumpable": 2,
                            "name": "Dark Chat",
                            "icon": "<i class=\"fas fa-user-secret\"></i>",
                            "enabled": true
                        },
                        {
                            "color": "#004d40",
                            "container": "tuner",
                            "unread": 0,
                            "dumpable": 2,
                            "name": "Tuner",
                            "icon": "<i class=\"fas fa-microchip\"></i>",
                            "enabled": false
                        }
                    ],
                    "name": "apps"
                }
            ]
        // }
    // )
}

var Settings = {
    volume: 0,
    wallpaper: 1,
    ringtone: 1,
    text: 1
}

var PlayerDetails = {
    id: 199,
    name: 'Please Work',
    phone: '111-111-1111'
};

var Contacts = [
    {
        name: 'Dickhole',
        number: '555-555-5556'
    },
    {
        name: 'Contact 1',
        number: '555-555-5555'
    },
    {
        name: 'ABC',
        number: '155-555-5555'
    }
];

var Messages = [
    {
        sender: '111-111-1111',
        receiver: '555-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '555-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '555-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '555-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '555-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '333-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '333-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    },
    {
        sender: '111-111-1111',
        receiver: '333-555-5555',
        message: 'Fuck You',
        sent_time: 1566263235000,
        isRead: 0,
        owner: 0
    }
];

var Calls = [
    {
        id: 1,
        sender: '111-111-1111',
        receiver: '333-555-5555',
        time: 1566163235000,
        status: 0,
        anon: 0
    },
    {
        id: 2,
        sender: '111-111-1111',
        receiver: '555-555-5555',
        time: 1566263235000,
        status: 1,
        anon: 0
    },
    {
        id: 3,
        sender: '111-111-1111',
        receiver: '555-555-5555',
        time: 1566263235000,
        status: 2,
        anon: 0
    },
    {
        id: 4,
        sender: '555-555-5555',
        receiver: '111-111-1111',
        time: 1566263235000,
        status: 0,
        anon: 0
    },
    {
        id: 5,
        sender: '555-555-5555',
        receiver: '111-111-1111',
        time: 1566263235000,
        status: 1,
        anon: 0
    },
    {
        id: 6,
        sender: '555-555-5555',
        receiver: '111-111-1111',
        time: 1566263235000,
        status: 2,
        anon: 0
    },
    {
        id: 7,
        sender: '111-111-1111',
        receiver: '555-555-5555',
        time: 1566163235000,
        status: 0,
        anon: 1
    },
    {
        id: 8,
        sender: '111-111-1111',
        receiver: '555-555-5555',
        time: 1566263235000,
        status: 1,
        anon: 1
    },
    {
        id: 9,
        sender: '111-111-1111',
        receiver: '555-555-5555',
        time: 1566263235000,
        status: 2,
        anon: 1
    },
    {
        id: 10,
        sender: '555-555-5555',
        receiver: '111-111-1111',
        time: 1566263235000,
        status: 0,
        anon: 1
    },
    {
        id: 11,
        sender: '555-555-5555',
        receiver: '111-111-1111',
        time: 1566263235000,
        status: 1,
        anon: 1
    },
    {
        id: 12,
        sender: '555-555-5555',
        receiver: '111-111-1111',
        time: 1566263235000,
        status: 2,
        anon: 1
    }
];

var Tweets = [
    {
        author: 'PleaseWork199',
        message: '@HiThere1 SUP BRO',
        time: 1562263235000
    },
    {
        author: 'PleaseWork199',
        message:
            'asdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;aasdfasdfasdfasdfa;sdjk;fakjdf;a1',
        time: 1566263235000
    },
    {
        author: 'PleaseWork199',
        message: 'Please Work 199',
        time: 1566263235000
    },
    {
        author: 'PleaseWork199',
        message: 'Please Work 199',
        time: 1566263235000
    },
    {
        author: 'PleaseWork199',
        message: 'Please Work 199',
        time: 1566263235000
    },
    {
        author: 'PleaseWork199',
        message: 'Please Work 199',
        time: 1566263235000
    }
];

var Adverts = [
    {
        author: 'sdf Work',
        phone: '111-111-1111',
        date: 1516263235000,
        title: 'Advert Title',
        message: 'This Is An Advert Lol',

    },
    {
        author: 'Test Work',
        phone: '555-555-5555',
        date: 1566263235000,
        title: 'Advert Title',
        message: 'This Is An Advert Lol',

    },
    {
        author: 'Rawr Work',
        phone: '555-555-5555',
        date: 1566263235000,
        title: 'Advert Title',
        message: 'This Is An Advert Lol',

    },
];

var FactoryTunes = [
    { label: 'Sport', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
]

var Tunes = [
    { id: 1, label: 'Generic 1', carOnly: false, carModel: null, boost: 1, suspension: 2, tranny: 3, brakes: 4, dt: 5 },
    { id: 2, label: 'Generic 2', carOnly: false, carModel: null, boost: 10, suspension: 9, tranny: 8, brakes: 7, dt: 6 },
    { id: 3, label: 'Generic 3', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 4, label: 'Generic 4', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 5, label: 'Generic 5', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 6, label: 'Generic 6', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 7, label: 'Generic 7', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 8, label: 'Generic 8', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 9, label: 'Generic 9', carOnly: false, carModel: null, boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 10, label: 'Ruiner 1', carOnly: true, carModel: 'RUINER', boost: 1, suspension: 2, tranny: 3, brakes: 4, dt: 5 },
    { id: 11, label: 'Ruiner 2', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 9, tranny: 8, brakes: 7, dt: 6 },
    { id: 12, label: 'Ruiner 3', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 13, label: 'Ruiner 4', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 14, label: 'Ruiner 5', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 15, label: 'Ruiner 6', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 16, label: 'Ruiner 7', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 17, label: 'Ruiner 8', carOnly: true, carModel: 'RUINER', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 18, label: 'LWGTR 1', carOnly: true, carModel: 'LWGTR', boost: 10, suspension: 10, tranny: 10, brakes: 10, dt: 10 },
    { id: 1, label: 'LWGTR 2', carOnly: true, carModel: 'LWGTR', boost: 1, suspension: 2, tranny: 3, brakes: 4, dt: 5 },
    { id: 2, label: 'LWGTR 3', carOnly: true, carModel: 'LWGTR', boost: 10, suspension: 9, tranny: 8, brakes: 7, dt: 6 },
]

var Accounts = [
    { id: 1, label: 'Personal Account', type: 1, balance: 100000000, owner: true },
    { id: 2, label: 'Premium Deluxe Motorsport', type: 2, balance: 100000000, owner: true },
    { id: 3, label: 'Albany Custom Imports', type: 2, balance: 100000000, owner: true },
    { id: 4, label: 'Ron', type: 2, balance: 100000000, owner: false },
    { id: 5, label: 'Some Company', type: 2, balance: 100000000, owner: true },
    { id: 6, label: 'Another Company', type: 2, balance: 100000000, owner: false },
    { id: 7, label: 'A Real Rando Company', type: 2, balance: 100000000, owner: false },
    { id: 8, label: 'This Be A Company', type: 2, balance: 100000000, owner: false },
    { id: 9, label: 'Wow I Am Original', type: 2, balance: 100000000, owner: false },
    { id: 10, label: 'Los Santos Judges', type: 3, balance: 150000000000, owner: false }
]

var Transactions = [
    {
        account: 1,
        transactions: [
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 15000, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 1100, note: 'PDM', date: 1562263235000 },
        ]
    },
    {
        account: 2,
        transactions: [
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 15000, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 1100, note: 'PDM', date: 1562263235000 },
        ]
    },
    {
        account: 3,
        transactions: [
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 15000, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Deposit', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 150, note: 'PDM', date: 1562263235000 },
            { id: 1, type: 'Withdrawal', amount: 1100, note: 'PDM', date: 1562263235000 },
        ]
    },
]

var BankTransfers = [
    { id: 1, status: 0, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 2, status: 1, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 3, status: 2, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 4, status: 3, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 5, status: 0, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 6, status: 0, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 7, status: 1, amount: 10000, origin: 1, destination: 2, date: 1562263235000 },
    { id: 8, status: 2, amount: 10000, origin: 3, destination: 2, date: 1562263235000 },
    { id: 9, status: 1, amount: 10000, origin: 2, destination: 1, date: 1562263235000 },
    { id: 10, status: 3, amount: 10000, origin: 2, destination: 1, date: 1562263235000 },
];

var IRCMessages = [
    { channel: '123', message: 'Test1', date: 1562263235000},
    { channel: '123', message: 'Test2', date: 1362263235000},
    { channel: '123', message: 'Test3', date: 1262263235000},
    { channel: '123', message: 'Test4', date: 1162263235000},
    { channel: '123', message: 'Test5', date: 1062263235000},
    { channel: '123', message: 'Test6', date: 1762263235000},
    { channel: '123', message: 'Test7', date: 1262263235000},
    { channel: '456', message: 'Test', date: 1562263235000},
    { channel: '456', message: 'Test', date: 1362263235000},
    { channel: '456', message: 'Test', date: 1262263235000},
    { channel: '456', message: 'Test', date: 1162263235000},
    { channel: '456', message: 'Test', date: 1062263235000},
    { channel: '456', message: 'Test', date: 1762263235000},
    { channel: '456', message: 'Test', date: 1262263235000},
    { channel: '789', message: 'Test', date: 1562263235000},
    { channel: '789', message: 'Test', date: 1362263235000},
    { channel: '789', message: 'Test', date: 1262263235000},
    { channel: '789', message: 'Test', date: 1162263235000},
    { channel: '789', message: 'Test', date: 1062263235000},
    { channel: '789', message: 'Test', date: 1762263235000},
    { channel: '789', message: 'Test', date: 1962263235000},
    { channel: 'aaaa', message: 'Test', date: 1972263235000},
];

export default {
    SetUp,
    Settings,
    PlayerDetails,
    Contacts,
    Messages,
    Calls,
    Tweets,
    Adverts,
    FactoryTunes,
    Tunes,
    Accounts,
    Transactions,
    BankTransfers,
    IRCMessages
 };