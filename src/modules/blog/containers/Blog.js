import React, { useEffect } from 'react';
import Durant from '../../../images/Durant.jpg';
import Jokic from '../../../images/Jokic.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { onGEtEvent } from '../../action';


const Blog = () => {
    const dispatch = useDispatch();

    const upcomingEvents = useSelector(state => state.upcomingEventData);

    useEffect(() => {
        dispatch(onGEtEvent());
    }, [])
    return (
        <>
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{width: '70%', height: '70%', margin: 'auto'}}>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={Durant} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Jokic} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Durant} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            </div>
            <br/>
            <h4>LATEST BLOG TODAY</h4>
            <div>
            <div style={{ marginTop: '20px' }}>
                <div className="row">
                    {(upcomingEvents.length > 0) ?
                        upcomingEvents
                            .slice(0, 4)
                            .map((row, index) => {
                                return (
                                    <div className='col-md-4' key={index} style={{marginBottom:'5%'}}>
                                        <Card sx={{ maxWidth: 345 }} >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={row.event_image}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {row.event_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                      {row.event_description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={(e) => { e.preventDefault(); window.open(row.event_link)}}>
                                                    Read More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </div>
                                )
                            }) :
                        <p></p>
                    }

                </div>

            </div>
            </div>
        </>
    );
};

export default Blog;