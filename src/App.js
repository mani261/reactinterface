import './App.css';
import { BiArchive } from 'react-icons/bi'
import SearchFeild from './components/SearchFeild';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import appDataList from './data.json';

function App() {
  return (
    <div className="App p-5">
      <header className="App-header">
        
        <h1 className='text-3xl font-bold py-8 text-center'><BiArchive className='text-red-400 inline-block mx-1' />Your Appointment</h1>

        <AddAppointment />
        <SearchFeild />

      </header>

      <ul className='divide-y divide-gray-200 m-3'>
        {appDataList.map(appointment => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>

    </div>
  );
}

export default App;
