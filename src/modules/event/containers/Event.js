import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { onGEtEvent } from '../../action';


const Event = () => {
    const [filterField, setFilterField] = React.useState('');

    const dispatch = useDispatch();

    const upcomingEvents = useSelector(state => state.upcomingEventData);

    useEffect(() => {
        dispatch(onGEtEvent());
    }, [])

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setFilterField(lowerCase);
    };

    const filteredData = upcomingEvents.filter((el) => {
        if (filterField === '') {
            return el;
        }
        else {
            return (el.event_name.toLowerCase().includes(filterField)
                || el.event_description.toLowerCase().includes(filterField)
                || el.startDate.toLowerCase().includes(filterField)
            );
        }
    })

    return (
        <>
            <h3>UPCOMING EVENTS</h3>
            <br></br>
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                label="Search"
            />
            <div style={{ marginTop: '20px' }}>
                <div className="row">
                    {(filteredData.length > 0) ?
                        filteredData
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
        </>
    );
};

export default Event;