import './index.css';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div class="temp"></div>,
  document.querySelector('#app')
)

const weather = require('openweather-apis')

weather.setLang('ru')
weather.setCity('Moscow')
weather.setCoordinate(55.75222, 37.61556)
weather.setCityId(832)
weather.setUnits('metric')
weather.setAPPID('abd24a17e177088f4bed7a757acb599f')

weather.getTemperature(function(err, temp) {
  let blockTemp = document.querySelector('.temp')
  blockTemp.innerHTML = temp
  console.log(temp);
})
