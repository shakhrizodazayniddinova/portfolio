import React from 'react';
import Title from '../../Title/Title';
import { Box, Grid, Typography } from '@mui/material';
import { ContactStyled } from './ContactStyled';

const contactData = [
    {icon: 'bi-geo-alt', label: 'Address', item: 'Tashkent, Uzbekistan'},
    {icon: 'bi-telephone', label: 'Call Us', item: '(+998)99-067-90-40', type: `+998990679040`, typeTo: 'tel:'},
    {icon: 'bi-envelope', label: 'Email', item: 'shahrizodazayniddinova7@gmail.com', type: `shahrizodazayniddinova7@gmail.com`, typeTo: 'mailto:', class: 'email'},
];

export default function Contact() {
  return (
    <ContactStyled>
        <Title title={'Contact'} description={'I am ready to work on your future project. Use the information below to contact me.'}/>

        <Box>
            <Grid container className='contactBox'>
                {/* map */}
                {contactData.map((items) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className='contactInformation'>
                            <button className='contactInformIcon' onClick={() => items.type && (window.location.href = `${items.typeTo}${items.type}`)}>
                                <i class={`bi ${items.icon}`}></i>
                            </button>

                            <Box>
                                <Typography variant='h6' fontWeight={'bold'}>{items.label}</Typography>
                                <Typography variant='body2' className={items.class}>{items.item}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box>
            <iframe width="100%" height="100%" style={{ border: 0 }} title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.3548984021362!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef8e7b84f9de5%3A0x400eedb58cbe1bfc!2z0JXQs9GA0YjQtdC60LDRg9C-0LzQvtCz!5e0!3m2!1sen!2sus!4v1698413287591!5m2!1sen!2sus"
            ></iframe>
        </Box>
    </ContactStyled>
  )
}
