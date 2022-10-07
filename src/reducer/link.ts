import {
  FETCH_LINKS_BEGIN,
  FETCH_LINKS_SUCCESS,
  FETCH_LINKS_FAILURE,
  CHECK_ALIAS_BEGIN,
  CHECK_ALIAS_FAILURE,
  CHECK_ALIAS_SUCCESS,
  CREATE_LINK_BEGIN,
  CREATE_LINK_SUCCESS,
  CREATE_LINK_FAILURE,
} from "../action/shortlink";

const initialState = {
  isLoading: false,
  links: [],
  checking: false,
  aliasAvailable: false,
  processing: false,
  latestShortLink: "",
};

export default function linkReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_LINKS_BEGIN:
      return {
        ...state,
        isLoading: true,
        links: [],
      };

    case FETCH_LINKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        links: action.data,
      };

    case FETCH_LINKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        links: [],
      };

    case CHECK_ALIAS_BEGIN:
      return {
        ...state,
        checking: true,
        aliasAvailable: false,
      };

    case CHECK_ALIAS_FAILURE:
      return {
        ...state,
        checking: false,
        aliasAvailable: false,
      };

    case CHECK_ALIAS_SUCCESS:
      return {
        ...state,
        checking: false,
        aliasAvailable: action.data,
      };

    case CREATE_LINK_BEGIN:
      return {
        ...state,
        processing: true,
        latestShortLink: "",
      };

    case CREATE_LINK_SUCCESS:
      return {
        ...state,
        processing: false,
        latestShortLink: action.data,
      };

    case CREATE_LINK_FAILURE:
      return {
        ...state,
        processing: false,
        aliasAvailable: "",
      };

    default:
      return state;
  }
}
