import { useState, /*useContext*/ } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext} from '../AuthContext';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Link
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswprd] = useState("");

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formData = {email, password};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      
   
    const data = await axios.post( "http://localhost:9000/api/admin/login",formData);
    console.log("successful login",data);
    setTimeout(() => navigate("/admin"), 2000);
  } catch (error) {
      console.log("error message", error);
  }finally{
    setLoading(false)
  }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Admin Login
        </Typography>
        
        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
        
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPasswprd(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <CircularProgress/> : 'Login'}
          </Button>
          
        
        </Box>
      </Box>
    </Container>
  );
};

export default Login;