import { configure } from 'mobx';
import { useLocalStore } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import React, { createContext, useContext } from 'react';
import appStore from './Stores/AppStore';

configure({ enforceActions: 'always' });

const StateContext = createContext();

const useGlobalState = () => useContext(StateContext);

const StateProvider = ({ children }) => {

    const appStoreValue = useLocalStore(() => appStore);

    return (
        <StateContext.Provider value={appStoreValue} >
            {children}
        </StateContext.Provider>
    )
}



export { StateProvider, useGlobalState as default };

