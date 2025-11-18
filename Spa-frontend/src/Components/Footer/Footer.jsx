import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'lightgray', // A beautiful green color for the spa
                color: 'black',
                padding: '20px 10px',
                mt: 4,
                textAlign: 'center',
            }}
        >
            {/* Firm's Name */}
            <Typography variant="h6" gutterBottom>
                Anibeauty Spa
            </Typography>

            {/* Contact Details */}
            <Typography variant="body2" gutterBottom>
                Email: <Link href="mailto:info@anibeautyspa.com" color="inherit">info@anibeautyspa.com</Link> <br />
                Phone: <Link href="tel:+2348012345678" color="inherit">+234 801 234 5678</Link>
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ mt: 2 }}>
                <IconButton
                    href="https://facebook.com/AnibeautySpa"
                    target="_blank"
                    color="inherit"
                    aria-label="Facebook"
                >
                    <Facebook />
                </IconButton>
                <IconButton
                    href="https://instagram.com/AnibeautySpa"
                    target="_blank"
                    color="inherit"
                    aria-label="Instagram"
                >
                    <Instagram />
                </IconButton>
                <IconButton
                    href="https://twitter.com/AnibeautySpa"
                    target="_blank"
                    color="inherit"
                    aria-label="Twitter"
                >
                    <Twitter />
                </IconButton>
            </Box>

            {/* Copyright Notice */}
            <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                &copy; {new Date().getFullYear()} Anibeauty Spa. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
