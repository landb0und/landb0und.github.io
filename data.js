// Shared client data for jacobboehme.com
// One source of truth. Photo stories, Work stories, Worked With marquee, and
// client.html all read from this. Adding a client here auto-creates the story
// and the detail page; the story thumb is auto-derived from the first
// media item (video or photo) unless `thumb` is set explicitly.

window.CLIENTS = [
  {
    id: 'grace-vanderwaal',
    name: 'Grace VanderWaal',
    short: 'Grace V.',
    handle: '@gracevanderwaal',
    role: 'Director · Executive Producer',
    blurb: 'CHILDSTAR album rollout — visual identity and music video direction. End-to-end Landbound shop.',
    palette: 'sa-1',
    thumb: null,
    media: [
      { type: 'video', embedId: 'fb65780e-f6b3-4a5b-a58e-1eb1c8e0e0e8', bunny: true, title: 'CHILDSTAR: Final Act', year: '2025', tags: ['Director','EP','VFX','Editor'] },
      { type: 'video', embedId: 'e8775058-272b-48b5-85a9-37410c6cbb25', bunny: true, title: 'HIGH SOCIAL', year: '2025', tags: ['Director','Editor','Vertical'] }
    ]
  },
  {
    id: 'christian-gates',
    name: 'Christian Gates',
    short: 'Christian G.',
    handle: '@christiangatesmusic',
    role: 'Director · DP · Editor · VFX',
    blurb: 'Two music videos. Direction, photography, post.',
    palette: 'sa-2',
    thumb: null,
    media: [
      { type: 'video', embedId: '9e6f327c-1d83-4545-b88c-3193d7dd4274', bunny: true, title: 'Bleed', year: '2025', tags: ['Director','Editor'] },
      { type: 'video', embedId: 'b58d5348-c997-4338-8a9d-f83302bf948a', bunny: true, title: 'Secrets', year: '2024', tags: ['Director','DP','Editor','VFX'] }
    ]
  },
  {
    id: 'aporro',
    name: 'Aporro',
    short: 'Aporro',
    handle: '@aporrobrand',
    role: 'Director · Photographer',
    blurb: 'Commercial campaign — jewelry product hero photography.',
    palette: 'sa-7',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/commercial/Aporro.jpg', title: 'Campaign — frame 01', year: '2025' },
      { type: 'photo', src: 'photos/commercial/Aporro-2.jpg', title: 'Campaign — frame 02', year: '2025' },
      { type: 'photo', src: 'photos/commercial/Aporro-3.jpg', title: 'Campaign — frame 03', year: '2025' },
      { type: 'photo', src: 'photos/commercial/Aporro-4.png', title: 'Campaign — frame 04', year: '2025' },
      { type: 'photo', src: 'photos/commercial/Aporro-5.png', title: 'Campaign — frame 05', year: '2025' }
    ]
  },
  {
    id: 'max-frost',
    name: 'Max Frost',
    short: 'Max F.',
    handle: '@maxfrostmusic',
    role: 'Director · Photographer',
    blurb: 'Press portraits — single source soft, mood-forward.',
    palette: 'sa-8',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/commercial/Max-Frost-1.png', title: 'Press portrait 01', year: '2025' },
      { type: 'photo', src: 'photos/commercial/Max-Frost-2.jpeg', title: 'Press portrait 02', year: '2025' }
    ]
  },
  {
    id: 'mike-posner',
    name: 'Mike Posner',
    short: 'Mike P.',
    handle: '@mikeposner',
    role: 'Director · Photographer',
    blurb: 'Promo session for the new record. 45 minutes, one lens. Also shot the Surfaces collab.',
    palette: 'sa-3',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/mike-posner-1.jpg', title: 'Promo session', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-1.jpg', title: 'Surfaces x Posner — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-2.jpg', title: 'Surfaces x Posner — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-3.jpg', title: 'Surfaces x Posner — 3', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-4.jpg', title: 'Surfaces x Posner — 4', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-5.jpg', title: 'Surfaces x Posner — 5', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-6.jpg', title: 'Surfaces x Posner — 6', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-7.jpg', title: 'Surfaces x Posner — 7', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'gym-class-heroes',
    name: 'Gym Class Heroes',
    short: 'Gym Class H.',
    handle: '@gymclassheroes',
    role: 'Director · Photographer',
    blurb: 'Reunion record promo. Phase One in studio.',
    palette: 'sa-4',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/gym-class-heroes-1.jpg', title: 'Studio session — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/gym-class-heroes-2.jpg', title: 'Studio session — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/gym-class-heroes-3.jpg', title: 'Studio session — 3', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'surfaces',
    name: 'Surfaces',
    short: 'Surfaces',
    handle: '@surfaces',
    role: 'Director · DP · Editor · VFX · Photographer',
    blurb: "Call Me When You're Home — music video + vertical cut. VFX and stills across the project.",
    palette: 'sa-5',
    thumb: null,
    media: [
      { type: 'video', embedId: '8d669bba-e779-4860-84b1-ffc3055d1b96', bunny: true, title: "Call Me When You're Home", year: '2024', tags: ['Director','DP','Editor','VFX'] },
      { type: 'video', embedId: 'efe3f41a-9ce2-49c6-bbf0-d879b2fbbcb5', bunny: true, title: "Call Me When You're Home — Vertical cut", year: '2024', tags: ['Director','DP','Editor','VFX','Vertical'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-1.jpg', title: 'Surfaces x Posner — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-2.jpg', title: 'Surfaces x Posner — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-3.jpg', title: 'Surfaces x Posner — 3', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-4.jpg', title: 'Surfaces x Posner — 4', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-5.jpg', title: 'Surfaces x Posner — 5', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-6.jpg', title: 'Surfaces x Posner — 6', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/surfaces-posner-7.jpg', title: 'Surfaces x Posner — 7', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'allison-hagendorf',
    name: 'Allison Hagendorf',
    short: 'Allison H.',
    handle: '@allisonhagendorf',
    role: 'Director · Editor',
    blurb: 'The Allison Hagendorf Show — S4 in production.',
    palette: 'sa-6',
    thumb: null,
    media: []
  },
  {
    id: 'two-feet',
    name: 'Two Feet',
    short: 'Two Feet',
    handle: '@twofeetmusic',
    role: 'Director · DP · Editor · Photographer',
    blurb: 'Press portraits, tour stills, behind-the-scenes work.',
    palette: 'sa-2',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/two-feet-1.jpg', title: 'Press portrait — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/two-feet-2.jpg', title: 'Press portrait — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/two-feet-3.jpg', title: 'Press portrait — 3', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/two-feet-4.jpg', title: 'Press portrait — 4', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'nyc-cinematography-awards',
    name: 'NYC Cinematography Awards',
    short: 'NYC Cinema',
    handle: 'Award · 2024',
    role: 'Cinematographer · Selection',
    blurb: 'Selected work — NYC Cinematography Awards.',
    palette: 'sa-9',
    thumb: null,
    media: []
  },
  {
    id: 'raw-material',
    name: 'Raw Material',
    short: 'Raw Material',
    handle: 'Production',
    role: 'Director · VFX',
    blurb: 'Production work for Raw Material.',
    palette: 'sa-10',
    thumb: null,
    media: []
  },
  {
    id: 'screamfest',
    name: 'SCREAMFEST',
    short: 'SCREAMFEST',
    handle: 'Festival selection',
    role: 'Director · Writer',
    blurb: 'Forgive & Forget — 2022 official selection.',
    palette: 'sa-9',
    thumb: null,
    media: [
      { type: 'video', embedId: 'oD42T1md068', title: 'Forgive & Forget', year: '2022', tags: ['Director','Writer','Editor','DP','VFX Sup'] }
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    short: 'TikTok',
    handle: '@landbound',
    role: 'Creator partner',
    blurb: '100K+ followers, 45M+ views across short-form work.',
    palette: 'sa-10',
    thumb: null,
    media: []
  },
  {
    id: 'chloe-star',
    name: 'Chloe Star',
    short: 'Chloe S.',
    handle: '@chloestar',
    role: 'VFX · VFX Supervisor · Editor',
    blurb: 'Stunt-driven content — VFX supervision and finishing for high-impact shots.',
    palette: 'sa-1',
    thumb: null,
    media: []
  },
  {
    id: 'bahari',
    name: 'Bahari',
    short: 'Bahari',
    handle: '@bahari',
    role: 'Director · DP',
    blurb: 'Music projects — direction and cinematography.',
    palette: 'sa-3',
    thumb: null,
    media: []
  },
  {
    id: 'saint-motel',
    name: 'Saint Motel',
    short: 'Saint Motel',
    handle: '@saintmotel',
    role: 'Director · DP · Photographer',
    blurb: 'Indie alt-rock — direction, cinematography, and press portraits.',
    palette: 'sa-2',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/saint-motel-1.jpeg', title: 'Press portrait', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'mowglis',
    name: "The Mowgli's",
    short: "Mowgli's",
    handle: '@themowglis',
    role: 'Director · DP · Photographer',
    blurb: 'Indie band collaboration — direction, cinematography, and stills.',
    palette: 'sa-4',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/the-mowglis-1.jpeg', title: 'Band session', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'young-rising-sons',
    name: 'Young Rising Sons',
    short: 'YRS',
    handle: '@youngrisingsons',
    role: 'Director · DP',
    blurb: 'Alt-rock collaboration — direction and cinematography.',
    palette: 'sa-5',
    thumb: null,
    media: []
  },
  {
    id: 'allen-stone',
    name: 'Allen Stone',
    short: 'Allen S.',
    handle: '@allenstone',
    role: 'Photographer',
    blurb: 'Press and promo photography.',
    palette: 'sa-6',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/allen-stone-1.jpeg', title: 'Promo — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/allen-stone-2.jpeg', title: 'Promo — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/allen-stone-3.jpeg', title: 'Promo — 3', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'magic-giant',
    name: 'Magic Giant',
    short: 'Magic Giant',
    handle: '@magicgiant',
    role: 'Photographer',
    blurb: 'Press photography.',
    palette: 'sa-7',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/magic-giant-1.jpeg', title: 'Press portrait', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'no-love-middle-child',
    name: 'No Love For The Middle Child',
    short: 'No Love',
    handle: '@nolovemiddlechild',
    role: 'Photographer',
    blurb: 'Press and promo photography.',
    palette: 'sa-9',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/no-love-1.jpg', title: 'Session — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/no-love-2.jpg', title: 'Session — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/no-love-3.jpg', title: 'Session — 3', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/no-love-4.jpg', title: 'Session — 4', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/no-love-5.jpg', title: 'Session — 5', year: '2024', tags: ['Photographer'] }
    ]
  },
  {
    id: 'dye',
    name: 'DYE',
    short: 'DYE',
    handle: '@dye_empty',
    role: 'Director · Editor',
    blurb: 'Music video — direction and post.',
    palette: 'sa-3',
    thumb: null,
    media: [
      { type: 'video', embedId: '3e8cfa34-3f17-4321-a8fd-41438395e823', bunny: true, title: 'DX7', year: '2025', tags: ['Director','Editor','Vertical'] }
    ]
  },
  {
    id: 'claudia-valentina',
    name: 'Claudia Valentina',
    short: 'Claudia V.',
    handle: '@claudia_valentina__',
    role: 'Director · Editor',
    blurb: 'Music video — direction and post.',
    palette: 'sa-10',
    thumb: null,
    media: [
      { type: 'video', embedId: 'e183de5b-77e6-432a-ad2b-764062367acc', bunny: true, title: 'Canvas', year: '2025', tags: ['Director','Editor','Vertical'] }
    ]
  },
  {
    id: 'natalie-jane',
    name: 'Natalie Jane',
    short: 'Natalie J.',
    handle: '@nataliejane',
    role: 'Director · DP · Editor',
    blurb: 'Music video — direction, cinematography, post.',
    palette: 'sa-5',
    thumb: null,
    media: [
      { type: 'video', embedId: '6f8f2d98-78dc-49d6-8576-9f6138d5e53f', bunny: true, title: 'Natalie Jane — vertical', year: '2025', tags: ['Director','DP','Editor','Vertical'] }
    ]
  },
  {
    id: 'scotty-sire',
    name: 'Scotty Sire',
    short: 'Scotty S.',
    handle: '@scottysire',
    role: 'Photographer',
    blurb: 'Promo and press photography.',
    palette: 'sa-8',
    thumb: null,
    media: [
      { type: 'photo', src: 'photos/clients/scotty-sire-1.jpeg', title: 'Promo — 1', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/scotty-sire-2.jpeg', title: 'Promo — 2', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/scotty-sire-3.jpeg', title: 'Promo — 3', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/scotty-sire-4.jpeg', title: 'Promo — 4', year: '2024', tags: ['Photographer'] },
      { type: 'photo', src: 'photos/clients/scotty-sire-5.jpeg', title: 'Promo — 5', year: '2024', tags: ['Photographer'] }
    ]
  }
];

// Pick the best available thumbnail for a client. Falls back to first video
// thumbnail, then first photo, then null (so story circles show initials).
window.clientThumb = function(c) {
  if (c.thumb) return c.thumb;
  const firstPhoto = c.media.find(m => m.type === 'photo');
  if (firstPhoto) return firstPhoto.src;
  const firstVid = c.media.find(m => m.type === 'video');
  if (firstVid) {
    if (firstVid.bunny) return 'https://vz-5dfccea4-b84.b-cdn.net/' + firstVid.embedId + '/thumbnail.jpg';
    return 'https://img.youtube.com/vi/' + firstVid.embedId + '/maxresdefault.jpg';
  }
  return null;
};

// Bunny config — exported so other files can build thumbnail/embed URLs
window.BUNNY = { LIB: '675985', CDN: 'vz-5dfccea4-b84.b-cdn.net' };
window.mediaThumb = function(m) {
  if (m.type === 'photo') return m.src;
  if (m.type === 'video') {
    if (m.bunny) return 'https://vz-5dfccea4-b84.b-cdn.net/' + m.embedId + '/thumbnail.jpg';
    return 'https://img.youtube.com/vi/' + m.embedId + '/maxresdefault.jpg';
  }
  return null;
};

window.clientById = function(id) {
  return window.CLIENTS.find(c => c.id === id);
};

// Pick initials from a client name. "Grace VanderWaal" -> "GV", "Aporro" -> "AP"
window.clientInitials = function(c) {
  const parts = c.name.split(/[\s\/]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return c.name.slice(0,2).toUpperCase();
};

// VERTICALS — single source of truth for short-form work
// Add a new vertical here → it auto-appears in: home strip, Work shorts feed,
// and on the linked client's profile page.
window.VERTICALS = [
  {
    id: 'stunt-fall-vfx-bts',
    guid: 'e155dcd4-733a-489c-9d89-3417e3333cfe',
    title: 'Stunt Fall VFX — Behind The Scenes',
    client: 'chloe-star',
    type: 'bts',
    tag: 'BTS · CHLOE STAR · 2024',
    role: 'VFX · VFX Supervisor · Editor',
    music: '@chloestar',
    label: 'Stunt Fall',
    caption: 'BTS · Chloe Star'
  },
  {
    id: 'bahari-better-than-us-1',
    guid: '5e9277e4-debc-4491-bc5b-8fbbf8f56921',
    title: 'Better Than Us — 1',
    client: 'bahari',
    type: 'music',
    tag: 'MUSIC · BAHARI · 2024',
    role: 'Director · DP',
    music: '@bahari — Better Than Us',
    label: 'Better Than Us',
    caption: 'Bahari · Better Than Us'
  },
  {
    id: 'cmwyh-vertical',
    guid: 'efe3f41a-9ce2-49c6-bbf0-d879b2fbbcb5',
    title: "Call Me When You're Home",
    client: 'surfaces',
    type: 'music',
    tag: 'MUSIC · SURFACES · 2024',
    role: 'Director · DP · Editor · VFX',
    music: '@surfaces — Call Me When You\'re Home',
    label: 'CMWYH',
    caption: 'Surfaces · vertical'
  },
  {
    id: 'grace-high-social',
    guid: 'e8775058-272b-48b5-85a9-37410c6cbb25',
    title: 'HIGH SOCIAL',
    client: 'grace-vanderwaal',
    type: 'music',
    tag: 'MUSIC · GRACE VANDERWAAL · 2025',
    role: 'Director · Editor',
    music: '@gracevanderwaal — HIGH SOCIAL',
    label: 'HIGH SOCIAL',
    caption: 'Grace VanderWaal · vertical'
  },
  {
    id: 'dye-dx7',
    guid: '3e8cfa34-3f17-4321-a8fd-41438395e823',
    title: 'DX7',
    client: 'dye',
    type: 'music',
    tag: 'MUSIC · DYE · 2025',
    role: 'Director · Editor',
    music: '@dye_empty — DX7',
    label: 'DX7',
    caption: 'DYE · vertical'
  },
  {
    id: 'claudia-canvas',
    guid: 'e183de5b-77e6-432a-ad2b-764062367acc',
    title: 'Canvas',
    client: 'claudia-valentina',
    type: 'music',
    tag: 'MUSIC · CLAUDIA VALENTINA · 2025',
    role: 'Director · Editor',
    music: '@claudia_valentina__ — Canvas',
    label: 'Canvas',
    caption: 'Claudia Valentina · vertical'
  },
  {
    id: 'natalie-jane-vertical',
    guid: '6f8f2d98-78dc-49d6-8576-9f6138d5e53f',
    title: 'Natalie Jane',
    client: 'natalie-jane',
    type: 'music',
    tag: 'MUSIC · NATALIE JANE · 2025',
    role: 'Director · DP · Editor',
    music: '@nataliejane',
    label: 'Natalie Jane',
    caption: 'Natalie Jane · vertical'
  },
  {
    id: 'landbound-oaky',
    guid: 'f8cf0b2b-02fc-4e45-8430-c3c234e1a5ea',
    title: 'oaky oaky oaky',
    client: 'tiktok',
    type: 'edits',
    tag: 'EDITS · LANDBOUND · 2025',
    role: 'Director · DP · Editor · VFX',
    music: '@landbound',
    label: 'oaky',
    caption: '@landbound · vertical edit'
  },
  {
    id: 'landbound-tiktok-mp4',
    guid: '9284b2d3-3ea3-4cb4-be22-3b2f6dd5c778',
    title: 'FOR TIKTOK',
    client: 'tiktok',
    type: 'edits',
    tag: 'EDITS · LANDBOUND · 2025',
    role: 'Director · DP · Editor · VFX',
    music: '@landbound',
    label: 'TIKTOK',
    caption: '@landbound · vertical edit'
  },
  {
    id: 'landbound-w-color-phone',
    guid: '27445ba3-d8a3-45f7-b833-0e049e6274c9',
    title: 'W COLOR for phone',
    client: 'tiktok',
    type: 'edits',
    tag: 'EDITS · LANDBOUND · 2025',
    role: 'Director · DP · Editor · VFX',
    music: '@landbound',
    label: 'W COLOR',
    caption: '@landbound · vertical edit'
  }
];

window.verticalThumb = function(v) {
  return 'https://' + window.BUNNY.CDN + '/' + v.guid + '/thumbnail.jpg';
};
window.verticalMp4 = function(v, quality) {
  return 'https://' + window.BUNNY.CDN + '/' + v.guid + '/play_' + (quality || '480p') + '.mp4';
};
window.verticalEmbed = function(v, opts) {
  opts = opts || {};
  const params = [];
  params.push('autoplay=' + (opts.autoplay ? 'true' : 'false'));
  params.push('loop=' + (opts.loop ? 'true' : 'false'));
  params.push('muted=' + (opts.muted ? 'true' : 'false'));
  params.push('preload=true');
  params.push('responsive=true');
  return 'https://iframe.mediadelivery.net/embed/' + window.BUNNY.LIB + '/' + v.guid + '?' + params.join('&');
};
