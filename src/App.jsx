import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import StoreProvider from "./context/AppContext";

function App() {
    return (
        <StoreProvider>
            <MainLayout />
        </StoreProvider>
    );
}

export default App;
