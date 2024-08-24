import { Container, Box, Button, Text, Heading } from 'theme-ui';

export default function Yellobook() {
  const openPDF = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1u8JtXZLSK5jVxRctMl3ykzYrXEulnCKB/view?usp=sharing'; // paxi yeha, cloud mai host gareko link rakhni
    window.open(pdfUrl, '_blank');
  };

  return (
    <Box>
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <br></br>
            <Heading as="h2" sx={styles.title}>
             संघीय संसद सचिवालय:हामीले रोजेका प्रतिनिधिको सम्पर्क नम्बर 
            </Heading>
           
            <Button
              onClick={openPDF}
              sx={styles.openPdfButton}
              aria-label="Open PDF"
            >
             Telephone Directory (PDF)
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  contentBox: {
  
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'red',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  openPdfButton: {
    mt: [6, null, null, 7],
    backgroundColor: 'primary',
    color: 'white',
    borderRadius: '5px',
    padding: ['10px 20px', null, '12px 30px'],
    cursor: 'pointer',
    fontSize: ['16px', null, '18px'],
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'darken',
    },
  },
};
