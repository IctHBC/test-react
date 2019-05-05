import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "jlWKItApuIeOLXI9iosMENT9IgW5LiOaMVGYNe0OZtHgjirDLQKx5BXBxgnrMdcmrgPVY93fy4ZFbj6SeDbkJw%3D%3D";

class App extends React.Component {
  state = {
    sido: undefined,
    stationName: undefined,
    pm10: undefined,
    pm25: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const sido = e.target.elements.sido.value;
    const api_call = await fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${sido}&pageNo=1&numOfRows=10&ServiceKey=${API_KEY}&ver=1.3&_returnType=json/todos`);
    const data = await api_call.json();
    if (sido) {
      this.setState({
        sido: data.list[0].sidoName,
        stationName:data.list[0].stationName,
        pm10:data.list[0].pm10Value,
        pm25:data.list[0].pm25Value,
        error: ""
      });
    } else {
      this.setState({
        sido: undefined,
        stationName: undefined,
        pm10: undefined,
        pm25: undefined,
        error: "도시를 입력해주세요."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    sido={this.state.sido}
                    stationName={this.state.stationName}
                    pm10={this.state.pm10} 
                    pm25={this.state.pm25}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;