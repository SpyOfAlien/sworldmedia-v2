import React, { FC, useMemo } from 'react';
import { ThemeProvider } from 'next-themes';

interface IUIState {
  displayModal: boolean;
  modalView: string;
}

const initialState: IUIState = {
  displayModal: false,
  modalView: '',
};

type MODAL_VIEWS =
  | 'BRAND_COMMUNICATION'
  | 'BRANDING'
  | 'PRODUCTION'
  | 'INTERNAL_RELATION'
  | 'EVENT'
  | 'MENU';

type Action =
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: MODAL_VIEWS;
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
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      };
    }
  }
};

const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(UIReducer, initialState);

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });
  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_MODAL_VIEW', view });

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
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
