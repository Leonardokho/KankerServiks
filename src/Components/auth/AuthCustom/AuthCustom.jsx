// import { Router, Routes, Route, useState, useEffect } from 'react-router-dom';
// import NavbarHome from '../../landing_page/navbar/NavbarNotAuth';
// import axios from 'axios';



// const useAuth = () => {
//   const [auth, setAuth] = useState(null);
//   const [user, setUser] = useState({});

//   const isAuth = async () => {
//     await axios
//       .get('http://localhost:5000/api/logged-user/', { withCredentials: true })
//       .then((res) => {
//         setUser(res.data);
//         setAuth(true);
//       })
//       .catch((error) => {
//         setAuth(false);
//       });
//   };

//   useEffect(() => {
//     isAuth();
//   }, [auth]);

//   return {
//     auth: auth,
//     user: user,
//   };
// };
// export default useAuth;
