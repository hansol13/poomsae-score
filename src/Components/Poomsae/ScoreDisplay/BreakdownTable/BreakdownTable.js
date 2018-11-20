import React from 'react';

const breakDownTable = (props) => {
  return(
    <table align="center" width="75%"  >
          <tbody>
            <tr>
              <th>Tech Major</th>
              <th>Perf Major</th>
            </tr>
            
            <tr>
              <td><h3>{props.techMajor}</h3></td>
              <td><h3>{props.perfMajor}</h3></td>
            </tr>

            <tr>
              <th>Tech Minor</th>
              <th>Tech Minor</th>
            </tr>
            <tr>
              <td><h3>{props.techMinor}</h3></td>
              <td><h3>{props.perfMinor}</h3></td>
            </tr>
          </tbody>
        </table>
  );
}

export default breakDownTable;