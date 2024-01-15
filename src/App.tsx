import React, { useEffect } from 'react';
import PortalComponentExample from './components/portal/PortalComponent';
import ForwardRefComponentExample from './components/forward-refs/ForwardRefComponent';

function App() {
    return (
        <>
            {/* To test the selected functionality, install a specific 
            component here */}
            <ForwardRefComponentExample />
        </>
    );
}

export default App;
