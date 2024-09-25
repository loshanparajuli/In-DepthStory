import { Container, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { PulseLoader } from 'react-spinners';

const csvUrl = 'https://docs.google.com/spreadsheets/d/1aKgyCC-TJPx-tC7JX-UNKXREm48fsSY_FmnK-rVtpUU/pub?gid=0&single=true&output=csv';

const fetchData = async () => {
  const response = await fetch(csvUrl);
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, { header: false }).data;
  return parsedData.map((row, index) => ({
    id: index,
    text: row[0],
    link: row[1],
  }));
};

export default function TestimonialCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
      setLoading(false);
    });

    const interval = setInterval(() => {
      setFadeOut(true); // Trigger fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFadeOut(false); // Trigger fade in
      }, 300); // Match this delay with the CSS transition duration
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.length]); // Depend on data length to avoid issues

  return (
    <Box id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <Text as="h1" sx={styles.headline}>
          Latest News
        </Text>
      </Container>
      <Box sx={styles.carouselWrapper}>
        {loading ? (
          <Box sx={styles.loaderContainer}>
            <PulseLoader color="#00BFFF" loading={loading} size={15} />
          </Box>
        ) : (
          <TextCardItem item={data[currentIndex]} fadeOut={fadeOut} />
        )}
      </Box>
    </Box>
  );
}

function TextCardItem({ item, fadeOut }) {
  return (
    <Text
      as="div"
      sx={{
        ...styles.card,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
        textAlign: 'center',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.cursor = 'pointer')}
      onClick={() => item.link && window.open(item.link, '_blank')}
    >
      {item ? item.text : ''} {/* Display text only if item is defined */}
    </Text>
  );
}

const styles = {
  headline: {
    fontSize: '3rem',
    fontWeight: 700,
    mb: 4,
    lineHeight: 1.2,
    color: 'red', // Changed color to red
    textAlign: 'center',
    fontStyle: 'italic', // Made italic
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    mt: '20px',
    p: '10px 0',
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
    fontSize: '2rem', // Made the text smaller
    fontWeight: 700,
    margin: '0 20px',
    padding: '15px',
    borderRadius: '6px',
    backgroundColor: 'white',
    transition: 'color 0.3s',
    display: 'inline-block',
    lineHeight: '1.4', // Ensure it breaks nicely
    textAlign: 'center',
    whiteSpace: 'normal', // Allow line breaks
    '&:hover': {
      color: 'red',
    },
  },
};
