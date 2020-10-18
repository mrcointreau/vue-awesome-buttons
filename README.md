# vue-awesome-buttons

Awesome Vue.js button components inspired by [this reddit post]()

<p align="center">
  <img src="https://user-images.githubusercontent.com/45950216/96180354-98b96380-0f32-11eb-8964-cd02850f5270.gif">
</p>

## Install

```
npm install vue-awesome-buttons
```

## Import

```javascript
Import plugin:

import VueAwesomeButtons from 'vue-awesome-buttons'

Vue.use(VueAwesomeButtons)
```

### OR

```javascript
import ButtonCreate from 'vue-awesome-buttons/src/components/ButtonCreate'
import ButtonSubscribe from 'vue-awesome-buttons/src/components/ButtonSubscribe'
import ButtonUpgrade from 'vue-awesome-buttons/src/components/ButtonUpgrade'
import ButtonGetStarted from 'vue-awesome-buttons/src/components/ButtonGetStarted'
import ButtonLearnMore from 'vue-awesome-buttons/src/components/ButtonLearnMore'
```

## Declaration

```html
<button-upgrade class="button-upgrade" :label="UPGRADE" @click="onClickEventHandler" />
<button-lear-more class="button-learn-more" :label="LEARN MORE" @click="onClickEventHandler" />
<button-get-started class="button-get-started" :label="GET STARTED" @click="onClickEventHandler" />
<button-subscribe class="button-subscribe" :label="SUBSCRIBE" @click="onClickEventHandler" />
<button-create class="button-create" :label="CREATE" @click="onClickEventHandler" />
```

## Styling

Buttons are shipped with browser defaults, override style through CSS:

```css
.button-upgrade {
  background-color: #ffc04c;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  color: #414141;
}

.button-learn-more {
  background-color: #f2fafe;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  color: #414141;
}

.button-get-started {
  background-color: #2146ec;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  color: #fff;
}

.button-subscribe {
  background-color: #da6056;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  color: #fff;
}

.button-create {
  background-color: #9f51f3;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  color: #fff;
}
```

# Properties

| Name  | Type   | Default                                                                         | Description  |
| ----- | ------ | ------------------------------------------------------------------------------- | ------------ |
| label | String | `'UPGRADE'` for `ButtonUpgrade`, `GET STARTED` for `ButtonGetStarted` and so on | Button label |

# Events

| Name  | Description |
| ----- | ----------- |
| click | Click event |

You can listen to the remaining buttons events through the [Vue native event modifier](https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components).
