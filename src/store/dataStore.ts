import { defineStore } from 'pinia';

export const useDataStore = defineStore({
  id: 'app-data',
  state: () => ({
    navTitles: [
      {
        title: 'Home',
        route: '/home'
      },
      {
        title: 'What we do',
        route: '/what-we-do'
      },
      {
        title: 'The digital divide',
        route: '/digital-divide'
      },
      {
        title: 'Get involved',
        route: '/get-involved'
      },
      {
        title: 'Out network',
        route: '/out-network'
      },
      {
        title: 'Insights',
        route: '/in-sights'
      }
    ],
    dashboardTitles: [
      'Get online week 2021',
      'We\'re a social change charity, helping people to improve their lives through digital.',
      'How can we help you?',
      'What do we do?'
    ],
    dashboardExcerpts: [
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
      + `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown`
      + `printer took a galley of type and scrambled it to make a type specimen book.`,
      `We tackle the most pressing issues of our time, working with partners in thousands of communities`
      + `across the UK and further afield.`,
      `Let us know who you are and what you're looking for, and we'll help get you to the right place.`,
      `You might not have heard of us, but we're the people behind the following impactful programmes.`
    ],
    dashboardBlockBackgrounds: [
      `https://www.goodthingsfoundation.org/wp-content`
      + `/uploads/2023/10/Website-banners-Canva-Banner-2.png`,
      `https://www.goodthingsfoundation.org/wp-content/uploads/2023/06/CM10009-scaled.jpg`
    ],
    personOptions: [
      'an individual',
      'researcher',
      'community organization'
    ],
    digitalInitiatorOptions: [
      'want to learn',
      'want to help',
      'work for you',
      'want to learn about the digital divide',
      'donate'
    ],
    services: [
      'Get online work',
      'Learn my way',
      'Make it click',
      'Digital you'
    ]
  })
});