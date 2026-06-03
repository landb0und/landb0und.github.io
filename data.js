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
      { type: 'video', embedId: 'fb65780e-f6b3-4a5b-a58e-1eb1c8e0e0e8', bunny: true, title: 'CHILDSTAR: Final Act', year: '2025', tags: ['Director','EP','VFX','Editor'] }
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
    handle: '@aporro',
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
    role: 'Director',
    blurb: 'Promo session for the new record. 45 minutes, one lens.',
    palette: 'sa-3',
    thumb: null,
    media: []
  },
  {
    id: 'gym-class-heroes',
    name: 'Gym Class Heroes',
    short: 'Gym Class H.',
    handle: '@gymclassheroes',
    role: 'Director',
    blurb: 'Reunion record promo. Phase One in studio.',
    palette: 'sa-4',
    thumb: null,
    media: []
  },
  {
    id: 'surfaces',
    name: 'Surfaces',
    short: 'Surfaces',
    handle: '@surfaces',
    role: 'Director · DP · Editor',
    blurb: "Call Me When You're Home — lyric video. Dreams — anamorphic music video.",
    palette: 'sa-5',
    thumb: null,
    media: [
      { type: 'video', embedId: '8d669bba-e779-4860-84b1-ffc3055d1b96', bunny: true, title: "Call Me When You're Home", year: '2024', tags: ['Director','DP','Editor'] }
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
    role: 'Director · DP · Editor',
    blurb: 'Press portraits, tour stills, behind-the-scenes work.',
    palette: 'sa-2',
    thumb: null,
    media: []
  },
  {
    id: 'sony-rca',
    name: 'Sony / RCA',
    short: 'Sony/RCA',
    handle: 'Label partner',
    role: 'Director · DP',
    blurb: 'Multiple artist projects through Sony / RCA.',
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
  }
];

// Pick the best available thumbnail for a client. Falls back to first video
// thumbnail, then first photo, then null (so story circles show initials).
window.clientThumb = function(c) {
  if (c.thumb) return c.thumb;
  // Prefer a photo (we have its URL) over a video (Bunny thumbnails need a hashed CDN host we don't know yet).
  const firstPhoto = c.media.find(m => m.type === 'photo');
  if (firstPhoto) return firstPhoto.src;
  const firstVid = c.media.find(m => m.type === 'video');
  if (firstVid) {
    // Bunny thumb hostname is library-specific; until we know it, fall back to null and show initials.
    if (firstVid.bunny) return null;
    return 'https://img.youtube.com/vi/' + firstVid.embedId + '/maxresdefault.jpg';
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
