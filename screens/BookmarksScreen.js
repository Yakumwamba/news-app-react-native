import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Bookmark from "../components/bookmark";
import bookmarkImage1 from "../static/bookmark1.png";
import bookmarkImage2 from "../static/bookmark2.png";
import bookmarkImage3 from "../static/bookmark3.png";
export default function BookmarksScreen() {
  return (
    <ScrollView className="px-4 h-full bg-white">
      <View className="pt-20">
        <Text className="text-2xl font-semibold">Bookmarks</Text>
        <Text className="text-lg text-[#7C82A1]">
          Saved articles to the library
        </Text>
      </View>

      <View className="flex-1 gap-2 my-5 flex-col pt-5">
        <Bookmark
          image={bookmarkImage1}
          title={"UI/UX Design"}
          description={"A Simple Trick For Creating Color Palettes Quickly"}
        />
        <Bookmark
          image={bookmarkImage2}
          title={"Art"}
          description={"Six steps to creating a color palette"}
        />
        <Bookmark
          image={bookmarkImage3}
          title={"Colors"}
          description={"Creating Color Palette from world around you"}
        />
        <Bookmark
          image={bookmarkImage2}
          title={"Art"}
          description={"A Simple Trick For Creating Color Palettes Quickly"}
        />
      </View>
    </ScrollView>
  );
}
