import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from './styles';

class CardInfo extends Component {
    render() {
      return (
        <ImageBackground style={styles.card} imageStyle={styles.imagem} source={this.props.imageUri}>
            <View style={styles.areainfo}>
                <View style={styles.areatexto}>
                    <View style={styles.stars}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={this.props.rating}
                            starSize={14}
                            fullStarColor="yellow"
                            emptyStarColor="#fff"
                        />
                        <Text style={styles.pontuacao}>{this.props.ratingnumber}</Text>
                    </View>
                    
                    <Text style={styles.nomeservico}>{this.props.servicename}</Text>
                    <Text style={styles.descricao}>{this.props.description}</Text>
                    <Text style={styles.preco}>{this.props.price}</Text>
                </View>
            </View>
        </ImageBackground>
      );
    }
  }
  export default CardInfo;