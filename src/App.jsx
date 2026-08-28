import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import "./App.css";

function App() {
    const [selectedView, setSelectedView] = useState("notes");

    return (
        <div className="app-container">
            <Header />

            <div className="app-body">
                <Sidebar
                    selectedView={selectedView}
                    onViewChange={setSelectedView}
                />

                <MainContent selectedView={selectedView} />
            </div>
        </div>
    );
}

export default App;