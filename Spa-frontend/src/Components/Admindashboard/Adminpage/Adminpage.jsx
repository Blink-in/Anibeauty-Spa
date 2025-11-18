import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// import { AuthContext } from "../AuthContext";
import "./Adminpage.css"
import {
    
    AppBar,
    
    Toolbar,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    TextField,
    Paper,
    Box
} from '@mui/material';



const Adminpage = ({ authToken }) => {
    const [bookings, setBookings] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchedBooking, setSearchedBooking] = useState(null);
    
    // const {  logout } = useContext(AuthContext);
 
    // Fetch all bookings when the component loads
    React.useEffect(() => {

        const fetchBookings = async () => {
            try {
                const response = await axios.get(
        "http://localhost:9000/api/book/find",
                    
);
                setBookings(response.data);
                
            } catch (error) {
                console.error('Authentication failed:', error);
            }
        };

        fetchBookings();
    },[]);

    // Delete a booking by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/api/book//${id}`);
            setBookings(bookings.filter((booking) => booking._id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    // Search for a booking by its  ID
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/api/book/${searchId}`
            
            );
            setSearchedBooking(response.data);
        } catch (error) {
            setSearchedBooking(null);
            console.error('Error fetching booking:', error);
        }
    };

    // Redirect to login if the admin is not authenticated
    // if (!isAuthenticated) {
    //     return <Navigate to="/login" />;
    // }

    return (


    
        
        <div className='move'>
              {/* Navbar */}
        <Box sx={{ padding: 4 }}>
          
            <AppBar position="static" sx={{ backgroundColor: '#4CAF50' }}>
                <Toolbar>
                    <Typography variant="h6">Admin Dashboard</Typography>
                </Toolbar>
                {/* <Button color="inherit" onClick={logout}>
                      Logout
                    </Button> */}
            </AppBar>
           
            {/* Dashboard Content */}
            <Box sx={{ mt: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Manage Bookings
                </Typography>

                {/* Search Input */}
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <TextField
                        label="Search by Unique ID"
                        variant="outlined"
                        value={searchId

                        }
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Box>

                {/* Display Searched Booking */}
                {searchedBooking && (
                    <Box sx={{ mb: 2, backgroundColor: '#f0f0f0', padding: 2 }}>
                        <Typography variant="h6">Search Result:</Typography>
                        <Typography>Name: {searchedBooking.name}</Typography>
                        <Typography>Date: {searchedBooking.date}</Typography>
                        <Typography>Time: {searchedBooking.time}</Typography>
                        <Typography>Id: {searchedBooking.id}</Typography>
                        <Typography>Unique Id: {searchedBooking.id}</Typography>


                    </Box>
                )}

                {/* Bookings Table */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#E0E0E0' }}>
                                <TableCell>Name</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Unique ID</TableCell>


                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookings.map((booking) => (
                                <TableRow key={booking._id}>
                                    <TableCell>{booking.name}</TableCell>
                                    <TableCell>{booking.date}</TableCell>
                                    <TableCell>{booking.time}</TableCell>
                                    <TableCell>{booking._id}</TableCell>
                                    <TableCell>{booking.uniqueId}</TableCell>


                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(booking._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
        </div>
    );
};

export default Adminpage;
