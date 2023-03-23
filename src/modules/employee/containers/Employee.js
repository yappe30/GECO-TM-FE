import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { onGetEmployee } from '../../action';
import { TextField } from '@mui/material';
import './EmployeeTableDesign.css';

const Employee = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filterField, setFilterField] = React.useState('');
    const dispatch = useDispatch();

    const employeeData = useSelector(state => state.employeeData);

    useEffect(() => {
        dispatch(onGetEmployee());
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

    const filteredData = employeeData.filter((el) => {
        if (filterField === '') {
            return el;
        }
        else {
            return (el.last_name.toLowerCase().includes(filterField) 
            || el.first_name.toLowerCase().includes(filterField)
            || el.middle_name.toLowerCase().includes(filterField)
            || el.role.toLowerCase().includes(filterField)
            || el.employee_id.toLowerCase().includes(filterField)
            );
        }
    })

    return (
        <>
            <h3>EMPLOYEE DETAILS</h3>
            <br></br>
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                label="Search"
            />
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop:'20px'}}>
                <TableContainer sx={{ maxHeight: '100%'}}>
                    <Table aria-label="customized table">
                        <TableHead sx={{backgroundColor: 'rgb(164, 144, 124)'}}>
                            <TableRow >
                                <TableCell>
                                    Employee ID
                                </TableCell>
                                <TableCell>
                                    Full Name
                                </TableCell>
                                <TableCell>
                                    Role
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(filteredData.length > 0) ?
                            filteredData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.employee_id} className="TableRow">
                                            <TableCell sx={{color: 'rgb(77, 76, 125)'}}>
                                                {row.employee_id}
                                            </TableCell>
                                            <TableCell>
                                                {row.last_name + " " + row.first_name + ", " + row.middle_name}
                                            </TableCell>
                                            <TableCell>
                                                {row.role}
                                            </TableCell>
                                        </TableRow>
                                    );
                                }): 
                                <TableRow> 
                                    <TableCell colSpan="3">
                                        Loading.........
                                    </TableCell>
                                </TableRow>
                                }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default Employee;