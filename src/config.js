var ROOT_ADDRESS = 'http://8bit_phone';

var helpers = {
    "//": "REQUIRE https://github.com/citizenfx/screenshot-basic or set false",
    "enableTakePhoto": true,
    "fileUploadService_Url": "http://localhost:3555/upload/",
    "fileUploadService_Field": "files[]",
}

var Apps = [
    {
        name: 'Contacts',
        container: 'contacts',
        icon: '<i class="fas fa-address-book"></i>',
        color: '#006064',
        unread: 0,
        enabled: true,
        dumpable: 0
    },
    {
        name: 'Phone',
        container: 'phone',
        icon: '<i class="fas fa-phone"></i>',
        color: '#01579b',
        unread: 0,
        enabled: true,
        dumpable: 0
    },
    {
        name: 'Messages',
        container: 'message',
        icon: '<i class="fas fa-comment-alt"></i>',
        color: '#311b92',
        unread: 0,
        enabled: true,
        dumpable: 0
    },
    {
        name: 'Bank',
        container: 'bank',
        icon: '<i class="fas fa-university"></i>',
        color: '#d7252a',
        unread: 0,
        enabled: true,
        customExit: true,
        dumpable: 0
    },
    {
        name: 'Twitter',
        container: 'twitter',
        icon: '<i class="fab fa-twitter"></i>',
        color: '#039be5',
        unread: 0,
        enabled: true,
        dumpable: 0
    },
    {
        name: 'Yellow Pages',
        container: 'yp',
        icon: '<i class="fas fa-ad"></i>',
        color: '#f9a825',
        unread: 0,
        enabled: false,
        dumpable: 0
    },
    {
        name: 'Settings',
        container: 'settings',
        icon: '<i class="fas fa-cogs"></i>',
        color: '#404040',
        unread: 0,
        enabled: true,
        dumpable: 0
    },
    {
        name: 'Dumper',
        container: 'dumper',
        icon: '<i class="fas fa-download"></i>',
        color: 'hsl(333, 100%, 50%)',
        unread: 0,
        enabled: false,
        dumpable: 1
    },
    {
        name: 'IRC',
        container: 'irc',
        icon: '<i class="fas fa-comment-slash"></i>',
        color: '#1de9b6',
        unread: 0,
        enabled: true,
        dumpable: 2
    },
    {
        name: 'Tuner',
        container: 'tuner',
        icon: '<i class="fas fa-tools"></i>',
        color: '#004d40',
        unread: 0,
        enabled: false,
        dumpable: 2
    },
    {
        name: 'Racing',
        container: 'racing',
        icon: '<i class="fas fa-flag-checkered"></i>',
        color: '#15E593',
        unread: 0,
        enabled: true,
        dumpable: 0
    },
    {
        name: 'Camera',
        container: 'camera',
        icon: "<i class=\"fas fa-camera-retro\"></i>",
        color: "#FF4500",
        unread: 0,
        enabled: true,
        dumpable: 0
    },
];


export default { ROOT_ADDRESS, Apps };
