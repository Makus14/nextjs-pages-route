import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://tripwishlist.com/wp-content/uploads/2023/09/AdobeStock_152886744-scaled.webp"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://tripwishlist.com/wp-content/uploads/2023/09/AdobeStock_152886744-scaled.webp",
        id: meetupId,
        title: "First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
