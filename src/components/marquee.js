import { Container, Heading, Text, Box } from 'theme-ui';
import Image from 'next/image';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import { useState, useEffect } from 'react';

import Avatara from 'assets/testimonial/2.png';
import Avatarb from 'assets/testimonial/1.png';

const data = [
  {
    id: 1,
    title: '‘भ्वाइस किड्स’मा प्रतिस्पर्धा गर्नकै लागि',
    avatar: Avatara,
    name: 'CM Prachanda',
    designation: 'Source : https://www.onlinekhabar.com/',
    startDate: new Date('2020-08-16T00:00:00'),
    endDate: new Date('2024-10-25T23:59:59'),
  },
  {
    id: 2,
    title: '‘भ्वाइस किड्स’मा प्रतिस्पर्धा गर्नकै लागि',
    avatar: Avatarb,
    name: 'CM Prachanda',
    designation: 'Source : https://www.onlinekhabar.com/',
    startDate: new Date('2020-08-16T00:00:00'),
    endDate: new Date('2024-10-25T23:59:59'),
  },
  {
    id: 3,
    title: '‘भ्वाइस किड्स’मा प्रतिस्पर्धा गर्नकै लागि',
    avatar: Avatarb,
    name: 'CM Prachanda',
    designation: 'Source : https://www.onlinekhabar.com/',
    startDate: new Date('2020-08-16T00:00:00'),
    endDate: new Date('2024-10-25T23:59:59'),
  },
  {
    id: 4,
    title: '‘भ्वाइस किड्स’मा प्रतिस्पर्धा गर्नकै लागि',
    avatar: Avatara,
    name: 'CM Prachanda',
    designation: 'Source : https://www.onlinekhabar.com/',
    startDate: new Date('2020-08-16T00:00:00'),
    endDate: new Date('2024-10-25T23:59:59'),
  },
  // Add more data as needed...
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const calculateTimeLeft = (endDate) => {
  const difference = +new Date(endDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function TestimonialCard() {
  return (
    <Box id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Covering the uncovered" title="Meet those FAKE Promises" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <ReviewCard key={`testimonial--key${item.id}`} item={item} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

function ReviewCard({ item }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(item.endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(item.endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [item.endDate]);

  return (
    <Box sx={{ ...styles.reviewCard, animation: 'moveLeft 10s linear infinite' }}>
      <style jsx>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <Box sx={styles.imageContainer}>
        <Image src={item.avatar} alt="Client Image" />
      </Box>
      <Box sx={styles.textContainer}>
        <Heading as="h4" sx={styles.heading}>
          {item.name}
        </Heading>
        <Text sx={styles.title}>{item.title}</Text>
        <Text sx={styles.designation}>{item.designation}</Text>
        <Heading as="h3" sx={styles.boldText}>
          Remaining Time
        </Heading>
        <Text sx={styles.timer}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </Text>
      </Box>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
    },
  },
  reviewCard: {
    display: 'flex',
    flexDirection: 'row',
    width: ['100%', null, null, '95%', '90%'],
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px', '35px 30px'],
    bg: 'white',
    textAlign: 'left',
    m: '20px auto',
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },
  imageContainer: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      transition: 'all 0.3s ease',
    },
  },
  textContainer: {
    width: '75%',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: [2, 3],
    fontWeight: 700,
    mb: '10px',
    color: 'text',
    lineHeight: 1.6,
  },
  designation: {
    color: 'primary',
    fontWeight: 500,
    fontSize: 1,
    lineHeight: 1.4,
    mb: '10px',
  },
  boldText: {
    fontWeight: 700,
    textAlign: 'right',
    mb: '5px',
  },
  timer: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: [2, 3],
  },
};
