import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello } from './components/helloworld/helloworld'
import style from './stylesheet.css'

const element = document.getElementById('application')!
element.className = style.container

ReactDOM.render(
  <Hello values={['1337', 'Adieu']} />,
  element,
)
