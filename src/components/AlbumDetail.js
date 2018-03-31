import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = (props) => {
return (
    <Card>
        <CardSection>
            <View>
                <Image source={{uri: props.album.thumbnail_image}}/>
            </View>
            <View style={styles.headerContentStyle}>
              <Text>{props.album.title}</Text>
              <Text>{props.album.artist}</Text>
            </View>
        </CardSection>
    </Card>
)
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetails;