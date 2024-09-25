import { Container, Box, Text } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { PulseLoader } from 'react-spinners';

const csvUrl = 'https://docs.google.com/spreadsheets/d/1aKgyCC-TJPx-tC7JX-UNKXREm48fsSY_FmnK-rVtpUU/pub?gid=0&single=true&output=csv';

const fetchData = async () => {
  const response = await fetch(csvUrl);
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, { header: false }).data; // No headers as per your CSV structure
  return parsedData.map((row, index) => ({
    id: index,
    text: row[0],
    link: row[1],
  }));
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

export default function TestimonialCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
      setLoading(false);
    });
  }, []);

  return (
    <Box id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <Text as="h2" sx={{ mb: 4 }}>Recent News</Text>
      </Container>
      <Box sx={styles.carouselWrapper}>
        {loading ? (
          <Box sx={styles.loaderContainer}>
            <PulseLoader color="#00BFFF" loading={loading} size={15} />
          </Box>
        ) : (
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            infinite={true}
            responsive={responsive}
            slidesToSlide={1}
          >
            {data.map((item) => (
              <TextCardItem key={item.id} item={item} />
            ))}
          </Carousel>
        )}
      </Box>
    </Box>
  );
}

function TextCardItem({ item }) {
  return (
    <Text
      as="div"
      sx={styles.card}
      onMouseEnter={(e) => (e.currentTarget.style.cursor = 'pointer')}
      onClick={() => window.open(item.link, '_blank')}
    >
      {item.text}
    </Text>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    mt: '20px',
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '300px',
  },
  card: {
    cursor: 'pointer',
    fontSize: 3,
    fontWeight: 700, // Making the text bold
    margin: '10px 0',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'center',
    transition: 'color 0.3s',
    '&:hover': {
      color: 'red', // Change text color on hover
    },
  },
};
