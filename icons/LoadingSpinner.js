
import { View, Image} from "react-native";
import Svg, { Path, Circle,  } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
import image from '../static/spinner.png'


const LoadingSpinner = ({ color }) => (

<Image source={image} height={10} width={10} />

);

export default LoadingSpinner;
