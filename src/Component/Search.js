import React from 'react';
import './Search.css';
import $ from 'jquery';

var listAvailable;

function List(props) {
    
    return (
        <section id="section-a" className="grid">
            <table className="content-wrap striped">
                <thead>
                <tr>
                    <th data-field="id">Restaurant</th>
                    <th data-field="address">Address</th>
                    <th data-field="rating">Rating</th>
                </tr>
                </thead>
        
                <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
    );
}

function ShowList(props) {
    const listAvailable = props.listAvailable;
    if (listAvailable) {
        return <List />
    }
    return null;
}

export default class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: []
        }
        this.getTodos();
        listAvailable = false;
    }

    getTodos() {
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/todos',
          dataType: 'json',
          cache: false,
          success: function(data) {
            listAvailable = true;
            this.setState({restaurants: data}, function() {
              console.log(this.state);
            });
          }.bind(this),
          error: function(xhr, status, err) {
            console.log(err);
          }
        })
      }

    render(){
        return (
            <div className="Search">
                <div id="showcase" className="grid">
                    <div className="bg-image"></div>
                    <div className="content-wrap">
                        <h1>Sate</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolore delectus quia iure possimus laborum expedita
                            ex inventore ea aliquisssd.</p>
                        <a href="#showcase" className="btn">Register</a>
                    </div>
                </div>
                <ShowList restaurants={this.state.restaurants} listAvailable={listAvailable} />
            </div>
            
            
        );
    }

}