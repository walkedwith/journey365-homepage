'use strict';
const english = {
  "skip": "Skip to content",
  "shortDraft": "Review draft · Unpublished",
  "shortNavGame": "Featured game",
  "shortNavContact": "Contact",
  "shortIndie": "Independent game studio",
  "shortIntro": "Journey365 is an indie studio that turns little discoveries in everyday life into games. A different look at an easily overlooked moment can be the beginning of a playful story. Step by step, small ideas become games that make time spent together worth remembering.",
  "studioNote": "A journey of little discoveries",
  "actualAlt": "Actual puzzle gameplay from the public Walk with Max development build",
  "actualCaption": "Actual puzzle gameplay from the public development build",
  "status": "In development",
  "shortGame": "Walk with Max is a 2D Sokoban puzzle about Max the dog helping Grandpa with yard and farm work. Think through the order of each step, solve puzzles, and tend their yard and farm together. Grandpa reacts to Max’s accomplishments from outside the puzzle, adding to their unfolding story.",
  "shortJourney": "Discover new kinds of fun in familiar everyday moments. Looking at the same scene a little differently can be the start of another story.",
  "shortDaily": "Build on small experiments and lessons, day by day. Each steady step is a chance to refine an idea and appreciate the changes that follow.",
  "shortTogether": "Every journey has its own pace, with moments when paths meet. The time spent making and enjoying games can connect, becoming memories of time shared together.",
  "shortBusiness": "Business name: 저니365 / Journey365",
  "privacyLink": "Privacy preparation checklist ↗",
  "draft": "A warmer design exploration · Unpublished review draft",
  "back": "← Back to Journey365",
  "privacyTitle": "Privacy preparation checklist",
  "privacyNotice": "This is a preparation checklist, not a final privacy policy. The game’s advertising, analytics, and other SDK configurations have not yet been confirmed.",
  "privacyIntro": "This company website contains no forms, advertising SDKs, analytics, cookies, or browser storage. All fonts and assets are served locally. Hosting access logs and their retention must be checked when a hosting provider is selected. This does not establish how the game handles data.",
  "privacyWebsiteTitle": "Before publishing the website",
  "privacyWebsite1": "Displayed business name (legal spelling requires final confirmation): 저니365 / Journey365. Official contact email: walkedwith@gmail.com. Confirm additional details approved for publication and the privacy contact.",
  "privacyWebsite2": "Confirm hosting logs, data handled, purposes, retention, recipients, and any international processing.",
  "privacyWebsite3": "If forms, embedded content, analytics, or other services are added, review their data collection and any necessary consent before enabling them.",
  "privacyGameTitle": "Before publishing a game privacy policy",
  "privacyGame1": "Inventory actual SDKs and versions: advertising, analytics, crash reports, cloud saves, and any other services.",
  "privacyGame2": "Check actual collection and sharing, identifiers, permissions, purposes, retention, deletion, recipients, and international transfers against the implementation.",
  "privacyGame3": "Confirm the intended audience and handling of children’s data, advertising settings, and consent flows where relevant.",
  "privacyGame4": "Align the final policy with the Play Data safety disclosures and prepare a working contact for requests and questions.",
  "privacyEnd": "Prepare the final policy after these facts are confirmed. Review website and game data practices separately."
};
Object.assign(english, {navAboutHome:'Studio',shortNavGame:'Game',navValuesHome:'Values',nextGame:'Meet a story in development ↓',gameLabel:'A game in development',valuesLabel:'Along the journey',contactLabel:'Say hello'});
const original = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => original.set(el, el.innerHTML));
const ariaOriginal = new Map();
document.querySelectorAll('[data-i18n-aria]').forEach(el => ariaOriginal.set(el, el.getAttribute('aria-label')));
const altOriginal = new Map();
document.querySelectorAll('[data-i18n-alt]').forEach(el => altOriginal.set(el, el.alt));
function setLanguage(lang) {
 const en = lang === 'en';
 document.documentElement.lang = en ? 'en' : 'ko';
 document.querySelectorAll('[data-i18n]').forEach(el => { const translated = english[el.dataset.i18n]; if (en && translated) el.innerHTML = translated; else el.innerHTML = original.get(el); });
 document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = en ? english[el.dataset.i18nAlt] : altOriginal.get(el); });
 document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', en ? 'Concept diagram of a Sokoban puzzle involving planning and pushing a crate. Not an actual game screenshot.' : ariaOriginal.get(el)));
 document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
 const privacy = location.pathname.endsWith('privacy-checklist.html');
 document.title = privacy ? (en ? 'Privacy preparation · Journey365' : '개인정보 안내 준비 사항 · Journey365') : (en ? 'Journey365 · Independent game studio' : 'Journey365 · 인디 게임 스튜디오');
 const description = document.querySelector('meta[name="description"]');
 if (description && !privacy) description.content = en ? 'Journey365 is a game studio making little everyday journeys. Discover Walk with Max, a 2D Sokoban puzzle game in development.' : 'Journey365(저니365)는 일상 속 작은 여정을 게임으로 만드는 스튜디오입니다. 개발 중인 2D 소코반 퍼즐 Walk with Max를 소개합니다.';
 document.querySelectorAll('a[href*="privacy-checklist.html"],a[data-i18n="back"]').forEach(el=>{ const href=new URL(el.href); href.searchParams.set('lang',lang); el.href=href.pathname+href.search; });
 const url = new URL(location.href); url.searchParams.set('lang', lang);
 try { history.replaceState(null, '', url); } catch (_) { /* File previews may disallow history updates. */ }
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ko');
