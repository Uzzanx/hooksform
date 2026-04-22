import { ToastContainer } from 'react-toastify';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main className="register-page">
      <RegistrationForm />
      <ToastContainer autoClose={2000} />
    </main>
  );
}

export default App;
