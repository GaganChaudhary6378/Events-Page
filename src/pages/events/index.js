import React from "react";

export default function EventsPage({data}) {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        <a href="">
          <img />
          <h2>Events in London</h2>
        </a>
        <a href="">
          <img />
          <h2>Events in Francisco</h2>
        </a>
        <a href="">
          <img />
          <h2>Events in Barcelona</h2>
        </a>
      </div>
    </div>
  );
}

export async function getStaticProps(){
    const {events_categories}=await import('data/data.json')
  // console.log(events_categories);
	return {

		props:{ 

		data:events_categories,
		}
	}
}
