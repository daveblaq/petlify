import * as React from "react";
import { useFonts } from "expo-font";

export default function FONTS() {
  const [loaded] = useFonts({
    'Quicksand': require("../../../assets/fonts/Quicksand.ttf"),
  });

  if (!loaded) {
    return null;
  }
}
