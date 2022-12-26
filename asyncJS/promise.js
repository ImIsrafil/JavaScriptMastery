const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meet = {
      name: "Technical Meeting",
      location: "Google Meet",
    };
    resolve(meet);
  } else {
    reject(new Error("meeting already has been scheduled!"));
  }
});

const addToCalender = (meet) => {
  const calender = `${meet.name} in ${
    meet.location
  } at ${new Date().getUTCDate()}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

console.log("Hello World");

async function myMeeting() {
  const meetingDetails = await meeting;
  const calender = await addToCalender(meetingDetails);
  console.log(calender + " Hello");
}

myMeeting().catch((err) => console.log(err));
