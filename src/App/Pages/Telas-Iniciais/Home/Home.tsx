import { Text, View, Image, TouchableOpacity } from "react-native";
import { VerticalCard } from "../../../../shared/components/Cards/VerticalCards/VerticalCard";
import { homeStyle } from "./style";
import { selecaoProdutos } from "../../../../shared/utils/data/teste-cards";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { GlobalStyles as global } from "../../../../../styles-global";
import { HorizontalCard } from "../../../../shared/components/Cards/horizontal-cards/horizontal-card.tsx";
import { useEffect } from "react";
import {
  AccessibilityBar,
  Header,
} from "../../../../shared/components/Header/Header";
const homeBanner = require("../../../assets/illustrations/homepage-banner.png");
const shoeSection = require("../../../assets/illustrations/capa-tenis-section.png");

export default function Home({ navigation, route }) {
  useEffect(() => {
    console.log(selecaoProdutos.length);
  });
  return (
    <ScrollView>
      <AccessibilityBar />
      <Header>
        <View style={homeStyle.home_banner_container}>
          <Image source={homeBanner} style={homeStyle.home_banner} />
        </View>
        <Text style={global.sectionTitle}>ofertas da semana</Text>
        <View style={homeStyle.homeView}>
          <View style={homeStyle.cardSlider}>
            {selecaoProdutos?.map((item, i) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProdutoDetalhes")}
              >
                <VerticalCard
                  key={i}
                  name={item.name}
                  precoAnterior={item.precoAnterior}
                  precoAtual={item.precoAtual}
                  parcelamento={item.parcelamento}
                  imgProduto={item.imgProduto}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* <Button title="aaa" onPress={() => navigation.navigate("Login")} /> */}

        <View style={homeStyle.home_banner_container}>
          <Image source={shoeSection} style={global.section_banner} />
          <FlatList
            maxToRenderPerBatch={4}
            initialNumToRender={2}
            style={{
              height: "fit-content",
              overflow: "hidden",
              marginVertical: 15,
            }}
            numColumns={2}
            keyExtractor={(item, idx) => item.name}
            data={selecaoProdutos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <HorizontalCard
                  key={item.name}
                  name={item.name}
                  precoAnterior={item.precoAnterior}
                  precoAtual={item.precoAtual}
                  parcelamento={item.parcelamento}
                  imgProduto={item.imgProduto}
                  linkTo="Login"
                />
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={homeStyle.home_banner_container}>
          <Text style={global.sectionTitle}>Recomendados para você</Text>
          <FlatList
            maxToRenderPerBatch={4}
            initialNumToRender={2}
            style={{
              height: "fit-content",
              overflow: "hidden",
              marginVertical: 15,
            }}
            numColumns={2}
            keyExtractor={(item, idx) => item.name}
            data={selecaoProdutos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <HorizontalCard
                  key={item.name}
                  name={item.name}
                  precoAnterior={item.precoAnterior}
                  precoAtual={item.precoAtual}
                  parcelamento={item.parcelamento}
                  imgProduto={item.imgProduto}
                  linkTo="Login"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Header>
    </ScrollView>
  );
}
