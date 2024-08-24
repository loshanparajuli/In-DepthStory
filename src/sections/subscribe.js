import { useRef, useState } from 'react';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';
import Confetti from 'react-confetti';

export default function Subscribe() {
  const messageEl = useRef(null);
  const emailEl = useRef(null);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleResponse = (status) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });
      messageEl.current.value = '';
      emailEl.current.value = '';
      setShowPopup(true);
    } else {
      setStatus({ 
        info: { error: true, msg: 'Failed to send message.' },
      });
      setShowPopup(true);
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();

    const message = messageEl.current.value.trim();
    const email = emailEl.current.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus({
        info: { error: true, msg: 'Please enter a valid email address.' },
      });
      return;
    }

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch(`https://formspree.io/f/xkgwbzka`, {
        body: JSON.stringify({ message, email }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      handleResponse(res.status);

    } catch (err) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again.' },
      });
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setStatus({ ...status, submitted: false });
  };

  return (
    <Box>
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              Got something in mind? We are listening to your ideas
            </Heading>
            <Text as="p" sx={styles.description}>
            Share it with us, and we guarantee it'll be heard! The scope and the domain of the project shall remain limitless. We are listening
            </Text>
            <form onSubmit={subscribe}>
              <Flex sx={styles.subscribeForm}>
                <Input
                  ref={messageEl}
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Your Idea"
                  sx={styles.messageInput} // Updated style reference for the longer message box
                />
                <Input
                  ref={emailEl}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  sx={styles.emailInput} // Updated style reference for the shorter email box
                />

                <Button
                  type="submit"
                  disabled={status.submitting}
                  className="subscribe__btn"
                  aria-label="Send"
                >
                  {!status.submitting ? (!status.submitted ? 'Send' : 'Sent') : 'हेल्लो हुलाक...'}
                </Button>
              </Flex>
            </form>
            {showPopup && (
              <div style={styles.popupOverlay}>
                <div style={styles.popup}>
                  {status.info.error ? (
                    <div style={styles.popupContent}>
                      <span style={styles.sadFace}>😢</span>
                      <p>{status.info.msg}</p>
                    </div>
                  ) : (
                    <div style={styles.popupContent}>
                      <Confetti width={300} height={150} />
                      <span style={styles.confettiEmoji}>🎉</span>
                      <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  <Button onClick={closePopup} sx={styles.closeBtn}>Close</Button>
                </div>
              </div>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'primary',
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
    color: 'white',
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
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
  },
  messageInput: {
    width: ['100%', null, '300px'], // Adjusted to make the message input longer
    border: 0,
    borderRadius: 50,
    fontFamily: 'body',
    fontSize: ['14px', null, 2],
    fontWeight: 500,
    color: 'heading',
    py: 1,
    px: [4, null, 6],
    backgroundColor: ['white', 'transparent'],
    height: ['52px', null, '60px'],
    textAlign: ['center', 'left'],
    '&:focus': {
      boxShadow: '0 0 0 0px',
    },
    '::placeholder': {
      color: 'primary',
      opacity: 1,
    },
  },
  emailInput: {
    width: ['100%', null, '197px'], // Adjusted to make the email input shorter
    border: 0,
    borderRadius: 50,
    fontFamily: 'body',
    fontSize: ['14px', null, 2],
    fontWeight: 500,
    color: 'heading',
    py: 1,
    px: [4, null, 6],
    backgroundColor: ['white', 'transparent'],
    height: ['52px', null, '60px'],
    textAlign: ['center', 'left'],
    '&:focus': {
      boxShadow: '0 0 0 0px',
    },
    '::placeholder': {
      color: 'primary',
      opacity: 1,
    },
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    position: 'relative',
    width: '300px',
  },
  popupContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  closeBtn: {
    marginTop: '20px',
    backgroundColor: 'primary',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  confettiEmoji: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  sadFace: {
    fontSize: '48px',
    marginBottom: '10px',
  },
};
