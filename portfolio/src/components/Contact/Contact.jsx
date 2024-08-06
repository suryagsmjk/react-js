import React from 'react';
import IconButton from '@mui/material/IconButton'; // Updated import statement
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import GitHub from '@mui/icons-material/GitHub';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h1>Contact</h1>
            <div className="info">
                <p>Name: <span>Mr.G. SURYA</span></p>
                <p>Contact: <span>9751093954</span></p>
                <p>Email: <span>suryagsmjk@gmail.com</span></p>
                <div className="icon">
                    <a href='https://www.facebook.com/suryamaresl.surya' target='_blank'>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/_.xurya.zz._/' target='_blank'>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                    <a href='https://www.linkedin.com/in/surya-g-344004254/' target='_blank'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='https://twitter.com/surya_g71287' target='_blank'>
                        <IconButton>
                            <Twitter />
                        </IconButton>
                    </a>
                    <a href='https://github.com/suryagsmjk' target='_blank'>
                        <IconButton>
                            <GitHub />
                        </IconButton>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
