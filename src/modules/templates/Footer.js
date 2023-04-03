import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
};


const Footer = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };


    return (
        <div id="footer">
            <div className='row'>
                <div className='col-md-3'>
                </div>
                <div className='col-md-3'>

                    <h4 style={{ fontSize: '11pt' }}>GECO Asia Pte. Ltd.</h4>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <PhoneIcon />
                        </div>
                        <div className='col-sm-10'>
                            +65 6560 3224
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <EmailIcon />
                        </div>
                        <div className='col-sm-10'>
                            nfo@geco.asia
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <LocationOnIcon />
                        </div>
                        <div className='col-sm-10'>
                            2 Venture Drive, #10-18 Vision Exchange, Singapore 608526
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h4 style={{ fontSize: '11pt' }}>GECO Philippines BGC</h4>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <PhoneIcon />
                        </div>
                        <div className='col-sm-10'>
                            (+63) 999 169 3172
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <EmailIcon />
                        </div>
                        <div className='col-sm-10'>
                            nfo@geco.asia
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <LocationOnIcon />
                        </div>
                        <div className='col-sm-10'>
                            One Global Place, 5th Avenue & 25th Street, BGC, Taguig, Philippines 1632
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h4 style={{ fontSize: '11pt' }}>GECO Philippines IloIlo</h4>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <PhoneIcon />
                        </div>
                        <div className='col-sm-10'>
                            (+63) 999 169 3172
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <EmailIcon />
                        </div>
                        <div className='col-sm-10'>
                            nfo@geco.asia
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-sm-2'>
                            <LocationOnIcon />
                        </div>
                        <div className='col-sm-10'>
                            Estrella Building, Simon Ledesma St., Iloilo City, Philippines 5000
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' style={{ marginTop: '40px', textAlign: 'center' }}>
                <div className='col-md-4'>
                    <FacebookIcon className="iconHover" onClick={() => openInNewTab('https://www.facebook.com/gecoasia/')} />
                    <InstagramIcon className="iconHover" onClick={() => openInNewTab('https://www.facebook.com/gecoasia/')} />
                    <LinkedInIcon className="iconHover" onClick={() => openInNewTab('https://www.instagram.com/gecoasia/')} />
                </div>
                <div className='col-md-4'>
                    <p>Copyright 2023. All Rights Reserved.</p>
                </div>
                <div className='col-md-4'>
                    <p onClick={handleOpen} id="policy">Data Privacy Policy</p>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Data Privacy Policy
                        <br />
                        <br />
                    </Typography>
                    <Typography component={'span'} id="modal-modal-description" sx={{ mt: 2 }}>

                        <b>Personal Data</b>
                        <br />
                        GECO values the data privacy rights of our users and has a privacy policy that governs our collection and use of personal data in place. The protection of personal data is important to us. We conduct our activities in accordance with data protection and data security laws. The section below highlights the data we collect and how this data is used in our internal processes. You are deemed to have given the consent for the data we collect, use and disclose as stated below.
                        <br />
                        <br />
                        <b>Collection, Use and Disclosure of Personal Data</b>
                        <br />
                        <br />
                        We use your personal data generally to answer your questions, process your request, search for a project in your area of expertise, or to grant you access to specialized information or offers, employment pass and other related passes application and conducting background check for employment. GECO needs some personal data about you in order to place you on suitable projects, for example your name, address, email address, telephone number, information about your technical focal points and skills, your qualifications etc. GECO stores, processes and discloses the data you have provided to current and potential customers for the reasons mentioned above. The data you provide GECO with can also be used in emails, newsletters and surveys.

                        The information collected on this website will be forwarded to the responsible unit within our organization. We assure you that your personal data is not available to third parties, unless we are legally obliged to, or you have given us your prior written consent.

                        Provided that we use contractors for the handling and management of work processes, the contractual conditions will be regulated according to the provisions of the PDP Act 2012 of Singapore.

                        It is in your interest to keep your personal data current and we would be pleased if you took part in this process.

                        You are always entitled to retract permission to save your data, to look at your data and/or to request that your data be deleted.

                        We fully respect the scenario if you do not want to give us your personal information to assist in our client relations – especially for direct marketing or market research. We will not sell your personal data to third parties nor market it elsewhere.
                        <br />
                        <br />
                        <b>Withdrawal or questions about data privacy</b>
                        <br />
                        <br />
                        If you have given us your personal data, you can request to have it deleted at any time. While we will put immediate attention to such requests, please allow us 3 working days for this request to take effect. Data for billing and accounting purposes are not affected by withdrawal or deletion.

                        Personal data, that has been submitted via our websites, are only stored until the purpose, for which it was provided, is fulfilled. As far as commercial- and tax retention periods are to be taken into account, the storage duration of certain data can be up to 10 years.

                        If you no longer agree with the storage of your personal data, or if they are no longer accurate, we will arrange to delete or correct your data according to your instructions (where this is permitted by the applicable law). If you wish, you can receive information about all the personal data we hold about you at no additional charge.

                        Your withdrawal or questions about data privacy in our organization, as well as possible requests for additional information, can be emailed directly to: sg-team@geco.asia.

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default Footer;