import {
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
  Keyboard
  
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Form, Formik } from "formik";
import SearchIcon from "../icons/search-icon";
import PhoneNumberIcon from "../icons/phonenumberIcon";
import { useDispatch, useSelector } from 'react-redux';
import { 
  authSelector, 
  clearAuthErrorState,
  loginUser
} from "../store/reducers/authReducer";
import KeyboardDismiss from "../components/keyboardDismiss";
import { loginValidator } from "../utils";
import ContinueWithEmail from "../components/ContinueWithEmailButton";
export default function SignInScreen({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const { currentUser, isLoading, errors } = useSelector(authSelector);
  const dispatch = useDispatch();


  const handleLogin = values => {
    navigation.navigate("HomeScreen2")
     Keyboard.dismiss();
    //  dispatch(loginUser(values));
  };


  React.useEffect(() => {
    if (currentUser) {
      navigation.navigate(routes.home);
    }
    return () => dispatch(clearAuthErrorState());
  }, [currentUser, dispatch, navigation]);

  // const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);
  return (
    <View className="flex-1 justify-start pt-20  bg-[#fff]">
      <View className="px-4 flex-col ">
        <Text className="text-start text-2xl font-semibold">Enter your mobile number</Text>
        <Text className="text-start text-md font-light">We will send you a confirmation code</Text>
  
        {/* <TextInput placeholder={"+260"} /> */}

<KeyboardDismiss>
    <Formik
       initialValues={{ phoneNumber: '+260773962307'}}
       validate={loginValidator}
       onSubmit={handleLogin}
  
    >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors: error,
      touched,
    })=> <>
    <View className="flex mt-5 mb-5 rounded-xl flex-row px-4  items-center justify-between  bg-secondary  ">
    
    <View className="flex w-auto flex-row items-center h-12 justify-center ">
      <TextInput
        placeholder="Your mobile number"
        placeholderTextColor={"#20463C"}
        className="w-full "
        value={values.phoneNumber}
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
      ></TextInput>
       </View>
      
      </View>
      {(error.phoneNumber && touched.phoneNumber) || errors?.login ? (
                      <Text type="error" className="mb-2 text-[#F52D56]">
                        {error.phoneNumber ||
                          (errors?.login?.phoneNumber?.length &&
                            errors?.login?.phoneNumber[0]) ||
                          errors?.login}
                      </Text>
                    ) : null}
          {/* Verify Code Button*/}
    <Pressable onPress={handleSubmit}  android_ripple={"#E3EDEA"} >
      <PrimaryButton loading={isLoading} title={'Continue'} />
      </Pressable>

      <Pressable onPress={handleSubmit}  className="pt-5" android_ripple={"#E3EDEA"} >
        <View className="flex flex-row items-center justify-center mb-5">
        <View className="flex-1 bg-secondary drop-shadow-xl shadow-secondary    w-full h-[3px]">

</View>
<Text className="text-sm px-4 ">or</Text>
<View className=" flex-1 bg-secondary drop-shadow-xl shadow-secondary    w-full h-[3px]">

</View>
        </View>
    
      <ContinueWithEmail 
      title={"Continue with email"}
      />
      </Pressable>
    </>}
        </Formik>
    </KeyboardDismiss>
      </View>
 
    </View>
  );
}
