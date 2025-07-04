import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaBehance, FaPen, FaYoutube } from 'react-icons/fa';

import Member3 from 'assets/team/member-1.png';
import Member5 from 'assets/team/member-2.png';
import Member6 from 'assets/team/member-3.png';
import Member1 from 'assets/team/member-4.png';
import Member4 from 'assets/team/member-5.png';
import Member2 from 'assets/team/member-6.png';
import Member7 from 'assets/team/member-7.png';
import Member8 from 'assets/team/member-8.png';
import Member9 from 'assets/team/member-9.png';
import Member10 from 'assets/team/member-10.png';
import Member11 from 'assets/team/member-11.png';
const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Sudip Bhai Subedi',
    title: 'Sudip Bhai Subedi',
    designation: 'CEO',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/sudipvai.subedi.1',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://x.com/home/idsnpl',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/sudipbhaisubedi/',
        icon: <FaInstagram />,
      },
    ],
  },

   {
    id: 6,
    imgSrc: Member6,
    altText: 'Loshan Parajuli',
    title: 'Loshan Parajuli',
    designation: 'Content Curator and Researcher',
    socialProfile: [
     
      {
        id: 2,
        name: 'linkediin',
        path: 'https://www.linkedin.com/in/loshanparajuli/',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'youtube',
        path: 'https://www.youtube.com/@whylosh/',
        icon: <FaYoutube />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/whylosh/',
        icon: <FaInstagram />,
      }
    ],
  },
  
  {
    id: 2,
    imgSrc: Member11,
    altText: 'Abhishek Basnet',
    title: 'Abhishel Basnet',
    designation: 'Social Media Manager',
    socialProfile: [
    
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/abeeshake99/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member3,
    altText: 'Sudarshan Bhai Subedi',
    title: 'Sudarshan Bhai Subedi',
    designation: 'Vox Pop Presentor',
    socialProfile: [
      {
        
      
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/beingsudarshan_00/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 8,
    imgSrc: Member8,
    altText: 'Amit Khanal',
    title: 'Amit Khanal',
    designation: 'Head of Content',
    socialProfile: [
  
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/amit_abhiyanta071/',
        icon: <FaInstagram />,
      },
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/amitc.khanal.7',
        icon: <FaFacebookF />,
      }
    ],
  },
 
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Suraj Poudel',
    title: 'Suraj Poudel',
    designation: 'Head of Production',
    socialProfile: [
  
      {
        
        id: 3,
        name: 'Portfolio',
        path: 'https://www.beyondvisuals.art',
        icon: <FaPen />,
      },
      {
      
        id: 3,
        name: 'Behance',
        path: 'https://www.behance.net/surajpaudel',
        icon: <FaBehance />,
      },

      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/_beyond_visuals_/',
        icon: <FaInstagram />,
      
      },
    ],
  },
  {
    id: 1,
    imgSrc: Member9,
    altText: 'Gaurav Joshi',
    title: 'Gaurav Joshi',
    designation: 'Video Editor',
    socialProfile: [
      
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/_idont_knox/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 1,
    imgSrc: Member10,
    altText: 'Simon Shrestha',
    title: 'Simon Shrestha',
    designation: 'Video Editor',
    socialProfile: [
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/_simon.shrestha/',
        icon: <FaInstagram />,
      },
    ],
  },
 
  
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Manish Rai',
    title: 'Manish Rai',
    designation: 'Graphics Lead',
    socialProfile: [
  
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/manishlohorungrai/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 1,
    imgSrc: Member11,
    altText: 'Raaj Shrestha',
    title: 'Raaj Shrestha',
    designation: 'Video Editor',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '',
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '',
        icon: <FaInstagram />,
      },
    ],
  },


  {
    id: 8,
    imgSrc: Member7,
    altText: 'Alka Bista',
    title: 'Alka Bista',
    designation: 'Researcher',
    socialProfile: [
  
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/alka.bista__/',
        icon: <FaInstagram />,
      },
    ],
  },
  
  
];

export default function TeamSection() {
  return (
    <Box>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
