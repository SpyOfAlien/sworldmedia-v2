import React, { FC, useMemo } from 'react';
import { ThemeProvider } from 'next-themes';

interface IUIState {
  displayModal: boolean;
  displaySubModal: boolean;
  modalView: string;
  subModalView: string;
  confirm: any;
}

const initialState: IUIState = {
  displayModal: false,
  displaySubModal: false,
  modalView: '',
  subModalView: '',
  confirm: {},
};

type MODAL_VIEWS =
  | 'BRAND_COMMUNICATION'
  | 'BRANDING'
  | 'PRODUCTION'
  | 'INTERNAL_RELATION'
  | 'EVENT'
  | 'MENU'
  | 'BRANDING_CONCEPT'
  | 'BRANDING_IDENTITY'
  | 'BRANDING_STRATEGY'
  | 'BRANDING_COMMUNICATION_PR'
  | 'BRANDING_COMMUNICATION_SOCIAL'
  | 'BRANDING_COMMUNICATION_KOL'
  | 'BRANDING_COMMUNICATION_MARKETING'
  | 'PRODUCTION_CLIENT'
  | 'PRODUCTION_FORMAT'
  | 'EVENT_ONLINE'
  | 'EVENT_OFFLINE'
  | 'INTERNATIONAL_RELATION_FOR_VN'
  | 'INTERNATIONAL_RELATION_FOR_FOREIGN'
  | 'INTERNATIONAL_RELATION_FOR_VN_INTERNATIONAL'
  | 'CONFIRM_MODAL';

type Action =
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'OPEN_SUB_MODAL';
    }
  | {
      type: 'CLOSE_SUB_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: MODAL_VIEWS;
    }
  | {
      type: 'SET_SUB_MODAL_VIEW';
      view: MODAL_VIEWS;
    }
  | {
      type: 'SET_CONFIRM_DATA';
      confirm: any;
    };

export const UIContext = React.createContext<IUIState | any>(initialState);

const UIReducer = (state: IUIState, action: Action) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
      };
    }
    case 'OPEN_SUB_MODAL': {
      return {
        ...state,
        displaySubModal: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'CLOSE_SUB_MODAL': {
      return {
        ...state,
        displaySubModal: false,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case 'SET_SUB_MODAL_VIEW': {
      return {
        ...state,
        subModalView: action.view,
      };
    }
    case 'SET_CONFIRM_DATA': {
      return {
        ...state,
        confirm: action.confirm,
      };
    }
  }
};

const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(UIReducer, initialState);

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });
  const openSubModal = () => dispatch({ type: 'OPEN_SUB_MODAL' });
  const closeSubModal = () => dispatch({ type: 'CLOSE_SUB_MODAL' });
  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_MODAL_VIEW', view });
  const setSubModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_SUB_MODAL_VIEW', view });
  const setConfirmData = (confirm: any) =>
    dispatch({ type: 'SET_CONFIRM_DATA', confirm });

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
      openSubModal,
      closeSubModal,
      setSubModalView,
      setConfirmData,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const UIManager = ({ children }) => (
  <UIProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UIProvider>
);
