import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      nomeBotao: "Iniciar",
      ultimo: null
    };

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
    this.timer = null;
  }

  iniciar() {

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ nomeBotao: "Iniciar" });
    } else {

      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({ nomeBotao: "Parar" });
    }

  }

  limpar() {

    clearInterval(this.timer);
    this.timer = null;
    this.setState({ numero: 0, nomeBotao: "Iniciar", ultimo: this.state.numero });

  }


  render() {
    return (
      <View style={styles.container}>

        <Image source={require("./src/assets/cronometro.png")} style={styles.cronometro} />
        <Text style={styles.numero}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.botoesArea}>

          <TouchableOpacity style={styles.botao}>
            <View>
              <Text style={styles.botaoTexto} onPress={this.iniciar}>{this.state.nomeBotao}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <View>
              <Text style={styles.botaoTexto} onPress={this.limpar}>Limpar</Text>
            </View>
          </TouchableOpacity>


        </View>
        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
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
  numero: {
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
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});