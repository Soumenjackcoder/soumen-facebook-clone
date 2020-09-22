import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png'
        profileSrc='https://instagram.fccu13-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118922654_2732072267075248_4981900657255298793_n.jpg?_nc_ht=instagram.fccu13-1.fna.fbcdn.net&_nc_ohc=990UMjqsFAUAX9HgRGO&oh=49a70c5120f9ee4a5fa686da543d9dbd&oe=5F84317C'
        // profileSrc="https://avatars2.githubusercontent.com/u24172956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        title='Sonny Sangha'
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU'
        profileSrc='https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg'
        title='Rafeh Qazi'
      />
      <Story
        image='https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        profileSrc='https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630'
        title='Frankie'
      />
      <Story
        image='https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg'
        profileSrc='https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635'
        title='Aron Bernath'
      />
      <Story
        image='https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg'
        profileSrc='https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635'
        title='Aron Bernath'
      />
      {/* <Story
                image=""
                profileSrc=""
                title=""
            /> */}
    </div>
  );
}

export default StoryReel;
