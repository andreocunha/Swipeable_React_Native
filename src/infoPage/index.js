import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import SwipeablePanel from '../componentes/swipeable/index'
import CardInfo from '../componentes/cardInfo'
const { width } = Dimensions.get('window');
import Imagem from '../assets/castle.png';

export default function InfoPage () {
    const [state, setState] = useState(false);

    function handleShowInfo(){
        setState(true);
    }

    function handleCloseInfo(){
        setState(false);
    }

    return (
        <View style={styles.container}>           

            {true &&  <TouchableOpacity onPress={handleShowInfo} style={styles.card}>
                <CardInfo
                    width={width}
                    imageUri={Imagem}
                    servicename="Neuschwanstein Castle"
                    description="Experience the fairytale atmosphere of Neuschwanstein Castle and 
                    the Bavarian Alps during this full-day train excursion from Munich. Travel by 
                    rail to the village of Hohenschwangau, where you can pick between a tour of the
                     castle’s interior (own expense) or a guided hike in the nearby foothills with
                      views of the fortress. Train transport and your guide are included."
                    price="R$ 100,00"
                    rating={4.5}
                    ratingnumber={4.5}
                /> 
            </TouchableOpacity>
            }

            <SwipeablePanel
                fullWidth
                isActive={state}
                onClose={handleCloseInfo}
                showCloseButton={true}
            >
                <Text style={styles.infoText}>Experience the fairytale atmosphere of Neuschwanstein Castle and 
                    the Bavarian Alps during this full-day train excursion from Munich. Travel by 
                    rail to the village of Hohenschwangau, where you can pick between a tour of the
                     castle’s interior (own expense) or a guided hike in the nearby foothills with
                      views of the fortress. Train transport and your guide are included.
                      Experience the fairytale atmosphere of Neuschwanstein Castle and 
                    the Bavarian Alps during this full-day train excursion from Munich. Travel by 
                    rail to the village of Hohenschwangau, where you can pick between a tour of the
                     castle’s interior (own expense) or a guided hike in the nearby foothills with
                      views of the fortress. Train transport and your guide are included.
                      Experience the fairytale atmosphere of Neuschwanstein Castle and 
                    the Bavarian Alps during this full-day train excursion from Munich. Travel by 
                    rail to the village of Hohenschwangau, where you can pick between a tour of the
                     castle’s interior (own expense) or a guided hike in the nearby foothills with
                      views of the fortress. Train transport and your guide are included.
                      Experience the fairytale atmosphere of Neuschwanstein Castle and 
                    the Bavarian Alps during this full-day train excursion from Munich. Travel by 
                    rail to the village of Hohenschwangau, where you can pick between a tour of the
                     castle’s interior (own expense) or a guided hike in the nearby foothills with
                      views of the fortress. Train transport and your guide are included.
                      Experience the fairytale atmosphere of Neuschwanstein Castle and 
                    the Bavarian Alps during this full-day train excursion from Munich. Travel by 
                    rail to the village of Hohenschwangau, where you can pick between a tour of the
                     castle’s interior (own expense) or a guided hike in the nearby foothills with
                      views of the fortress. Train transport and your guide are included.
                </Text>
            </SwipeablePanel>
        </View>
    )
}