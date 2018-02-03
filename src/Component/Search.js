import React from 'react';
import './Search.css';

export default class Search extends React.Component {

    render(){
        return (
            <div className="Search">
                <div id="showcase" class="grid">
                    <div class="bg-image"></div>
                    <div class="content-wrap">
                        <h1>Sate</h1>
                        <p>Your Food Recommdator to help pick out the best spot for your fav meal.</p>
                        <a href="#showcase" class="btn">Search</a>
                    </div>
                </div>

            </div>
            
        );
    }

}
