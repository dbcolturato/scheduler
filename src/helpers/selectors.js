//return an array of appointments for the given day
export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find(d => d.name === day);
  return dayObj ? dayObj.appointments.map(a => state.appointments[a]) : [];
}

//return an array of interviewers for the given day
export function getInterviewersForDay(state, day) {
  const dayObj = state.days.find(d => d.name === day);
  return dayObj ? dayObj.interviewers.map(i => state.interviewers[i]) : [];
}

export function getInterview(state, interview) {

  return (
    interview ?
      {
        "student": interview.student,
        "interviewer": {
          "id": interview.interviewer,
          "name": state.interviewers[interview.interviewer].name,
          "avatar": state.interviewers[interview.interviewer].avatar
        }
      }
      : null
  );
};
