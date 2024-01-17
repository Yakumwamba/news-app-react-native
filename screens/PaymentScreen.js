import { View, Text, Pressable,Animated, TextInput,Button, ScrollView, Image } from 'react-native'
import React from 'react'
import ArrowTo from '../icons/arrow-to'
import CheckIcon from '../icons/checkIcon'
import KeyboardDismiss from '../components/keyboardDismiss'
import MTN from '../static/mtn.png'
import AIRTEL from '../static/airtel.png'
import PrimaryButton from '../components/PrimaryButton'
import PaymentButton from '../components/PaymentButton'
import Overlay from '../components/Overlay'
import { useState } from 'react'
import CheckIconInactive from '../icons/checkIconInactive'
import LoadingSpinner from '../icons/LoadingSpinner'
import Spinner from '../components/LoaderSpinner'



export default function PaymentScreen() {


    const [paymentMethod, setPaymentMethod] = useState(null);
    const [fullName, setFullName] = useState("");
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const handlePaymentMethodSelect = (method) => {
      setPaymentMethod(method);
    }

 const handleFullNameChange = (name) => {
   setFullName(name);
 }

 const handleProceedToPayment = () => {
   if (paymentMethod && fullName) {
     setOverlayVisible(true);
   }
 }

  return (
    <ScrollView className="bg-[#E3EAE8]">
    

 <View className="flex p-8 flex-col pt-10 pb-10 justify-center bg-[#BFD7D0] items-center w-full h-auto">

      {/* To destination */}
      <View className="flex text-[#20463C] align-baseline flex-row items-center"> 
            
            <View className="flex flex-row w-auto gap-8">
            <View className="flex flex-col">
              <Text className="text-4xl font-bold text-[#20463C] ">7:00 am</Text>
              <Text className="text-lg font-semibold text-[#20463C] ">Lusaka</Text>
            </View>

          <View >
       <ArrowTo />
          </View>
          

            <View className="flex flex-col">
              <Text className="text-4xl font-bold text-[#20463C] ">11:00 am</Text>
              <Text className="text-lg font-normal text-[#20463C] ">Kabwe</Text>
            </View>
            </View>
            </View>
 
   </View>
   <View className="flex flex-col">
   <Text className="font-semibold text-xl pl-5 mt-5 text-textColor">Passenger Details</Text>
   <View className=" items-start mt-5 mx-4 border-0.5 border-primary bg-greenFaint p-5 rounded-xl ">
            <TextInput
        placeholder="Full Name" 
        placeholderTextColor={"#20463C"}
        onChangeText={text => setFullName(text)}
        className=" pl-2 bg-[#FFF] text-lg w-full placeholder:text-lg   placeholder:text-opacity-25 placeholder:text-textColor h-12  rounded-xl"
        
  
      ></TextInput>
   
            </View>
   </View>

   {/* Payment Methods */}

   <View className="flex flex-col">

   <Text className="font-semibold text-xl pl-5 mt-5 text-textColor">Payment Method</Text>
   
   <KeyboardDismiss>
   <View className="flex flex-col  items-start mt-5 mx-4 border-0.5 border-primary bg-greenFaint p-5 rounded-xl ">
   <Pressable onPress={() => handlePaymentMethodSelect('MTN')}>
  <View className="flex flex-row w-full mb-5 py-2  px-2 items-center justify-between bg-[#FFF] rounded-xl">
    <Image source={MTN} width={60} height={60} />
    <TextInput
      placeholder="076"
      placeholderTextColor={"#20463C"}
      className=" pl-2 pr-10 text-lg w-3/4  placeholder:text-lg   placeholder:text-opacity-25 placeholder:text-textColor h-12  rounded-xl"
      editable={false}
    >
      
    </TextInput>
    {paymentMethod === 'MTN' ? <CheckIcon /> : <CheckIconInactive />}
  </View>
</Pressable>

<Pressable onPress={() => handlePaymentMethodSelect('AIRTEL')}>
  <View className="flex flex-row w-full mb-5  py-2  px-2 items-center justify-between bg-[#FFF] rounded-xl">
    <Image source={AIRTEL} width={60} />
    <TextInput
      placeholder="077" 
      placeholderTextColor={"#20463C"}
      className=" pl-2 pr-10 text-lg w-3/4  placeholder:text-lg   placeholder:text-opacity-25 placeholder:text-textColor h-12  rounded-xl"
      editable={false}
    > 
    </TextInput>
    {paymentMethod === 'AIRTEL' ? <CheckIcon /> : <CheckIconInactive />}
  </View>
</Pressable>
            </View>
            </KeyboardDismiss>
   </View>
   <View className="flex p-8 flex-col mt-20  pb-30 justify-center bg-[#FFF] items-center w-full h-auto">

{/* To destination */}

<View className="flex mb-5  w-full flex-row items-center justify-between ">

  <View className="flex flex-col ">
    <Text className="text-textColor text-xl font-bold">Total</Text>
    <Text className="text-textColor text-sm font-bold">1 Ticket</Text>
  </View>

    <Text className="text-textColor text-xl font-bold">K250.00</Text>
</View>


<View className="flex justify-center w-full">
<Pressable onPress={handleProceedToPayment} disabled={!paymentMethod || !fullName}>
         <PaymentButton active={!paymentMethod || !fullName} title={"Proceed to Payment "} />
       </Pressable>
</View>

    
<Overlay isVisible={isOverlayVisible} >
  <View className="flex self-center justify-center items-center">
  <Button title="Close" onPress={() => setOverlayVisible(false)} />
<Spinner />
  <Text className="text-2xl font-semibold text-textColor  ">Requesting Payment...</Text>
  </View>
</Overlay>

</View>
</ScrollView>
  )
}