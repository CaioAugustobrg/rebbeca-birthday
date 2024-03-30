import {
	BrowserRouter
	as Router,
	Route,
	Routes
} from 'react-router-dom';
import Home from '../pages/home';

const AppRouter = () => {
    return (
        <Router>

            <Routes>
            <Route path='/' element={<Home /> } />
            </Routes>
        </Router>
    )
}
export default AppRouter;
{/* <Input
              backgroundColor={"#1B1C1D"}
              borderRadius={6}
              w={320}
              h={40}
              m={10}
              p={10}
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.email.message}
              </p>
            )} */}