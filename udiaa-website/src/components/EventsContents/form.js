 {/* 
import React, {useState, useEffect} from "react";

const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    explanation: '',
  });

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [...events, { ...newEvent, id: events.length + 1 }];
    setEvents(updatedEvents);
  };

const form =()=> {
   return (
        <div>
       <h1>Event Page</h1>
            <div>
            <h2>Add New Event</h2>
            <form>
                <div>
                <label>Event Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                />
                </div>
                <div>
                <label>Date:</label>
                <input
                    type="text"
                    name="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
                </div>
                <div>
                <label>Time:</label>
                <input
                    type="text"
                    name="time"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                />
                </div>
                <div>
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                />
                </div>
                <div>
                <label>Explanation:</label>
                <input
                    type="text"
                    name="explanation"
                    value={newEvent.explanation}
                    onChange={(e) => setNewEvent({ ...newEvent, explanation: e.target.value })}
                />
                </div>
                <button type="button" onClick={() => handleAddEvent(newEvent)}>
                Add Event
                </button>
            </form>
            </div>

        </div>
    
    );
};

export default form;
*/}