import video0 from "../../../Assets/Images/video-list-0.jpg";
import video1 from "../../../Assets/Images/video-list-1.jpg"; //Not importing into file manager properly, download again from synapse
import video2 from "../../../Assets/Images/video-list-2.jpg";
import video3 from "../../../Assets/Images/video-list-3.jpg";
import video4 from "../../../Assets/Images/video-list-4.jpg";
import video5 from "../../../Assets/Images/video-list-5.jpg";
import video6 from "../../../Assets/Images/video-list-6.jpg";
import video7 from "../../../Assets/Images/video-list-7.jpg";
import video8 from "../../../Assets/Images/video-list-8.jpg";

const randomId = () => Math.random * 99999999;

const sideVideo = [
  {
    id: randomId(),
    title: "BMX Rampage: 2018 Highlights",
    channel: "Scotty Cranmer",
    image: video0
  },
  {
    id: randomId(),
    title: "Become A Travel Pro In One Easy Lesson...",
    channel: "Scotty Cranmer",
    image: video1 //IMG is corrupted, must re-download.
  },
  {
    id: randomId(),
    title: "Les Houches The Hidden Gem Of The...",
    channel: "Scotty Cranmer",
    image: video2
  },
  {
    id: randomId(),
    title: "Travel Health Useful Medical Information...",
    channel: "Scotty Cranmer",
    image: video3
  },
  {
    id: randomId(),
    title: "Cheap Airline Tickets Great Ways To Save",
    channel: "Emily Harper",
    image: video4
  },
  {
    id: randomId(),
    title: "Choose The Perfect Accommodations",
    channel: "Ethan Owen",
    image: video5
  },
  {
    id: randomId(),
    title: "Take A Romantic Break In A Boutique Hotel",
    channel: "Lydia Perez",
    image: video6
  },
  {
    id: randomId(),
    title: "Cruising Destination Ideas",
    channel: "Timothy Austin",
    image: video7
  },
  {
    id: randomId(),
    title: "Train Travel On Track For Safety",
    channel: "Scotty Cranmer",
    image: video8
  }
];
