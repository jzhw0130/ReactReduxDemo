import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux';


import reduxStore from './store'
import updateActions from './Actions/UpdateAction'

class Form extends Component {

    updateTitle(title) {
        const titles = ['John', 'JJ', 'Brown', 'Cook', 'Jim', 'William', 'Joden', 'Trump'];
        const random = Math.floor((Math.random() * 100))%titles.length;
        console.log(random )        
        this.props.updateTitle(titles[random]);
    }

    render() {
        return (
            <View style={styles.Container}>
            <Text style={styles.Title} > {this.props.title} </Text>
            <TouchableHighlight onPress={ () => this.updateTitle('123') }>
                <Text style={[styles.Title,{backgroundColor:'transparent'}]}>
                    Update title
                </Text>
            </TouchableHighlight>
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        title: state.update.title,
    };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        updateTitle: (title) => dispatch(updateActions.updateTitle(title))
    }
}



const styles = StyleSheet.create({
    Container: {
        marginTop: 40,
        backgroundColor: '#808080',
        flex: 1,
    },
    Title: {
        margin: 20,
        textAlign: 'center',
        backgroundColor: '#808000',
        color:'blue',
        fontSize: 25,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
