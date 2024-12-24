import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://tripwishlist.com/wp-content/uploads/2023/09/AdobeStock_152886744-scaled.webp",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.visabud.com/wp-content/uploads/2024/02/Best-Islands-to-Visit-in-the-Caribbean.jpeg",
    address: "Some address 5, 12345 Some City",
    description: "This is a Second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
