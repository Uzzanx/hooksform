import { ToastContainer } from 'react-toastify';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main className="register-page">
      <RegistrationForm />
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} />
    </main>
  );
}

export default App;
