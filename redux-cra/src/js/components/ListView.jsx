import React from 'react';
import ListItem from './ListItem';
import './styles.css';
import { connect } from 'react-redux';
import {fetchGnomes} from '../actions/getActions'
import PropTypes from 'prop-types';


class ListView extends React.Component {

    componentWillMount(){
        this.props.fetchGnomes();
    }
    render(){
        return(
            <div className="gnomesList">
                {
                    this.props.gnomes.map((gnome) => (
                        <div className="item" key={gnome.id}>
                        < ListItem gnome={gnome}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

ListView.propTypes = {
    fetchGnomes: PropTypes.func.isRequired,
    gnomes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    gnomes: state.gnomes.gnomes
});

export default connect(mapStateToProps, { fetchGnomes })(ListView);