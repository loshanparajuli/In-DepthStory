import { Container, Box, Heading, Text, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

export default function Banner() {
  return (
    <Box sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            The Media Friend <br /> You Can TRUST
          </Heading>
          <Text as="p" variant="heroSecondary">
            At our core, we are passionate about uncovering the hidden narratives and addressing the topics that often go unexplored. Our mission is to foster open discussions.
          </Text>

          <Box sx={styles.banner.buttonGroup}>
            <Button
              sx={styles.banner.button}
              variant="primary"
              onClick={() => window.location.href = 'https://www.youtube.com/@INDepthStory'}
            >
            
              <span style={{ marginLeft: '8px' }}>Subscribe </span>
            </Button>

            {"  "} {" "}

            <Button
              sx={styles.banner.button}
              variant="primary"
              onClick={() => window.location.href = 'https://discord.gg/fRQC6n32Kz'}
            >
              <span style={{ marginLeft: '8px' }}>Join Discord</span>
            </Button>
          </Box>
        </Box>

        <Box sx={styles.banner.imageBox}>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: '-80px',
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '25%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '-20px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '25%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
