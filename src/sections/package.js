import { useEffect, useState } from 'react';
import { Box, Container } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import Papa from 'papaparse';

const csvUrl_links = 'https://docs.google.com/spreadsheets/d/18MqgA0DdA6EefjPHQnoMCVWOSfhyxEY0uPJQYyV0ihQ/pub?gid=0&single=true&output=csv';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function VideoCarousel() {
  const [videoData, setVideoData] = useState([]);

  // Fetch and parse the CSV file
  useEffect(() => {
    Papa.parse(csvUrl_links, {
      download: true,
      header: false, // Since your file only contains links, we don't need headers
      complete: (result) => {
        const videoLinks = result.data.map((row) => row[0]); // Assuming links are in the first column
        setVideoData(videoLinks);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      },
    });
  }, []);

  return (
    <Box id="videos" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Our Recent Videos" title="Most Authentic and Credible Content on the Internet" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          draggable
          infinite={true}
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          showDots={false}
          slidesToSlide={1}
        >
          {videoData.map((video, index) => (
            <Box sx={styles.videoCard} key={`video-key-${index}`}>
              <Box sx={styles.videoWrapper}>
                <iframe
                  src={video}
                  title={`video-${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={styles.videoFrame}
                />
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', '1000px', '1180px', null, 'calc(50% + 865px)'],
      ml: 'auto',
      mr: 'auto',
    },
  },
  videoCard: {
    p: '20px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    borderRadius: '6px',
    m: '15px', // Added margin to introduce space between cards
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Centers the video horizontally and vertically in the card
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // Aspect ratio for 16:9 videos
    height: 0,
    width: '100%',
    overflow: 'hidden',
  },
  videoFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '12px', // Round corners for the video
    overflow: 'hidden',
  },
};
