

const TeacherArray = [
    {
        language: 'Polish',
        flag: 'https://flagcdn.com/48x36/pl.png',
        native: true,
        name: 'Dawid Czaskowski',
        experience: '5 years',
        country: 'Poland',
        price: 17,
        time: 'morning evening',
        days: ['Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat ', 'Sun '],
        reviews: '50',
        rating: 5,
        id: 0,
    },
    {
        language: 'French',
        flag: 'https://flagcdn.com/48x36/fr.png',
        native: true,
        name: 'Gilles Simon',
        experience: '2 years',
        country: 'France',
        price: 15,
        time: 'morning afternoon evening',
        days: ['Mon ', 'Thu ', 'Fri ', 'Sat '],
        reviews: '32',
        rating: 4.6,
        id: 1
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/ar.png',
        native: true,
        name: 'David Ferrer',
        experience: '1 year',
        country: 'Argentina',
        price: 14,
        time: 'morning',
        days: ['Sat ', 'Sun '],
        reviews: '5',
        rating: 5,
        id: 2
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/es.png',
        native: true,
        name: 'Feliciano Lopez',
        experience: '10 years',
        country: 'Spain',
        price: 45,
        time: 'evening',
        days: ['Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat ', 'Sun '],
        reviews: '78',
        rating: 5,
        id: 3
    },
    {
        language: 'Russian',
        flag: 'https://flagcdn.com/48x36/ru.png',
        native: true,
        name: 'Daniil Medvedev',
        experience: '3 years',
        country: 'Russia',
        price: 20,
        time: 'afternoon',
        days: ['Mon ', 'Tue ', 'Thu ', 'Fri'],
        reviews: '27',
        rating: 4,
        id: 4
    },
    {
        language: 'Russian',
        flag: 'https://flagcdn.com/48x36/ua.png',
        native: true,
        name: 'Sergiy Stakhovsky',
        experience: '3 years',
        country: 'Ukraine',
        price: 10,
        time: 'afternoon evening',
        days: ['Mon ', 'Tue ', 'Wed'],
        reviews: '15',
        rating: 4.8,
        id: 5
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/it.png',
        native: false,
        name: 'Lorenzo Gutti',
        experience: '3 years',
        country: 'Italy',
        price: 13,
        time: 'morning afternoon evening',
        days: ['Sat ', 'Sun '],
        reviews: '14',
        rating: 4.6,
        id: 6
    },
    {
        language: 'Polish',
        flag: 'https://flagcdn.com/48x36/pl.png',
        native: true,
        name: 'Zbigniew Glik',
        experience: '5 years',
        country: 'Poland',
        price: 9,
        time: 'morning afternoon',
        days: ['Mon ', 'Tue ', 'Wed', 'Thu'],
        reviews: '35',
        rating: 5,
        id: 7
    },
    {
        language: 'Polish',
        flag: 'https://flagcdn.com/48x36/ru.png',
        native: false,
        name: 'Yuri Gavralov',
        experience: '1 year',
        country: 'Russia',
        price: 10,
        time: 'evening',
        days: ['Tue ', 'Wed', 'Thu'],
        reviews: '7',
        rating: 5,
        id: 8
    },
    {
        language: 'Polish',
        flag: 'https://flagcdn.com/48x36/pl.png',
        native: true,
        name: 'Hubert Hurkacz',
        experience: '1 year',
        country: 'Poland',
        price: 8,
        time: 'evening',
        days: ['Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri '],
        reviews: '6',
        rating: 4,
        id: 9,
    },
    {
        language: 'Polish',
        flag: 'https://flagcdn.com/48x36/pl.png',
        native: true,
        name: 'Iga Swiatek',
        experience: '4 years',
        country: 'Poland',
        price: 15,
        time: 'afternoon evening',
        days: ['Thu ', 'Fri ', 'Sat ', 'Sun '],
        reviews: '39',
        rating: 4.8,
        id: 10,
    },
    {
        language: 'French',
        flag: 'https://flagcdn.com/48x36/fr.png',
        native: true,
        name: 'Sophie Moreau',
        experience: '2 years',
        country: 'France',
        price: 20,
        time: 'morning',
        days: ['Mon ', 'Fri ', 'Sat '],
        reviews: '16',
        rating: 4.6,
        id: 11
    },
    {
        language: 'French',
        flag: 'https://flagcdn.com/48x36/ch.png',
        native: true,
        name: 'Amélie Bernard',
        experience: '10 years',
        country: 'Switzerland',
        price: 17,
        time: 'morning afternoon evening',
        days: ['Mon ', 'Tue ', 'Wed ', 'Sun '],
        reviews: '67',
        rating: 5,
        id: 12
    },
    {
        language: 'French',
        flag: 'https://flagcdn.com/48x36/it.png',
        native: false,
        name: 'Simone Bolelli',
        experience: '2 years',
        country: 'France',
        price: 13,
        time: 'afternoon evening',
        days: ['Sat ', 'Sun '],
        reviews: '23',
        rating: 5,
        id: 13
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/es.png',
        native: true,
        name: 'Carmen Garcia',
        experience: '3 years',
        country: 'Spain',
        price: 13,
        time: 'morning afternoon',
        days: ['Tue ', 'Wed ', 'Thurs', 'Fri'],
        reviews: '31',
        rating: 5,
        id: 14
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/ar.png',
        native: true,
        name: 'Maria Rodriguez',
        experience: '1 year',
        country: 'Argentina',
        price: 15,
        time: 'morning, evening',
        days: ['Mon ', 'Tue '],
        reviews: '8',
        rating: 4.5,
        id: 15
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/it.png',
        native: false,
        name: 'Federica Ferrara',
        experience: '3 years',
        country: 'Italy',
        price: 15,
        time: 'morning, evening',
        days: ['Mon ', 'Tue '],
        reviews: '20',
        rating: 5,
        id: 16
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/es.png',
        native: true,
        name: 'Carlos Alcaraz',
        experience: '8 years',
        country: 'Spain',
        price: 19,
        time: 'morning, afternoon, evening',
        days: ['Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat ', 'Sun '],
        reviews: '60',
        rating: 4.3,
        id: 17
    },
    {
        language: 'Spanish',
        flag: 'https://flagcdn.com/48x36/es.png',
        native: true,
        name: 'Rafa Nadal',
        experience: '4 years',
        country: 'Spain',
        price: 13,
        time: 'afternoon, evening',
        days: ['Mon ', 'Fri ', 'Sat ', 'Sun '],
        reviews: '32',
        rating: 4.5,
        id: 18
    },
    {
        language: 'Italian',
        flag: 'https://flagcdn.com/48x36/it.png',
        native: true,
        name: 'Francesca Moretti',
        experience: '4 years',
        country: 'Italy',
        price: 22,
        time: 'morning, afternoon, evening',
        days: ['Thu ', 'Fri ', 'Sat ', 'Sun '],
        reviews: '33',
        rating: 4.7,
        id: 19
    },
    {
        language: 'Italian',
        flag: 'https://flagcdn.com/48x36/it.png',
        native: true,
        name: 'Giulia Ricci',
        experience: '2 years',
        country: 'Italy',
        price: 12,
        time: 'afternoon, evening',
        days: ['Mon ', 'Fri ', 'Sat'],
        reviews: '15',
        rating: 5,
        id: 20
    },
    {
        language: 'Italian',
        flag: 'https://flagcdn.com/48x36/it.png',
        native: true,
        name: 'Matteo Bianchi',
        experience: '1 years',
        country: 'Italy',
        price: 7,
        time: 'morning, afternoon',
        days: ['Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat '],
        reviews: '4',
        rating: 5,
        id: 21
    },
    {
        language: 'German',
        flag: 'https://flagcdn.com/48x36/de.png',
        native: true,
        name: 'Hannah Schäfer',
        experience: '25 years',
        country: 'Germany',
        price: 25,
        time: 'morning, evening',
        days: ['Mon ', 'Tue ', 'Wed ', 'Sun'],
        reviews: '130',
        rating: 4.8,
        id: 22
    },
    {
        language: 'German',
        flag: 'https://flagcdn.com/48x36/at.png',
        native: true,
        name: 'Lukas Schumacher',
        experience: '6 years',
        country: 'Austria',
        price: 14,
        time: 'morning, afternoon, evening',
        days: ['Wed ', 'Thu', 'Fri'],
        reviews: '40',
        rating: 5,
        id: 23
    },
    {
        language: 'German',
        flag: 'https://flagcdn.com/48x36/de.png',
        native: true,
        name: 'Markus Schneider',
        experience: '4 years',
        country: 'Germany',
        price: 17,
        time: 'afternoon, evening',
        days: ['Mon ', 'Wed', 'Sat'],
        reviews: '28',
        rating: 4.5,
        id: 24
    },
    {
        language: 'German',
        flag: 'https://flagcdn.com/48x36/de.png',
        native: true,
        name: 'Lisa Koch',
        experience: '2 years',
        country: 'Germany',
        price: 12,
        time: 'afternoon',
        days: ['Mon ', 'Tue', 'Wed'],
        reviews: '15',
        rating: 4.8,
        id: 25
    },
    {
        language: 'German',
        flag: 'https://flagcdn.com/48x36/de.png',
        native: true,
        name: 'Julia Fischer',
        experience: '5 years',
        country: 'Germany',
        price: 15,
        time: 'evening',
        days: ['Sat ', 'Sun '],
        reviews: '30',
        rating: 5,
        id: 26
    },
    {
        language: 'Japanese',
        flag: 'https://flagcdn.com/48x36/jp.png',
        native: true,
        name: 'Takashi Tanaka',
        experience: '10 years',
        country: 'Japan',
        price: 30,
        time: 'evening',
        days: ['Thu', 'Fri', 'Sat ', 'Sun'],
        reviews: '45',
        rating: 4.7,
        id: 27
    },
    {
        language: 'Japanese',
        flag: 'https://flagcdn.com/48x36/jp.png',
        native: true,
        name: 'Ayumi Takahashi',
        experience: '1 year',
        country: 'Japan',
        price: 8,
        time: 'morning, afternoon, evening',
        days: ['Fri', 'Sat ', 'Sun'],
        reviews: '4',
        rating: 5,
        id: 28
    },
]

export default TeacherArray