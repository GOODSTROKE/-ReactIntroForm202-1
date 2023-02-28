/**
 * Table React Component 
 * 
 */

/**
 * HTML REVIEW
 * thead -> table head 
 * tr -> table row 
 * th -> table header 
 * tbody -> table body
 * td -> table cell
 */

import React, { Component } from "react";

/*
create two simple function components to make
our table code more readable
*/




//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
      <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Rated</th>
              <th>Released</th>
              <th>Runtime</th>
              <th>Genre</th>
              <th>Director</th>
              <th>Writer</th>
              <th>Actors</th>
              <th>Plot</th>
              <th>Language</th>
              <th>Country</th>
              <th>Awards</th>
              <th>Metascore</th>
              <th>imdbRating</th>
              <th>imdbVotes</th>
              <th>Type</th>
              <th>Response</th>
            </tr>
          </thead>
  );
}

//TABLE BODY SIMPLE COMPONENT 
const TableBody = (props) => {


    //construct rows
    // use map to iterate over each row and wrap it in
    // a html table row  
    //registered an on click listener to remove the character
    const rows = props.data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.Title}</td>
          <td>{row.Year}</td>
          <td>{row.Rated}</td>
          <td>{row.Released}</td>
          <td>{row.Runtime}</td>
          <td>{row.Genre}</td>
          <td>{row.Director}</td>
          <td>{row.Writer}</td>
          <td>{row.Actors}</td>
          <td>{row.Plot}</td>
          <td>{row.Language}</td>
          <td>{row.Country}</td>
          <td>{row.Awards}</td>
          <td>{row.Metascore}</td>
          <td>{row.imdbRating}</td>
          <td>{row.imdbVotes}</td>
          <td>{row.imdbID}</td>
          <td>{row.Type}</td>
          <td>{row.Response}</td>
          <td><button onClick={() => props.removeCharacter(index)}> Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
  }
// TABLE is our main Component
class Table extends Component {
    render() {
        //read props passed in from App.js
        const { 
          characterData, 
          removeCharacter
        } = this.props;

        return ( 
          <table>
            <TableHeader/>
            <TableBody 
              data={characterData} 
              removeCharacter={removeCharacter}
             />
          </table>
        )
      }
 }

export default Table