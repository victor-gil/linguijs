// src/index.js
import React from 'react'
import { render } from 'react-dom'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from './locales/en/messages'

import { Trans } from '@lingui/macro'
i18n.load('en', messages)
i18n.activate('en')

const App = () => (
  <I18nProvider i18n={i18n}>
    <h1><Trans>Hello</Trans></h1>
  </I18nProvider>
)

render(<App />, document.getElementById('root'))