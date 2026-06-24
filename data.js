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
    thumb: 'https://img.youtube.com/vi/wCQzcM3Z_bo/maxresdefault.jpg',
    media: [
      // Grace longforms share playlistId 'grace-show' so playing any one
      // recommends the others below it (CHILDSTAR is the featured/cover). This
      // group is rendered WITHOUT the 2x2 playlist tile/badge (only Allison's
      // show gets that) — see the grace-show special-case in work.html.
      { type: 'video', embedId: 'fb65780e-f6b3-4a5b-a58e-1eb1c8e0e0e8', bunny: true, title: 'CHILDSTAR: Final Act', year: '2025', tags: ['Director','EP','VFX','Editor'], playlistId: 'grace-show', featured: true },
      { type: 'video', embedId: 'e8775058-272b-48b5-85a9-37410c6cbb25', bunny: true, title: 'HIGH SOCIAL', year: '2025', tags: ['Director','Editor','Vertical'] },
      // Performance video series — now on Bunny (official 4K mirrors)
      { type: 'video', embedId: 'b054d114-131a-479e-88b2-184bdcb39600', bunny: true, title: 'Proud',                year: '2024', tags: ['Director','Editor','Vertical'] },
      { type: 'video', embedId: 'd097b1a0-4ce4-48c1-83d9-62275775e699', bunny: true, title: 'Fade',                 year: '2024', tags: ['Director','Editor'], playlistId: 'grace-show' },
      { type: 'video', embedId: '99c82990-9379-4422-8f63-bc460ed4f713', bunny: true, title: 'Behavioral Problems',  year: '2024', tags: ['Director','Editor'], playlistId: 'grace-show' },
      { type: 'video', embedId: '46e0e887-aeea-4441-8d10-dc0cc8acd536', bunny: true, title: 'Homesick',             year: '2024', tags: ['Director','Editor'], playlistId: 'grace-show' },
      { type: 'video', embedId: 'f42fbabd-edbe-4bb0-9474-cb491726fbb1', bunny: true, title: 'Brand New',            year: '2024', tags: ['Director','Editor'], playlistId: 'grace-show' }
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
    thumb: 'photos/clients/christian-gates.png',
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
    thumb: 'photos/commercial/Max-Frost-2.jpeg',
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
    blurb: 'Reunion record promo. In studio.',
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
      { type: 'video', embedId: '6b38b59e-aedd-4208-a1fc-ff85adb30021', bunny: true, title: 'Blame It All On Me', sub: '<strong>Surfaces x Mike Posner</strong> · Performance · 2025', year: '2025', tags: ['Director','DP','Editor','Vertical'] },
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
  // Yungblud — comes BEFORE allison-hagendorf so the dedupe builder in
  // photo.html picks Yungblud as the primary author on photos where both
  // appear (he's the on-camera artist; Allison hosts the show).
  // The "subjects" location string drives the BTS caption — when Billy
  // Corgan / Smashing Pumpkins are in frame they go there, not in author.
  {
    id: 'yungblud',
    name: 'Yungblud',
    short: 'Yungblud',
    handle: '@yungblud',
    role: 'Photographer',
    blurb: 'BTS film stills from the Allison Hagendorf Show — Yungblud sit-down (w/ Billy Corgan).',
    palette: 'sa-3',
    thumb: 'photos/clients/allison-yungblud-bts/yungblud-bts-10.jpg',
    media: [
      // Multi-subject frames (Yungblud + Allison + Smashing Pumpkins / Billy Corgan)
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-1.jpg', title: 'Hagendorf Show BTS — 01', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-2.jpg', title: 'Hagendorf Show BTS — 02', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-3.jpg', title: 'Hagendorf Show BTS — 03', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      // Yungblud + Smashing Pumpkins
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-5.jpg', title: 'Hagendorf Show BTS — 05', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-8.jpg', title: 'Hagendorf Show BTS — 08', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      // Yungblud solo
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-7.jpg',  title: 'Hagendorf Show BTS — 07', year: '2024', camera: '35mm', location: 'Hagendorf Show · Yungblud',  tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-10.jpg', title: 'Hagendorf Show BTS — 10', year: '2024', camera: '35mm', location: 'Hagendorf Show · Yungblud',  tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-11.jpg', title: 'Hagendorf Show BTS — 11', year: '2024', camera: '35mm', location: 'Hagendorf Show · Yungblud',  tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-12.jpg', title: 'Hagendorf Show BTS — 12', year: '2024', camera: '35mm', location: 'Hagendorf Show · Yungblud',  tags: ['BTS','Black & White','35mm','Photographer'] },
      // Yungblud + Allison
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-9.jpg',  title: 'Hagendorf Show BTS — 09', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-13.jpg', title: 'Hagendorf Show BTS — 13', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf', tags: ['BTS','Black & White','35mm','Photographer'] }
    ]
  },
  // Smashing Pumpkins — Billy Corgan in frame. Photo 14 is SP-only;
  // other SP shots are co-credit on the multi-subject frames above.
  {
    id: 'smashing-pumpkins',
    name: 'Smashing Pumpkins',
    short: 'Smashing P.',
    handle: '@smashingpumpkins',
    role: 'Photographer',
    blurb: 'BTS portrait of Billy Corgan during the Hagendorf Show sit-down.',
    palette: 'sa-2',
    thumb: 'photos/clients/allison-yungblud-bts/yungblud-bts-14.jpg',
    media: [
      // Photo 14: Billy Corgan solo — SP is primary author here
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-14.jpg', title: 'Billy Corgan — portrait', year: '2024', camera: '35mm', location: 'Hagendorf Show · Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      // Co-author entries for the multi-subject frames (same src dedupes into one feed post with both clients credited)
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-1.jpg', title: 'Hagendorf Show BTS — 01', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-2.jpg', title: 'Hagendorf Show BTS — 02', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-3.jpg', title: 'Hagendorf Show BTS — 03', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Allison Hagendorf, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-5.jpg', title: 'Hagendorf Show BTS — 05', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-8.jpg', title: 'Hagendorf Show BTS — 08', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] }
    ]
  },
  {
    id: 'allison-hagendorf',
    name: 'Allison Hagendorf',
    short: 'Allison H.',
    handle: '@allisonhagendorf',
    role: 'Director · Editor · Photographer',
    blurb: 'The Allison Hagendorf Show — S4 in production. Long-form artist interviews + BTS film stills.',
    palette: 'sa-6',
    thumb: 'photos/clients/allison-yungblud-bts/yungblud-bts-9.jpg',
    media: [
      // ── Allison Hagendorf Show — episode list ──
      // Shared `playlistId` collapses these into ONE "playlist" card on the
      // Work-tab Up Next so 7+ episodes don't dominate the rail. The card
      // expands into an episode picker that swaps the main player on click.
      // `featured: true` marks the cover episode; the rest sort by date.
      { type: 'video', embedId: '3aoeWVc5NHw', bunny: false, title: 'At Home With Dogstar — Keanu Reeves, Bret Domrose & Rob Mailhouse',
        sub: 'Keanu Reeves on new music & brotherhood', year: '2024', tags: ['Director','Editor'],
        playlistId: 'allison-show', featured: true, guest: 'Keanu Reeves · Dogstar' },
      { type: 'video', embedId: '4Z_VwUSr_4w', bunny: false, title: 'An Evening with YUNGBLUD — The Raw, Unfiltered Truth',
        year: '2024', tags: ['Director','Editor'], playlistId: 'allison-show', guest: 'YUNGBLUD' },
      { type: 'video', embedId: 'DduBlVnlOOM', bunny: false, title: 'At Home With Pete Wentz & Vienna Vienna — Making Your Own Lane',
        year: '2024', tags: ['Director','Editor'], playlistId: 'allison-show', guest: 'Pete Wentz · Vienna Vienna' },
      { type: 'video', embedId: 'tFUowdlsAqE', bunny: false, title: 'At Home With All Time Low — 20 Years of Friendship, Music & Mayhem',
        year: '2024', tags: ['Director','Editor'], playlistId: 'allison-show', guest: 'All Time Low' },
      { type: 'video', embedId: '26yi4nH3f6Y', bunny: false, title: 'At Home With Chris Daughtry — The Journey Back From The Bottom',
        year: '2024', tags: ['Director','Editor'], playlistId: 'allison-show', guest: 'Chris Daughtry' },
      { type: 'video', embedId: 'AT9jAiQ7HIo', bunny: false, title: 'At Home With Zakk Wylde — Ozzy Stories, New Music & Doing What You Love',
        year: '2024', tags: ['Director','Editor'], playlistId: 'allison-show', guest: 'Zakk Wylde' },
      // Only the frames Allison appears in — others surface here via the
      // auto-dedupe on photo.html which picks up multi-author shared srcs.
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-1.jpg', title: 'Hagendorf Show BTS — 01', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Yungblud, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-2.jpg', title: 'Hagendorf Show BTS — 02', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Yungblud, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-3.jpg', title: 'Hagendorf Show BTS — 03', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Yungblud, Billy Corgan (Smashing Pumpkins)', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-9.jpg', title: 'Hagendorf Show BTS — 09', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Yungblud', tags: ['BTS','Black & White','35mm','Photographer'] },
      { type: 'photo', src: 'photos/clients/allison-yungblud-bts/yungblud-bts-13.jpg', title: 'Hagendorf Show BTS — 13', year: '2024', camera: '35mm', location: 'Hagendorf Show · w/ Yungblud', tags: ['BTS','Black & White','35mm','Photographer'] }
    ]
  },
  {
    id: 'two-feet',
    name: 'Two Feet',
    short: 'Two Feet',
    handle: '@twofeetmusic',
    role: 'Director · DP · Editor · Photographer',
    blurb: 'Performance video + press portraits, tour stills, behind-the-scenes work.',
    palette: 'sa-2',
    thumb: null,
    media: [
      { type: 'video', embedId: '35ae0a01-878d-49b7-b0d7-3b7cc3e10bb3', bunny: true, title: 'Bby', sub: '<strong>Two Feet</strong> · Performance · 2025', year: '2025', tags: ['Director','DP','Editor'] },
      { type: 'video', embedId: '9b89734d-ba4e-4a50-ba2e-d713b5795cac', bunny: true, title: 'Bathtub', sub: '<strong>Two Feet</strong> · Live Performance · 2025', year: '2025', tags: ['Director','Editor'] },
      { type: 'video', embedId: '6fbfaef7-d5df-4e58-bf87-84436cb47cba', bunny: true, title: 'Reda', sub: '<strong>Two Feet</strong> · Live Performance · 2025', year: '2025', tags: ['Director','Editor'] },
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
      { type: 'video', embedId: 'oD42T1md068', title: 'Forgive & Forget — Horror Short Film', year: '2022', tags: ['Director','Writer','Editor','DP','VFX Sup'] }
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    short: 'TikTok',
    handle: '@landbound',
    role: 'Creator partner',
    blurb: '100K+ followers, 110M+ views across short-form work.',
    palette: 'sa-10',
    thumb: null,
    media: []
  },
  {
    id: 'landbound',
    name: 'Landbound',
    short: 'Landbound',
    handle: '@landbound',
    role: 'Director · DP · Editor · VFX · Photographer',
    blurb: 'My own work — sizzle, TikTok edits, BTS, and personal projects under the Landbound banner.',
    palette: 'sa-1',
    thumb: 'headshot.jpg',
    media: [
      { type: 'video', embedId: 'e0374508-213f-47a2-ae0d-dd50d9df695d', bunny: true, title: "Director's Reel", year: '2025', tags: ['Director','VFX','Editor','DP'] }
    ]
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
    id: 'landon-barker',
    name: 'Landon Barker',
    short: 'Landon B.',
    handle: '@landonasherbarker',
    role: 'Director · Editor',
    blurb: 'Music project — performance vertical, full Landbound shop.',
    palette: 'sa-4',
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
    role: 'Director · Editor · Photographer',
    blurb: 'Music video direction + press and promo photography.',
    palette: 'sa-9',
    thumb: null,
    media: [
      { type: 'video', embedId: '4f84800d-811b-4218-83a4-56880a993486', bunny: true, title: 'Broken Wings', sub: '<strong>No Love For The Middle Child</strong> · Music Video · 2025', year: '2025', tags: ['Director','Editor'] },
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
      { type: 'video', embedId: 'e183de5b-77e6-432a-ad2b-764062367acc', bunny: true, title: 'Canvas', year: '2025', tags: ['Director','Editor','Vertical'] },
      { type: 'video', embedId: 'ae99920a-46b4-4765-9c3b-408a23eb8508', bunny: true, title: 'Live Performance', year: '2025', tags: ['Director','Editor'] }
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
      { type: 'video', embedId: '6f8f2d98-78dc-49d6-8576-9f6138d5e53f', bunny: true, title: 'Natalie Jane — vertical 1', year: '2025', tags: ['Director','DP','Editor','Vertical'] },
      { type: 'video', embedId: '39fe2dc1-70f2-4826-8337-407a593292ef', bunny: true, title: 'Natalie Jane — vertical 2', year: '2025', tags: ['Director','DP','Editor','Vertical'] }
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
    if (firstVid.bunny) return window.bunnyThumb(firstVid.embedId);
    return 'https://img.youtube.com/vi/' + firstVid.embedId + '/maxresdefault.jpg';
  }
  return null;
};

// Bunny config — exported so other files can build thumbnail/embed URLs.
// NOTE: do NOT append query strings (?v=N) to thumbnail URLs. Some videos in
// this library have token authentication that rejects any query string and
// returns 403/404. Use bare URLs. To force-refresh a thumb, hard-refresh the
// browser (Cmd+Shift+R) or wait for CDN/browser cache to expire.
window.BUNNY = { LIB: '675985', CDN: 'vz-5dfccea4-b84.b-cdn.net' };
// CHILDSTAR + Secrets thumbnail files 404 on Bunny's public CDN even after
// re-uploads. These overrides point to the released YouTube thumbnails of the
// same videos — they're reliable and globally cached. Remove an entry here
// the moment Bunny's storage starts serving the file again.
window.BUNNY_THUMB_OVERRIDES = {
  'fb65780e-f6b3-4a5b-a58e-1eb1c8e0e0e8': 'https://img.youtube.com/vi/wCQzcM3Z_bo/maxresdefault.jpg',
  'b58d5348-c997-4338-8a9d-f83302bf948a': 'photos/stills/secrets.png',
  // These videos' thumbnail.jpg 404s on Bunny's CDN (same bug as above). Their
  // preview.webp serves reliably, so use it as the poster fallback.
  '5e9277e4-debc-4491-bc5b-8fbbf8f56921': 'https://vz-5dfccea4-b84.b-cdn.net/5e9277e4-debc-4491-bc5b-8fbbf8f56921/preview.webp', // Better Than Us
  'efe3f41a-9ce2-49c6-bbf0-d879b2fbbcb5': 'https://vz-5dfccea4-b84.b-cdn.net/efe3f41a-9ce2-49c6-bbf0-d879b2fbbcb5/preview.webp', // CMWYH vertical
  '6b38b59e-aedd-4208-a1fc-ff85adb30021': 'https://vz-5dfccea4-b84.b-cdn.net/6b38b59e-aedd-4208-a1fc-ff85adb30021/preview.webp', // Blame It All On Me
  '85b07d51-f4b2-4ca0-b966-06f43b1a491c': 'https://vz-5dfccea4-b84.b-cdn.net/85b07d51-f4b2-4ca0-b966-06f43b1a491c/preview.webp', // Landon Barker x Dodge
  '9e6f327c-1d83-4545-b88c-3193d7dd4274': 'https://vz-5dfccea4-b84.b-cdn.net/9e6f327c-1d83-4545-b88c-3193d7dd4274/preview.webp'  // Bleed
};
window.bunnyThumb = function(guid) {
  if (window.BUNNY_THUMB_OVERRIDES[guid]) return window.BUNNY_THUMB_OVERRIDES[guid];
  return 'https://vz-5dfccea4-b84.b-cdn.net/' + guid + '/thumbnail.jpg';
};
window.mediaThumb = function(m) {
  if (m.type === 'photo') return m.src;
  if (m.type === 'video') {
    if (m.bunny) return window.bunnyThumb(m.embedId);
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

// VERTICALS — single source of truth for short-form work.
// Add a new vertical here → it auto-appears in: home strip, Work shorts feed,
// vfx-ai strip, and on the linked client's profile page.
//
// Schema notes:
//   role     — credit chain shown beneath the title
//   aiNote   — short tag like 'No AI', 'AI-assisted' — surfaces in caption
//   views    — when known, shown in the overlay meta line ("2M views")
//   likes    — only set when the explicit count is known; rendered as the
//              IG-style "<n> likes" line. When undefined we render NOTHING
//              (no placeholder dash), per Jacob's directive.
//   relatedTo — { type:'film', embedId:'oD42T1md068', label:'Forgive & Forget' }
//              links a vertical back to its parent film. Surfaces as a
//              tappable chip in the overlay AND as a "Related verticals"
//              strip under the parent video on the work tab.
window.VERTICALS = [
  {
    id: 'stunt-fall-vfx-bts',
    guid: 'e155dcd4-733a-489c-9d89-3417e3333cfe',
    title: 'Stunt Fall VFX',
    client: 'chloe-star',
    type: 'bts',
    tag: 'Chloe Star · 2024',
    role: 'VFX · VFX Supervisor · Editor',
    aiNote: 'No AI',
    music: '@chloestar',
    label: 'Stunt Fall',
    caption: 'Stunt Fall VFX — no AI'
  },
  {
    id: 'clair-de-lune',
    guid: '0f23b9d9-1cb2-4cd7-a75f-1cabfddcdcb6',
    title: 'Clair de Lune',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'Director · DP · VFX',
    aiNote: 'No AI',
    music: '@landbound',
    label: 'Clair de Lune',
    caption: 'Personal project — directed, shot & VFX by Landbound'
  },
  {
    id: 'again-and-again',
    guid: '27445ba3-d8a3-45f7-b833-0e049e6274c9',
    title: 'Again & Again',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'VFX · Editor',
    aiNote: 'No AI',
    music: '@landbound',
    label: 'Again & Again',
    caption: 'Personal VFX — no AI'
  },
  {
    id: 'slice-of-life',
    guid: '9284b2d3-3ea3-4cb4-be22-3b2f6dd5c778',
    title: 'Slice of Life',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'VFX · Editor',
    aiNote: 'Some AI',
    music: '@landbound',
    label: 'Slice of Life',
    caption: 'Personal VFX — some AI'
  },
  {
    id: 'bahari-better-than-us-1',
    guid: '5e9277e4-debc-4491-bc5b-8fbbf8f56921',
    title: 'Better Than Us',
    client: 'bahari',
    type: 'music',
    tag: 'Bahari · 2024',
    role: 'Director · DP',
    music: '@bahari — Better Than Us',
    label: 'Better Than Us',
    caption: 'Bahari · Better Than Us'
  },
  {
    id: 'cmwyh-vertical',
    guid: 'efe3f41a-9ce2-49c6-bbf0-d879b2fbbcb5',
    title: "Surfaces - Call Me When You're Home",
    client: 'surfaces',
    type: 'music',
    tag: 'Surfaces · 2024',
    role: 'Director · DP · Editor · VFX',
    aiNote: 'No AI',
    music: '@surfaces — Call Me When You\'re Home',
    label: "Surfaces · Call Me When You're Home",
    caption: 'Surfaces · Call Me When You\'re Home — VFX, no AI'
  },
  {
    id: 'grace-high-social',
    guid: 'e8775058-272b-48b5-85a9-37410c6cbb25',
    title: 'High',
    client: 'grace-vanderwaal',
    type: 'music',
    tag: 'Grace VanderWaal · 2025',
    role: 'Director · DP · Editor',
    music: '@gracevanderwaal — High',
    label: 'High',
    caption: 'Grace VanderWaal · shot, directed & cut by Landbound'
  },
  {
    id: 'grace-proud',
    guid: 'b054d114-131a-479e-88b2-184bdcb39600',
    title: 'Proud',
    client: 'grace-vanderwaal',
    type: 'music',
    tag: 'Grace VanderWaal · 2024',
    role: 'Director · Editor',
    music: '@gracevanderwaal — Proud',
    label: 'Proud',
    caption: 'Grace VanderWaal · Proud — directed & cut by Landbound'
  },
  {
    id: 'dye-dx7',
    guid: '3e8cfa34-3f17-4321-a8fd-41438395e823',
    title: 'DX7',
    client: 'dye',
    type: 'music',
    tag: 'DYE · 2025',
    role: 'Director · Editor',
    music: '@dye_empty — DX7',
    label: 'DX7',
    caption: 'DYE · vertical'
  },
  {
    id: 'claudia-canvas',
    guid: 'e183de5b-77e6-432a-ad2b-764062367acc',
    title: 'Spotify Canvas',
    client: 'claudia-valentina',
    type: 'music',
    tag: 'Claudia Valentina · 2025',
    role: 'Director · Editor',
    music: '@claudia_valentina__',
    label: 'Canvas',
    caption: 'Claudia Valentina · Spotify Canvas'
  },
  {
    id: 'natalie-how-u-been-1',
    guid: '6f8f2d98-78dc-49d6-8576-9f6138d5e53f',
    title: 'how u been?',
    client: 'natalie-jane',
    type: 'music',
    tag: 'Natalie Jane · 2025',
    role: 'Director · DP · Editor',
    music: '@nataliejane — how u been?',
    label: 'how u been?',
    caption: 'Natalie Jane · social content for "how u been?"',
    views: '2M',
    likes: '83K'
  },
  {
    id: 'biaom-surfaces-posner',
    guid: '6b38b59e-aedd-4208-a1fc-ff85adb30021',
    title: 'Blame It All On Me',
    client: 'surfaces',
    type: 'music',
    tag: 'Surfaces x Mike Posner · 2025',
    role: 'Director · DP · Editor',
    music: '@surfaces x @mikeposner — Blame It All On Me',
    label: 'BIAOM',
    caption: 'Surfaces × Mike Posner · directed, shot & edited by Landbound'
  },
  {
    id: 'landbound-visions',
    guid: 'f8cf0b2b-02fc-4e45-8430-c3c234e1a5ea',
    title: 'Visions',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'DP · VFX',
    music: '@landbound',
    label: 'Visions',
    caption: 'Personal — VFX & cinematography'
  },
  {
    id: 'landbound-worlds',
    guid: '62c948a3-9548-4261-a408-8eadc51071bf',
    title: 'Worlds',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'DP · VFX',
    music: '@landbound',
    label: 'Worlds',
    caption: 'Personal — VFX & cinematography'
  },
  {
    id: 'natalie-how-u-been-2',
    guid: '39fe2dc1-70f2-4826-8337-407a593292ef',
    title: 'how u been? (pt. 2)',
    client: 'natalie-jane',
    type: 'music',
    tag: 'Natalie Jane · 2025',
    role: 'Director · DP · Editor',
    music: '@nataliejane — how u been?',
    label: 'how u been? 2',
    caption: 'Natalie Jane · social content for "how u been?" — part 2'
  },
  {
    id: 'landon-barker-dodge',
    guid: '85b07d51-f4b2-4ca0-b966-06f43b1a491c',
    title: 'Landon Barker × Dodge',
    client: 'landon-barker',
    type: 'commercial',
    tag: 'Landon Barker × Dodge · 2025',
    role: 'Director · Editor',
    music: '@landonasherbarker',
    label: 'Landon × Dodge',
    caption: 'Landon Barker × Dodge — brand partnership for the new EV'
  },
  // Wire Removal + Ground Doesn't Want You both anchor back to Forgive & Forget.
  // The relatedTo field surfaces as a chip in the overlay and pulls these into
  // a "Related verticals" strip under F&F on the work tab.
  {
    id: 'wire-removal-vfx',
    guid: 'f811a989-8e93-4fc1-b823-7166a3b1b100',
    title: 'Wire Removal VFX',
    client: 'landbound',
    type: 'bts',
    tag: 'Forgive & Forget · 2022',
    role: 'VFX · Editor',
    aiNote: 'No AI',
    music: '@landbound',
    label: 'Wire Removal',
    caption: 'VFX breakdown — wire removal from the short film Forgive & Forget',
    relatedTo: { type: 'film', embedId: 'oD42T1md068', label: 'Forgive & Forget' }
  },
  {
    id: 'ground-doesnt-want-you',
    guid: 'c3c54357-2567-4d6a-be29-0392a3cb682e',
    title: "The Ground Doesn't Want You",
    client: 'landbound',
    type: 'bts',
    tag: 'Forgive & Forget · 2022',
    role: 'DP',
    music: '@landbound',
    label: "Ground Doesn't Want You",
    caption: "Cinematography test footage — for the short film Forgive & Forget",
    relatedTo: { type: 'film', embedId: 'oD42T1md068', label: 'Forgive & Forget' }
  },
  {
    id: 'forgive-forget-clip',
    guid: '6381b5da-fa25-4a67-9105-0b3f6a12ff42',
    title: 'Forgive & Forget — Clip',
    client: 'landbound',
    type: 'bts',
    tag: 'Forgive & Forget · 2022',
    role: 'Director · Writer · Editor · DP · VFX Sup',
    music: '@landbound',
    label: 'F&F Clip',
    caption: 'Clip from the short film Forgive & Forget — directed, shot, edited & VFX by Landbound',
    relatedTo: { type: 'film', embedId: 'oD42T1md068', label: 'Forgive & Forget' }
  },
  {
    id: 'landbound-used-cars',
    guid: '41bc4117-5779-4d67-9ab7-21b4ec9c5948',
    title: 'Used Cars!',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'DP · VFX · Editor',
    aiNote: 'No AI',
    music: '@landbound',
    label: 'Used Cars!',
    caption: 'Personal — cinematography & VFX, no AI'
  },
  {
    id: 'landbound-people',
    guid: '56ecd563-da69-433d-ac2a-5eabb09bea69',
    title: 'People <3',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'VFX · Editor',
    aiNote: 'AI-assisted',
    music: '@landbound',
    label: 'People',
    caption: 'Personal VFX — AI-assisted'
  },
  {
    id: 'landbound-backroom',
    guid: 'f8b05921-3c9b-4c12-a31c-a7a0f987bd42',
    title: 'Backroom',
    client: 'landbound',
    type: 'edits',
    tag: 'Landbound · 2025',
    role: 'VFX · Editor',
    aiNote: 'No AI',
    music: '@landbound',
    label: 'Backroom',
    caption: 'Personal VFX — no AI'
  }
];

window.verticalThumb = function(v) {
  // Honor the override map so videos whose thumbnail.jpg 404s fall back to a
  // working poster (e.g. preview.webp).
  return window.bunnyThumb(v.guid);
};
window.verticalMp4 = function(v, quality) {
  return 'https://' + window.BUNNY.CDN + '/' + v.guid + '/play_' + (quality || '480p') + '.mp4';
};
// Short preview clip — first 5 seconds only via HTML5 media fragment.
// Browser issues byte-range requests for just that segment, much smaller payload.
window.verticalMp4Preview = function(v, quality) {
  return window.verticalMp4(v, quality) + '#t=0,5';
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

// Auto-sync: every VERTICALS entry shows up in its client's media[]. Skip if
// the same embedId is already there. Fixes Stunt Fall missing from Chloe Star
// and future-proofs every vertical → client profile linkage.
(function syncVerticalsIntoClients() {
  if (!window.VERTICALS || !window.CLIENTS) return;
  window.VERTICALS.forEach(v => {
    const c = window.clientById(v.client);
    if (!c) return;
    if (!c.media) c.media = [];
    const already = c.media.find(m => m.embedId === v.guid);
    if (already) return;
    c.media.unshift({
      type: 'video', embedId: v.guid, bunny: true,
      title: v.title, year: (v.tag.match(/\d{4}/) || [''])[0],
      tags: (v.role || '').split(' · ').concat(['Vertical'])
    });
  });
})();
