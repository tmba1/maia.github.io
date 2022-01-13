
import React, { useState, useEffect } from 'react';
import Screen from './components/Screen';


function App() {
//   var CLIENT_ID = '267682363455-p83oekkl5d2bhrmb35drmak5apskgad4.apps.googleusercontent.com';
//   var API_KEY = 'AIzaSyA_v8HAP4nl6HCa89AijCpQk3jUTN4FQJ8';
//   const SCOPES =
//   "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";
//   const [events, setEvents] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.async = true;
//     script.defer = true;
//     script.src = "https://apis.google.com/js/api.js";

//     document.body.appendChild(script);

//     script.addEventListener("load", () => {
//       if (window.gapi) handleClientLoad();
//     });
//   }, []);

//   const handleClientLoad = () => {
//     window.gapi.load("client:auth2", initClient);
//   };

//   const openSignInPopup = () => {
//     window.gapi.auth2.authorize(
//                { client_id: CLIENT_ID, scope: SCOPES },
//                (res) => {
//                  if (res) {
//                    if (res.access_token)
//                      localStorage.setItem("access_token", res.access_token);
 
//                    // Load calendar events after authentication
//                    window.gapi.client.load("calendar", "v3", listUpcomingEvents);
//                  }
//                }
//              );
//  }  
 
//  const initClient = () => {
//      if (!localStorage.getItem("access_token")) {
//        openSignInPopup();
//      } else {
//        // Get events if access token is found without sign in popup
//        fetch(
//       `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`,
//          {
//            headers: {
//              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//            },
//          }
//        )
//          .then((res) => {
//            // Check if unauthorized status code is return open sign in popup
//            if (res.status !== 401) {
//              return res.json();
//            } else {
//              localStorage.removeItem("access_token");
 
//              openSignInPopup();
//            }
//          })
//          .then((data) => {
//            if (data?.items) {
//              setEvents(formatEvents(data.items));
//            }
//          });
//      }
//    };

//    const listUpcomingEvents = () => {
//     window.gapi.client.calendar.events
//       .list({
//         // Fetch events from user's primary calendar
//         calendarId: "primary",
//         showDeleted: true,
//         singleEvents: true,
//       })
//       .then(function (response) {
//         let events = response.result.items;

//         if (events.length > 0) {
//           setEvents(formatEvents(events));
//         }
//       });
//   };

//   const formatEvents = (list) => {
//     return list.map((item) => ({
//       title: item.summary,
//       start: item.start.dateTime || item.start.date,
//       end: item.end.dateTime || item.end.date,
//     }));
//   };
const closed = function (){
}
  return (
    <div className="App">
      
      <button onClick={() => closed()}>X</button>
      <Screen />

        
        
      
      
      
    </div>
  );
}

export default App;
