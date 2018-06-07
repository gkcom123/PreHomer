import React, { Component } from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component{

    itemSelectedhandler = key =>{
        console.log(this.props.places);
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        console.log(selPlace);
        this.props.navigator.push({
            screen: "prehomer.PlaceDetailsScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace : selPlace
            }
        })
    }
    render(){
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedhandler} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps)(FindPlaceScreen);