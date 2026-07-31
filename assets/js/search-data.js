// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught in the last 5 years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-past-news",
          title: "past news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-i-m-starting-a-new-position-as-vice-president-of-the-board-at-portuguese-public-finance-council",
          title: 'I’m starting a new position as Vice-president of the Board at Portuguese Public...',
          description: "",
          section: "News",},{id: "news-new-working-paper-out-are-incentives-for-energy-retrofitting-regressive-evidence-from-the-italian-superbonus-and-ecobonus-with-e-giarda-and-s-sommer-read-it-on-ssrn",
          title: 'New working paper out: Are Incentives for Energy Retrofitting Regressive? Evidence from the...',
          description: "",
          section: "News",},{id: "news-presented-prometeia-s-quarterly-brief-on-the-italian-and-global-economy-on-march-27-2026-discussion-of-growth-inflation-and-geopolitical-risks-against-a-backdrop-of-elevated-uncertainty",
          title: 'Presented Prometeia’s Quarterly Brief on the Italian and global economy on March 27...',
          description: "",
          section: "News",},{id: "news-interview-with-italypost-on-why-economic-forecasts-of-italian-gdp-have-often-been-imprecise-since-2021-and-how-to-read-them-as-conditional-scenarios-rather-than-crystal-balls",
          title: 'Interview with ItalyPost on why economic forecasts of Italian GDP have often been...',
          description: "",
          section: "News",},{id: "news-new-working-paper-draft-completed-when-stablecoins-meet-treasury-scarcity-global-spillovers-from-dollar-settlement-the-paper-develops-a-two-country-dsge-model-of-how-usd-stablecoin-settlement-backed-by-a-scarce-supply-of-short-term-us-treasuries-opens-a-new-channel-of-international-macroeconomic-spillovers-read-the-draft",
          title: 'New working paper draft completed: When Stablecoins Meet Treasury Scarcity — Global Spillovers...',
          description: "",
          section: "News",},{id: "news-new-publication-out-optimal-climate-and-monetary-fiscal-policies-in-a-climate-dsge-framework-with-mehrab-kiarsi-energy-economics-2026-read-it-on-sciencedirect",
          title: 'New publication out: Optimal climate and monetary–fiscal policies in a climate-DSGE framework, with...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
