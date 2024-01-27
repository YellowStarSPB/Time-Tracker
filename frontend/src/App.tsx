import { useState } from 'react';
import Field from './components/Field/Field';

function App() {
    return (
        <>
            <h1>started page</h1>
            <Field className="field" type="tel" name="tel" placeholder="Телефон" />
        </>
    );
}

export default App;
