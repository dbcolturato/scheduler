export default function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find(d => d.name === day);
  return dayObj ? dayObj.appointments.map(a => state.appointments[a]) : []; 
}