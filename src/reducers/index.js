import AboutMe from "../components/apps/AboutMe"
import AirDrawing from "../components/apps/AirDrawing"
import Connect4 from "../components/apps/Connect4"
import CropAnalysis from "../components/apps/CropAnalysis"
import Crypto0x from "../components/apps/Crypto0x"
import CV from "../components/apps/CV"
import EmergencyApp from "../components/apps/EmergencyApp"
import FoodOrdering from "../components/apps/FoodOrdering"
import HTMLWireframe from "../components/apps/HTMLWireframe"
import JobPicker from "../components/apps/JobPicker"
import MoviePicker from "../components/apps/MoviePicker"
import ProgrammingLanguageAnalysis from "../components/apps/ProgrammingLanguageAnalysis"
import QuestionBank from "../components/apps/QuestionBank"
import RecipePicker from "../components/apps/RecipePicker"
import Resume from "../components/apps/Resume"
import StoryGenerator from "../components/apps/StoryGenerator"


const initialState = {
    startMenuState: false,
    currentViewApp: null,
    appOpenQueue:[],
    lastMaxAppIndex: 1000,
    nextWindowPosition: [100, 40],
    appStatusState: [...new Array(100).fill(0)],
    windowStatusList: [...new Array(100).fill(0)],
    apps: [
        {
            id: 1,
            name: 'About Me',
            icon: 'team',
            exe: <AboutMe />,
            windowPos: []
        },
        {
            id: 2,
            name: 'Air Drawing',
            icon: 'stylus',
            exe: <AirDrawing />,
            windowPos: []
        },
        {
            id: 3,
            name: 'Connect 4',
            icon: 'connect4',
            exe: <Connect4 />,
            windowPos: []
        },
        {
            id: 4,
            name: 'Crop Analysis',
            icon: 'farming',
            exe: <CropAnalysis />,
            windowPos: []
        },
        {
            id: 5,
            name: '0xCrypto',
            icon: 'crypto',
            exe: <Crypto0x />,
            windowPos: []
        },
        {
            id: 7,
            name: 'Emergency App',
            icon: 'emergency',
            exe: <EmergencyApp />,
            windowPos: []
        },
        {
            id: 8,
            name: 'Food Ordering App',
            icon: 'menu',
            exe: <FoodOrdering />,
            windowPos: []
        },
        {
            id: 9,
            name: 'Coversion of HTML wireframes to websites',
            icon: 'wireframe',
            exe: <HTMLWireframe />,
            windowPos: []
        },
        {
            id: 10,
            name: 'Job Picker App',
            icon: 'suitcase',
            exe: <JobPicker />,
            windowPos: []
        },
        {
            id: 11,
            name: 'Movie Picker App',
            icon: 'cinema',
            exe: <MoviePicker />,
            windowPos: []
        },
        {
            id: 12,
            name: 'Programming Language Analysis and Recommender System',
            icon: 'networking',
            exe: <ProgrammingLanguageAnalysis />,
            windowPos: []
        },
        {
            id: 13,
            name: 'Detecting Similar Questions in a question bank',
            icon: 'question',
            exe: <QuestionBank />,
            windowPos: []
        },
        {
            id: 14,
            name: 'Recipe Picker App',
            icon: 'recipe',
            exe: <RecipePicker />,
            windowPos: []
        },
        {
            id: 15,
            name: 'Resume',
            icon: 'cv',
            exe: <Resume />,
            windowPos: []
        },
        {
            id: 16,
            name: 'Story Book Generator',
            icon: 'fairytale',
            exe: <StoryGenerator />,
            windowPos: []
        },
    ]
}



function modifyAppState(appList, appID, state) {
    if (state > 0) {
        if (appList[appID] <= 0) {
            appList[appID] = Math.max(...appList) + 1
        }
    }
    else if (state < 0) {
        appList[appID] = -1
    }
    else {
        appList[appID] = 0
    }
    return [...appList]
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_MENU_TOGGLE':
            state = { ...state, startMenuState: !state.startMenuState }
            return state
        case 'BRING_APP_TO_FRONT':
            state = { ...state, apps: modifyAppState(state.apps, action.openID, 'MINIMIZE_APP') }
            return state
        case 'SET_CURRENT_APP_VIEW':
            state = { ...state, currentViewApp: action.appID }
            return state
        case 'MINIMIZE_APP':
            console.log(action)
            state = { ...state, appStatusState: modifyAppState(state.appStatusState, action.minimizeID, -1) }
            let indOf = state.appStatusState.indexOf(Math.max(...state.appStatusState))
            state = {...state,currentViewApp:indOf}
            return state
        case 'OPEN_APP':
            state = { ...state, appStatusState: modifyAppState(state.appStatusState, action.openID, 1), lastMaxAppIndex: state.lastMaxAppIndex + 1, currentViewApp: action.openID }

            state = {...state,appOpenQueue: state.appOpenQueue.indexOf(action.openID) !== -1 ? state.appOpenQueue : [...state.appOpenQueue,action.openID]}
            return state
        case 'SET_WINDOW_POS':
            let app = state.apps.filter(app => app.id === action.appId)[0]
            app = { ...app, windowPos: action.pos }
            let appList = state.apps.filter(app => app.id !== action.appId)
            state = { ...state, apps: [...appList, app] }
            return state
        case 'CLOSE_APP':
            state = { ...state, appStatusState: modifyAppState(state.appStatusState, action.closeID, 0) }
            let modifiedAppOpenQueue = state.appOpenQueue.filter(app => app.id !== action.closeID)
            state = {...state,appOpenQueue:[...modifiedAppOpenQueue]}
            return state
        case 'MARK_APP_WINDOW_POSITION':
            state = { ...state, windowStatusList: modifyAppState(state.windowStatusList, action.appID, action.position) }
            break
        default:
            return state
    }
}