import Form from "./components/Form"
import { Toaster } from "react-hot-toast"

function App() {

    return (
        <>
            <Form />
            <Toaster toastOptions={{ style: { padding: '1rem', fontSize: '1.25rem', borderRadius: '0.5rem' }}} />
        </>
    )
}

export default App
