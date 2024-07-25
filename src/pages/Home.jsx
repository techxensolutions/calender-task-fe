import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [todo, setTodo] = useState('');


  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setModalIsOpen(true);
  };

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmitTodo = () => {
    // Handle todo submission logic here
    console.log('Todo:', todo, 'Time:', selectedSlot);
    setModalIsOpen(false);
    setTodo('');
  };

  return (
    <div>
      <nav className="bg-red-400 p-4 flex justify-between items-center">
        <div className="text-white text-xl">My Calendar App</div>
        <div>
          <Link 
            to={'/logout'}
            className="bg-white text-red-400 px-4 py-2 rounded">
            Logout
          </Link>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-2xl !mb-12 mt-8 font-semibold">Welcome to your Calendar</h1>
        <div className="w-11/12 h-92">
          <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            style={{ height: 500 }}
          />
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/3">
            <h2 className="text-xl mb-4">Add Todo</h2>
            <input
              type="text"
              value={todo}
              onChange={handleTodoChange}
              className="w-full p-2 mb-4 border rounded"
              placeholder="Enter your todo"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSubmitTodo}
                className="bg-red-400 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setModalIsOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
