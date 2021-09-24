import React, { Component } from 'react';

class News extends Component {
    render() {
        return <div id="news">
            <h2></h2>
            <p>
                <span>21.06.2009</span>
                <a href="#">Fusce interdum. Maecenas eu elit sed nulla dignissim interdum. Sed laoreet. Aenean </a>
            </p>
            <p>
                <span>20.06.2009</span>
                <a href="#">Fusce interdum. Maecenas eu elit sed nulla dignissim interdum. Sed laoreet. Aenean </a>
            </p>
      </div>
    }
} 

export default News;
// This can be brpken into another sub component (same like ServiceBlock component), but not going to implement it. 