import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.scss']
})
export class MusicianComponent implements OnInit {
  albums = [
    {title: 'Mountains Don\'t Lie', 
    link: 'https://zackhagan.bandcamp.com/album/mountains-dont-lie',
    img: 'link to image',
    blurb: `This is a series of recordings made between Brooklyn and Denver over 7 years.
    All instruments and vocals are Zack Hagan. This album represents an intensely personal look
    at life, love, and loss. While immensly dense at points it's also incredibly sparse in others
    all created with a blend of home made synths and guitars.`,
    bandcamp: {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=1973616283/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/',
      link: 'https://zackhagan.bandcamp.com/album/mountains-dont-lie',
      text: `Mountains Don&#39;t Lie by Zack Hagan`
    }
    // `<iframe style="border: 0; width: 350px; height: 753px;" src="https://bandcamp.com/EmbeddedPlayer/album=1973616283/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://zackhagan.bandcamp.com/album/mountains-dont-lie">Mountains Don&#39;t Lie by Zack Hagan</a></iframe>`
    },
    {title: 'Dark Xmas', 
    link: 'bancamp somewhere',
    img: 'link to image',
    blurb: `
    Dark Xmas, the new album of audio artistry from EDM artist and producer ZACK HAGAN, was recorded in Brooklyn, NY and Nashville, TN. 3 of the 6 original songs are a result of remote collaborations between Hagan & his lifelong friend and musical compatriot, acclaimed Nashville-based banjoist Charles Butler. Butler appears on the tracks 'tao of 3 systems', 'The 7th Ring', and 'animal waiting'. These pieces began as a chance internet sharing between the two composers. Elemetary school friends growing up in Ohio, the two parted ways in the 1990s when Charles' family moved to far away Burlington, Vermont, home of the the iconic jamband Phish. Shortly after Charles' family moved from Ohio, Zack's family also moved, to Chicago, Illinois, home of house music, where Zack began his lifelong obsession with electronica. Now after decades of perfecting each of their own unique and inspiring musical voices, they're back together delivering an ever increasing variety of electronic dance music and improvisation, with a twist of Americana.
    credits
    released October 16, 2012
    
    all songs written & produced by Zack Hagan
    #2, 4, 6 co-written by Charles Butler
    #1 features Mabis Chase
    
    ZACK HAGAN - Programming, Synths, Guitar, Electric bass, Vocals and Lyrics
    CHARLES BUTLER - Banjo (acoustic and electric), Dulcimer, Dobro, Pedal Steel, Percussion
    MABIS CHASE - Violin
    
    recorded in Brooklyn, NY and Nashville, TN
    cover art by Jake Messing
    
    2012 (c) roc-elle records (p) zack hagan`,
    bandcamp: {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=220626320/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/',
      link: 'https://zackhagan.bandcamp.com/album/dark-xmas',
      text: `Dark Xmas by Zack Hagan`
    }
    // <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=220626320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://zackhagan.bandcamp.com/album/dark-xmas">Dark Xmas by Zack Hagan</a></iframe>
    },
    {title: 'Muramba Sessions', 
    link: 'bancamp somewhere',
    img: 'link to image',
    blurb: 'this is something about the recording',
    bandcamp: {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=1071099354/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/',
      link: 'https://zackhagan.bandcamp.com/album/the-muramba-sessions',
      text: `The Muramba Sessions by Zack Hagan`
    }
    // <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1071099354/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://zackhagan.bandcamp.com/album/the-muramba-sessions">The Muramba Sessions by Zack Hagan</a></iframe>
    },
    {title: 'Rhapsody @ Trash Mansion', 
    link: 'bancamp somewhere',
    img: 'link to image',
    blurb: `This record is made from edits of a porno movie soundtrack I did for Porno Jim's "Hookin' Up". 
    A treasure of film to be sure, full of softcore hipters performing hardcore acts. I guess looking back on it, I was blessed
    to be asked to make a soundtrack. At the time, this was a representation some unreleased works and other newly created long form
    jams. Porno Jim insisted that the scenes always have music which means I was making, like 30 minute edits of songs. 
    Which is pretty long even for the Gratful Dead. After editing it down, Rhapsody @ Trash Mansion was born. 
    Trash Mansion is an actual place in DUMBO (Down Under the Manhattan Bridge Overpass, for the unintiated) Brooklyn. 
    This is where the movie was filmed and I spent countless hours there between two friend's lofts. Apartments 502 and 208.`,
    bandcamp: {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=1313091260/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/',
      link: 'https://zackhagan.bandcamp.com/album/rhapsody-trash-mansion',
      text: `Rhapsody @ Trash Mansion by Zack Hagan`
    }
    // <iframe style="border: 0; width: 350px; height: 720px;" src="https://bandcamp.com/EmbeddedPlayer/album=1313091260/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://zackhagan.bandcamp.com/album/rhapsody-trash-mansion">Rhapsody @ Trash Mansion by Zack Hagan</a></iframe>
    },
    {title: 'Zack Hagan', 
    link: 'bancamp somewhere',
    img: 'link to image',
    blurb: 'this is something about the recording',
    bandcamp: {
      src: 'https://bandcamp.com/EmbeddedPlayer/album=2698279338/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/',
      link: 'https://zackhagan.bandcamp.com/album/zack-hagan',
      text: `Zack Hagan by Zack Hagan`
    }
    // <iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=2698279338/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://zackhagan.bandcamp.com/album/zack-hagan">Zack Hagan by Zack Hagan</a></iframe>
    }
  ]
  activeAlbum = this.albums[0];
  constructor() { }

  ngOnInit() {
  }

}
