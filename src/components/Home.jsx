import { View, Platform } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import RepositoryList from "./RepositoryList.jsx";
import LogIn from "../pages/LogIn.jsx";
import AppBar from "./AppBar";


/**colocar varios AppBar dependiendo del dispositivo una forma de realizarlo */
/*const AppBar = Platform.select({
  ios:()=> require('./IOSAppBar.jsx').default,
  default:()=> require('./AppBar.jsx').default,
})()
*/
const Home = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signin" element={<LogIn />} exact />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Home;
