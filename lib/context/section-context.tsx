import React, { FC, useMemo } from 'react';
import { ThemeProvider } from 'next-themes';

interface ISectionState {
  currentSection: number;
}

const initialState: ISectionState = {
  currentSection: 1,
};

type Action =
  | {
      type: 'SCROLL_UP';
    }
  | {
      type: 'SCROLL_DOWN';
    }
  | {
      type: 'SET_PAGE_SECTION';
      payload: number;
    };

export const SectionContext =
  React.createContext<ISectionState | any>(initialState);

const sectionReducer = (state: ISectionState, action: Action) => {
  switch (action.type) {
    case 'SCROLL_UP':
      return {
        ...state,
        currentSection:
          state.currentSection > 1
            ? state.currentSection - 1
            : state.currentSection,
      };

    case 'SCROLL_DOWN':
      return {
        ...state,
        currentSection:
          state.currentSection < 7
            ? state.currentSection + 1
            : state.currentSection,
      };
    case 'SET_PAGE_SECTION':
      return {
        ...state,
        currentSection: action.payload,
      };
  }
};

const SectionProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(sectionReducer, initialState);

  const onScrollUp = () => dispatch({ type: 'SCROLL_UP' });
  const onScrollDown = () =>
    dispatch({
      type: 'SCROLL_DOWN',
    });
  const onSetSection = (payload) =>
    dispatch({
      type: 'SET_PAGE_SECTION',
      payload,
    });

  const value = useMemo(
    () => ({
      ...state,
      onScrollUp,
      onScrollDown,
      onSetSection,
    }),
    [state]
  );

  return <SectionContext.Provider value={value} {...props} />;
};

export const useSection = () => {
  const context = React.useContext(SectionContext);
  if (context === undefined) {
    throw new Error(`useSection must be used within a SectionProvider`);
  }
  return context;
};

export const SectionManager = ({ children }) => (
  <SectionProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </SectionProvider>
);
