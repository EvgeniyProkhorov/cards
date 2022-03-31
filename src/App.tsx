import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import {Login} from "./Components/Login/Login";
import {NewPassword} from "./Components/NewPasswordInput/NewPasswordIput";
import {PageNotFound} from "./Components/PageNotFound/PageNotFound";
import {PasswordRecovery} from "./Components/PasswordRecovery/PasswordRecovery";
import {Profile} from "./Components/Profile/Profile";
import {Registration} from "./Components/Registration/Registration";
import {TestComponent} from "./Components/TestComponent/TestComponent";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/new-password'} element={<NewPassword/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                    <Route path={'/pass-recovery'} element={<PasswordRecovery/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/test-components'} element={<TestComponent/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
