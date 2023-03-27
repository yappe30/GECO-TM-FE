import React, { useEffect, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { onGetTimesheet, onUpdateTimesheet } from '../../action';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import './TimesheetDesign.css';
import Card from '@mui/material/Card';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Timesheet = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filterField, setFilterField] = React.useState('');
    const [timeId, setTimeID] = React.useState('');
    const [statusOpt, setStatusOpt] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const dispatch = useDispatch();

    const timesheetData = useSelector(state => state.timesheetData);
    useEffect(() => {
        dispatch(onGetTimesheet());
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setFilterField(lowerCase);
    };

    const filteredData = timesheetData.filter((el) => {
        if (filterField === '') {
            return el;
        }
        else {
            return (el.timesheet_id.toLowerCase().includes(filterField)
                || el.first_name.toLowerCase().includes(filterField)
                || el.middle_name.toLowerCase().includes(filterField)
                || el.role.toLowerCase().includes(filterField)
                || el.status.toLowerCase().includes(filterField)
                || el.project_name.toLowerCase().includes(filterField)
            );
        }
    })
    const hanldeOption = (e) => {
        let id = e.target.getAttribute('data-id');
        let status = e.target.id;

        setTimeID(id);
        setStatusOpt(status)
        setOpenModal(true);

    }
    const handleClose = () => {
        setOpenModal(false);
    };
    const updateTimesheet = () => {
        dispatch(onUpdateTimesheet(timeId, statusOpt));
        setOpenModal(false);
    }
    return (
        <>
         <Card sx={{padding:'10px', boxShadow: '0px 0px 10px 1px rgb(164, 144, 124)'}}>
            <h3>TIMESHEET DETAILS</h3>
            <br></br>
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                label="Search"
            />
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '20px' }}>
                <TableContainer sx={{ maxHeight: '100%'}} className="table01">
                    <Table aria-label="customized table">
                        <TableHead sx={{ backgroundColor: 'rgb(164, 144, 124)' }}>
                            <TableRow >
                                <TableCell>
                                    Timesheet ID
                                </TableCell>
                                <TableCell>
                                    Full Name
                                </TableCell>
                                <TableCell>
                                    Project
                                </TableCell>
                                <TableCell>
                                    Start Date
                                </TableCell>
                                <TableCell>
                                    End Date
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(timesheetData.length > 0) ?
                                filteredData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.employee_id} className="TableRow" >
                                                <TableCell>
                                                    {row.timesheet_id}
                                                </TableCell>
                                                <TableCell>
                                                    {row.last_name + " " + row.first_name + ", " + row.middle_name}
                                                </TableCell>
                                                <TableCell>
                                                    {row.project_name}
                                                </TableCell>
                                                <TableCell>
                                                    {row.startDate}
                                                </TableCell>
                                                <TableCell>
                                                    {row.endDate}
                                                </TableCell>
                                                <TableCell>
                                                    {row.status}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="dropdown dropstart">
                                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true" disabled={row.status == 'REJECT'? true: false}>
                                                            Option
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#" id="APPROVE" data-id={row.timesheet_id} onClick={hanldeOption}>APPROVE</a></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><a className="dropdown-item" href="#" id="REJECT" data-id={row.timesheet_id} onClick={hanldeOption}>REJECT</a></li>
                                                        </ul>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }) :
                                <TableRow>
                                    <TableCell colSpan="7">
                                        Loading.........
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>

            </Paper>

            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Notification Message
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to {statusOpt} {timeId}
                    </Typography>
                    <Button id="SubmitButton" variant="contained" onClick={updateTimesheet} sx={{float: 'right', backgroundColor: 'rgb(87, 155, 177)'}}>Confirm</Button>
                </Box>
            </Modal>
            </Card>
        </>
    );
};

export default Timesheet;