import { Box, Typography } from "@mui/material";
import '../index.css'; // Ensure your CSS is imported for styles

export const mainBoxStyle = {
  backgroundColor: '#f5f5f5', // Light gray background
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};
export const titleStyle = {
  marginBottom: '1rem',
  color: '#333', // Dark text color for better readability
  fontWeight: 'bold',
  fontSize: '1.5rem',
  textAlign: 'center',
}
export const sectionStyles = {
  marginTop: '0.5rem',
  color: '#333', // Dark text color for better readability
}

const ContactSection = () => {
  return (
    <Box width="50%" sx={mainBoxStyle}>
      <Typography variant="h4" component="h2" sx={titleStyle}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={sectionStyles}>
        If you have any questions or need assistance, please reach out to us at:
      </Typography>
      <Typography variant="body1" sx={sectionStyles}>
        {/* Email: <a href="mailto:info@example.com">info@example.com</a> */}
        Email: info@example.com
      </Typography>
      <Typography variant="body1" sx={sectionStyles}>
        {/* Phone: <a href="tel:+1234567890">+1 (234) 567-890</a> */}
        Phone: +1 (234) 567-890
      </Typography>
      <Typography variant="body1" sx={sectionStyles}>
        Address: 123 Immigration St, Suite 100, City, Country
      </Typography>
      <Typography variant="body1" sx={sectionStyles}>
        Business Hours: Mon-Fri, 9am - 5pm
      </Typography>
      <Typography variant="body1" sx={sectionStyles}>
        We look forward to assisting you with your immigration needs.
      </Typography>
    </Box>
  );
};

export default ContactSection;