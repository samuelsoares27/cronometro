import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: 0.0
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Image source={require("./src/assets/cronometro.png")} style={styles.cronometro} />
        <Text style={styles.timer}>{this.state.timer}</Text>

        <View style={styles.botoesArea}>

          <TouchableOpacity style={styles.botao}>
            <View>
              <Text style={styles.botaoTexto}>Iniciar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <View>
              <Text style={styles.botaoTexto}>Parar</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00AAEF",
  },
  cronometro: {

  },
  timer: {
    fontSize: 65,
    color: "#fff",
    fontWeight: "bold",
    marginTop: -160
  },
  botoesArea: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 70,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 40,
    margin: 17
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00AAEF"
  }
});