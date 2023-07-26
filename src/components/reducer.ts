interface State {
    inputText: string;
    maxPrice: number;
    teacherBirthCountry: string;
    timeAvailable: string;
    daysAvailable: string;
    isPriceRangeVisible: boolean;
    isBirthCountryVisible: boolean;
    isAvailabilityVisible: boolean;
    grayedOut: boolean;
    flippedCards: number[];
    displayedTeachers: number;
}

type Action =
    | { type: 'SET_INPUT_TEXT'; payload: string }
    | { type: 'SET_MAX_PRICE'; payload: number }
    | { type: 'SET_TEACHER_BIRTH_COUNTRY'; payload: string }
    | { type: 'SET_TIME_AVAILABLE'; payload: string }
    | { type: 'SET_DAYS_AVAILABLE'; payload: string }
    | { type: 'SET_IS_PRICE_RANGE_VISIBLE'; payload: boolean }
    | { type: 'SET_IS_BIRTH_COUNTRY_VISIBLE'; payload: boolean }
    | { type: 'SET_IS_AVAILABILITY_VISIBLE'; payload: boolean }
    | { type: 'SET_GRAYED_OUT'; payload: boolean }
    | { type: 'SET_FLIPPED_CARDS'; payload: number[] }
    | { type: 'SET_DISPLAYED_TEACHERS'; payload: number };


const initialState: State = {
    inputText: '',
    maxPrice: 50,
    teacherBirthCountry: '',
    timeAvailable: '',
    daysAvailable: '',
    isPriceRangeVisible: false,
    isBirthCountryVisible: false,
    isAvailabilityVisible: false,
    grayedOut: false,
    flippedCards: [],
    displayedTeachers: 5,
};


const reducer = (state: State, action: Action): State => {
    console.log(state.isAvailabilityVisible)
    switch (action.type) {
        case 'SET_INPUT_TEXT':
            return { ...state, inputText: action.payload };
        case 'SET_MAX_PRICE':
            return { ...state, maxPrice: action.payload };
        case 'SET_TEACHER_BIRTH_COUNTRY':
            return { ...state, teacherBirthCountry: action.payload };
        case 'SET_TIME_AVAILABLE':
            return { ...state, timeAvailable: action.payload };
        case 'SET_DAYS_AVAILABLE':
            return { ...state, daysAvailable: action.payload };
        case 'SET_IS_PRICE_RANGE_VISIBLE':
            return { ...state, isPriceRangeVisible: action.payload };
        case 'SET_IS_BIRTH_COUNTRY_VISIBLE':
            return { ...state, isBirthCountryVisible: action.payload };
        case 'SET_IS_AVAILABILITY_VISIBLE':
            return { ...state, isAvailabilityVisible: action.payload };
        case 'SET_GRAYED_OUT':
            return { ...state, grayedOut: action.payload };
        case 'SET_FLIPPED_CARDS':
            return { ...state, flippedCards: action.payload };
        case 'SET_DISPLAYED_TEACHERS':
            return { ...state, displayedTeachers: action.payload };
        default:
            return state;
    }
};

export { initialState, reducer };
