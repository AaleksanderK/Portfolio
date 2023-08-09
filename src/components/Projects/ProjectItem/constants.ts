import pinterest from '../../../assets/projects/pinterest.jpg'
import pixema from '../../../assets/projects/pixema.jpg'
import blogofolio from '../../../assets/projects/blogofolio.jpg'

export interface projectType  {
    id?: number;
    image: string ;
    title: string
    subtitle?: string
    description: string
    link_project: string
    link_code: string
};

export const Data = [
   
    {
        id: 1,
        image: blogofolio,
        title: 'BlogoFolio',
        description: 'This application is a user-centric post viewing platform that allows users to register and login, create and rate posts, and add them to their favorites. The application also offers a search feature and the ability to switch between themes.',
        link_project: 'https://aaleksanderk.github.io/BlogoFolio/',
        link_code: 'https://github.com/AaleksanderK/BlogoFolio',
    },   {
        id: 2,
        image: pixema,
        title: 'Pixema',
        description: 'The application was created in React, TypeScript, Redux-saga. SCSS was used for styling. The application contains: Authorization, Pagination, API, React Slider.',
        link_project: 'https://imaginative-blancmange-568f0d.netlify.app',
        link_code: 'https://github.com/AaleksanderK/Pixema-Graduation-Project/tree/master',
    },   {
        id: 3,
        image: pinterest,
        title: 'Pinterest Clone',
        description: 'The application was created in JavaScript using the modular component approach. The SASS preprocessor was used for styling. Adaptive responsive design was implemented using media queries and flexbox technology. The project was created using Webpack.',
        link_project: 'https://aaleksanderk.github.io/Pinterest-project/',
        link_code: 'https://github.com/AaleksanderK/Pinterest-project/tree/master',
    },
]