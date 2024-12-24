import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-paris-france.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-paris-france.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a Second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
