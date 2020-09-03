import React, { Component } from 'react';
import './Table.css';

class Covid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryName: '',
      loading: true,
      covidInfo: [],
      covidGlobal: [],
      countryAbbr: []
    }
  }
  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    const urlInfo = await fetch(url);
    const data = await urlInfo.json();
    this.setState({
      loading: false,
      covidInfo: data.Countries,
      covidGlobal: data.Global,
      countryAbbr: data.Countries
    })
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    if(this.state.loading) {
      return <p id="loading">Loading...</p>
    }
    if(!this.state.covidInfo.length) {
      return <p>Didn't get info</p>;
    }

    return (
      <div>
      <h1> Covid 19 OutBreak Info </h1>
      <label for="countryName">Enter Country</label>
      <input list="browsers" type="text" placeholder="Search" name="countryName" onChange={this.inputHandler}/><hr></hr>
      <datalist id="browsers">
        <option value="Afghanistan"/>
        <option value="Albania"/>
        <option value="Algeria"/>
        <option value="Andorra"/>
        <option value="Angola"/>
        <option value="Antigua and Barbuda"/>
        <option value="Argentina"/>
        <option value="Armenia"/>
        <option value="Australia"/>
        <option value="Austria"/>
        <option value="Azerbaijan"/>
        <option value="Bahamas"/>
        <option value="Bahrain"/>
        <option value="Bangladesh"/>
        <option value="Barbados"/>
        <option value="Belarus"/>
        <option value="Belgium"/>
        <option value="Belize"/>
        <option value="Benin"/>
        <option value="Bhutan"/>
        <option value="Bolivia"/>
        <option value="Bosnia and Herzegovina"/>
        <option value="Botswana"/>
        <option value="Brazil"/>
        <option value="Brunei Darussalam"/>
        <option value="Bulgaria"/>
        <option value="Burkina Faso"/>
        <option value="Burundi"/>
        <option value="Cambodia"/>
        <option value="Cameroon"/>
        <option value="Canada"/>
        <option value="Cape Verde"/>
        <option value="Central African Republic"/>
        <option value="Chad"/>
        <option value="Chile"/>
        <option value="China"/>
        <option value="Colombia"/>
        <option value="Comoros"/>
        <option value="Congo (Brazzaville)"/>
        <option value="Congo (Kinshasa)"/>
        <option value="Costa Rica"/>
        <option value="Croatia"/>
        <option value="Cuba"/>
        <option value="Cyprus"/>
        <option value="Czech Republic"/>
        <option value="Côte d'Ivoire"/>
        <option value="Denmark"/>
        <option value="Djibouti"/>
        <option value="Dominica"/>
        <option value="Dominican Republic"/>
        <option value="Ecuador"/>
        <option value="Egypt"/>
        <option value="El Salvador"/>
        <option value="Equatorial Guinea"/>
        <option value="Eritrea"/>
        <option value="Estonia"/>
        <option value="Ethiopia"/>
        <option value="Fiji"/>
        <option value="Finland"/>
        <option value="France"/>
        <option value="Gabon"/>
        <option value="Gambia"/>
        <option value="Georgia"/>
        <option value="Germany"/>
        <option value="Ghana"/>
        <option value="Greece"/>
        <option value="Grenada"/>
        <option value="Guatemala"/>
        <option value="Guinea"/>
        <option value="Guinea-Bissau"/>
        <option value="Guyana"/>
        <option value="Haiti"/>
        <option value="Holy See (Vatican City State)"/>
        <option value="Honduras"/>
        <option value="Hungary"/>
        <option value="Iceland"/>
        <option value="India"/>
        <option value="Indonesia"/>
        <option value="Iran, Islamic Republic of"/>
        <option value="Iraq"/>
        <option value="Ireland"/>
        <option value="Israel"/>
        <option value="Italy"/>
        <option value="Jamaica"/>
        <option value="Japan"/>
        <option value="Jordan"/>
        <option value="Kazakhstan"/>
        <option value="Kenya"/>
        <option value="Korea (South)"/>
        <option value="Kuwait"/>
        <option value="Kyrgyzstan"/>
        <option value="Lao PDR"/>
        <option value="Latvia"/>
        <option value="Lebanon"/>
        <option value="Lesotho"/>
        <option value="Liberia"/>
        <option value="Libya"/>
        <option value="Liechtenstein"/>
        <option value="Lithuania"/>
        <option value="Luxembourg"/>
        <option value="Macedonia, Republic of"/>
        <option value="Madagascar"/>
        <option value="Malawi"/>
        <option value="Malaysia"/>
        <option value="Maldives"/>
        <option value="Mali"/>
        <option value="Malta"/>
        <option value="Mauritania"/>
        <option value="Mauritius"/>
        <option value="Mexico"/>
        <option value="Moldova"/>
        <option value="Monaco"/>
        <option value="Mongolia"/>
        <option value="Montenegro"/>
        <option value="Morocco"/>
        <option value="Mozambique"/>
        <option value="Myanmar"/>
        <option value="Namibia"/>
        <option value="Nepal"/>
        <option value="Netherlands"/>
        <option value="New Zealand"/>
        <option value="Nicaragua"/>
        <option value="Niger"/>
        <option value="Nigeria"/>
        <option value="Norway"/>
        <option value="Oman"/>
        <option value="Pakistan"/>
        <option value="Palestinian Territory"/>
        <option value="Panama"/>
        <option value="Papua New Guinea"/>
        <option value="Paraguay"/>
        <option value="Peru"/>
        <option value="Philippines"/>
        <option value="Poland"/>
        <option value="Portugal"/>
        <option value="Qatar"/>
        <option value="Republic of Kosovo"/>
        <option value="Romania"/>
        <option value="Russian Federation"/>
        <option value="Saint Kitts and Nevis"/>
        <option value="Saint Lucia"/>
        <option value="Saint Vincent and Grenadines"/>
        <option value="San Marino"/>
        <option value="Sao Tome and Principe"/>
        <option value="Saudi Arabia"/>
        <option value="Senegal"/>
        <option value="Serbia"/>
        <option value="Seychelles"/>
        <option value="Sierra Leone"/>
        <option value="Singapore"/>
        <option value="Slovakia"/>
        <option value="Slovenia"/>
        <option value="Somalia"/>
        <option value="South Africa"/>
        <option value="South Sudan"/>
        <option value="Spain"/>
        <option value="Sri Lanka"/>
        <option value="Sudan"/>
        <option value="Suriname"/>
        <option value="Swaziland"/>
        <option value="Sweden"/>
        <option value="Switzerland"/>
        <option value="Syrian Arab Republic (Syria)"/>
        <option value="Taiwan, Republic of China"/>
        <option value="Tajikistan"/>
        <option value="Tanzania, United Republic of"/>
        <option value="Thailand"/>
        <option value="Timor-Leste"/>
        <option value="Togo"/>
        <option value="Trinidad and Tobago"/>
        <option value="Tunisia"/>
        <option value="Turkey"/>
        <option value="Uganda"/>
        <option value="Ukraine"/>
        <option value="United Arab Emirates"/>
        <option value="United Kingdom"/>
        <option value="United States of America"/>
        <option value="Uruguay"/>
        <option value="Uzbekistan"/>
        <option value="Venezuela (Bolivarian Republic)"/>
        <option value="Viet Nam"/>
        <option value="Western Sahara"/>
        <option value="Yemen"/>
        <option value="Zambia"/>
        <option value="Zimbabwe"/>
      </datalist>


        {this.state.countryName === '' ? (
        <table className="blueTable">
        <thead>
        <tr>
        <th>Global</th>
        <th>Results</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
        <td colSpan="2">
        <div className="links"></div>
        </td>
        </tr>
        </tfoot>
        <tbody>
        <tr>
        <td>New Comfirmed</td>
        <td>{this.state.covidGlobal.NewConfirmed}</td>
        </tr>
        <tr>
        <td>Total Confirmed</td>
        <td>{this.state.covidGlobal.TotalConfirmed}</td>
        </tr>
        <tr>
        <td>New Comfirmed Cases</td>
        <td>{this.state.covidGlobal.NewDeaths}</td>
        </tr>
        <tr>
        <td>Total Comfirmed Cases</td>
        <td>{this.state.covidGlobal.TotalDeaths}</td>
        </tr>
        <tr>
        <td>New Deaths</td>
        <td>{this.state.covidGlobal.NewRecovered}</td>
        </tr>
        <tr>
        <td>Total Deaths</td>
        <td>{this.state.covidGlobal.TotalRecovered}</td>
        </tr>

        </tbody>
        </table> ) : ( <div id="search"> <p>Displaying Results for {this.state.countryName}...</p> </div> )}<br></br>

        {this.state.covidInfo.map(theData => (
          <div key={theData.CountryCode}>
          {this.state.countryName === theData.Country ? (

            <table class="blueTable">
            <thead>
            <tr>
            <th>Results</th>
            <th></th>
            </tr>
            </thead>
            <tfoot>
            <tr>
            <td colspan="2">
            <div class="links"></div>
            </td>
            </tr>
            </tfoot>
            <tbody>
            <tr>
            <td>Country</td>
            <td>{theData.Country}</td>
            </tr>
            <tr>
            <td>CountryCode</td>
            <td>{theData.CountryCode}</td>
            </tr>
            <tr>
            <td>New Comfirmed Cases</td>
            <td>{theData.NewConfirmed}</td>
            </tr>
            <tr>
            <td>Total Comfirmed Cases</td>
            <td>{theData.TotalConfirmed}</td>
            </tr>
            <tr>
            <td>New Deaths</td>
            <td>{theData.NewDeaths}</td>
            </tr>
            <tr>
            <td>Total Deaths</td>
            <td>{theData.TotalDeaths}</td>
            </tr>
            <tr>
            <td>New Recovered</td>
            <td>{theData.TotalRecovered}</td>
            </tr>
            <tr>
            <td>Total Recovered</td>
            <td>{theData.TotalRecovered}</td>
            </tr>
            <tr>
            <td>Date</td>
            <td>{theData.Date}</td>
            </tr>
            </tbody>
            </table> ) : ( <p></p> )}

          </div>
        ))}

        {this.state.countryAbbr.map(theDatas => (
          <div key={theDatas.CountryCode}>
          {this.state.countryName === theDatas.CountryCode ? (
          <table class="blueTable">
            <thead>
              <tr>
                <th>Results</th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="2">
                <div class="links"></div>
                </td>
                </tr>
                </tfoot>
                <tbody>
                <tr>
                <td>Country</td>
                <td>{theDatas.Country}</td>
                </tr>
                <tr>
                <td>CountryCode</td>
                <td>{theDatas.CountryCode}</td>
                </tr>
                <tr>
                <td>New Comfirmed Cases</td>
                <td>{theDatas.NewConfirmed}</td>
                </tr>
                <tr>
                <td>Total Comfirmed Cases</td>
                <td>{theDatas.TotalConfirmed}</td>
                </tr>
                <tr>
                <td>New Deaths</td>
                <td>{theDatas.NewDeaths}</td>
                </tr>
                <tr>
                <td>Total Deaths</td>
                <td>{theDatas.TotalDeaths}</td>
                </tr>
                <tr>
                <td>New Recovered</td>
                <td>{theDatas.TotalRecovered}</td>
                </tr>
                <tr>
                <td>Total Recovered</td>
                <td>{theDatas.TotalRecovered}</td>
                </tr>
                <tr>
                <td>Date</td>
                <td>{theDatas.Date}</td>
                </tr>
                </tbody>
          </table> ) : ( <p></p> )}
          </div> ))}
          <img id="img" src="https://www.gachd.org/wp-content/uploads/2020/04/alert-covid-19.jpg" alt="" width="150px;"/>
      </div>
    )
  }
}

export default Covid
