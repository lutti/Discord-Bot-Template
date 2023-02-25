const activtyWatchingMock = {
    name: 'Crunchyroll',
    type: 3,
    url: null,
    details: 'Uzaki-chan Wants to Hang Out!',
    state: 'Uzaki-chan Wants to Hang Out!',
    applicationId: '981509069309354054',
    timestamps: { start: null, end: null },
    party: null,
    assets: {
        largeText: 'Season 1, Episode 1',
        smallText: 'Crunchyroll',
        largeImage: 'mp:external/gdjnOJVFJ0QVtUAAtROOg1LoLEBbfcDMKyNJAjRqpw0/https/www.crunchyroll.com/imgsrv/display/thumbnail/1125x1688/catalog/crunchyroll/31c0c9fdef1647c16b2a41af66dd74ed.jpe',
        smallImage: 'mp:external/9B0ACI1EQO4nIr6ohFe8ptYYEN28m8ePG1u8K6FtbFU/https/upload.wikimedia.org/wikipedia/commons/thumb/0/08/Crunchyroll_Logo.png/857px-Crunchyroll_Logo.png',
    },
    flags: { bitfield: 0 },
    emoji: null,
    buttons: ['Watch now on Crunchyroll'],
    createdTimestamp: 1677352175023,
};

const activtyListeningMock = {
    name: 'Spotify',
    type: 2,
    url: null,
    details: 'Auras',
    state: 'Shiny_sz',
    applicationId: null,
    timestamps: { start: null, end: null },
    party: { id: 'spotify:401146663822950401' },
    assets: {
        largeText: 'Auras',
        smallText: null,
        largeImage: 'spotify:ab67616d0000b273938242ba4ea119725b38633e',
        smallImage: null,
    },
    flags: { bitfield: 48 },
    emoji: null,
    buttons: [],
    createdTimestamp: 1677351980057,
};

export default { activtyWatchingMock, activtyListeningMock };