import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import MainFooter from './mainFooter.jsx';
import Bottom from './bottom.jsx';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#061232] to-[#050119] border-t border-gray-800">
            <MainFooter />
            <Bottom />
        </footer>
    );
};

export default Footer;