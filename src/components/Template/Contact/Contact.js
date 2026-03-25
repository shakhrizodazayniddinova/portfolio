import Title from '../../Title/Title';
import { Box, Grid, Typography } from '@mui/material';
import { ContactStyled } from './ContactStyled';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const {t} = useTranslation();

    const contactData = [
        {icon: 'bi-geo-alt', label: t('contactData.address'), item: 'Tashkent, Uzbekistan'},
        {icon: 'bi-telephone', label: t('contactData.call'), item: '+998-90-113-9141', type: `+998901139141`, typeTo: 'tel:'},
        {icon: 'bi-envelope', label: t('contactData.email'), item: 'shahrizodazayniddinova7@gmail.com', type: `shahrizodazayniddinova7@gmail.com`, typeTo: 'mailto:', class: 'email'},
    ];

  return (
    <ContactStyled>
        <Title title={t('heading.contact')} description={t('titles.contact')}/>

        <Box>
            <Grid container className='contactBox'>
                {/* map */}
                {contactData.map((items, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box className='contactInformation'>
                            <button className='contactInformIcon' onClick={() => items.type && window.open(`${items.typeTo}${items.type}`, '_blank')}>
                                <i className={`bi ${items.icon}`}></i>
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
    </ContactStyled>
  )
}
