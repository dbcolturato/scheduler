import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = state.days.map(d => {
      if (d.appointments.find(a => a === id)) {
        return {
          ...d,
          spots: d.spots - 1
        }
      }
      return d;
    })

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => setState({ ...state, appointments, days }));
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = state.days.map(d => {
      if (d.appointments.find(a => a === id)) {
        return {
          ...d,
          spots: d.spots + 1
        }
      }
      return d;
    })

    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments, days }));
  }

  const setDay = day => setState({ ...state, day });

  return { state, setDay, bookInterview, cancelInterview };
};
